from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from datetime import timedelta
from fastapi import Response
from .. import schemas, models, auth, dependencies
from ..database import get_db

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)

@router.post("/register", response_model=schemas.UserResponse, status_code=status.HTTP_201_CREATED)
async def register(user: schemas.UserCreate, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.User).filter(models.User.email == user.email))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
        
    hashed_password = auth.get_password_hash(user.password)
    new_user = models.User(
        name=user.name,
        email=user.email,
        passwordHash=hashed_password,
        role=user.role
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user

@router.post("/login", response_model=schemas.Token)
async def login(credentials: schemas.UserCreate, response: Response, db: AsyncSession = Depends(get_db)):
    # Note: In a real app we'd use OAuth2PasswordRequestForm
    result = await db.execute(select(models.User).filter(models.User.email == credentials.email))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    if not auth.verify_password(credentials.password, user.passwordHash):
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"user_id": user.id, "role": user.role}, expires_delta=access_token_expires
    )
    
    response.set_cookie(
        key="access_token",
        value=f"Bearer {access_token}",
        httponly=True,
        samesite="lax",
        max_age=auth.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/"
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/admin-login", response_model=schemas.Token)
async def admin_login(credentials: schemas.UserCreate, response: Response, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(models.User).filter(models.User.email == credentials.email))
    user = result.scalars().first()
    if not user or user.role != "ADMIN":
        raise HTTPException(status_code=401, detail="Invalid admin credentials")
        
    if not auth.verify_password(credentials.password, user.passwordHash):
        raise HTTPException(status_code=401, detail="Invalid admin credentials")
        
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"user_id": user.id, "role": user.role}, expires_delta=access_token_expires
    )
    
    response.set_cookie(
        key="access_token",
        value=f"Bearer {access_token}",
        httponly=True,
        samesite="lax",
        max_age=auth.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        path="/"
    )
    
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("access_token", path="/")
    return {"message": "Logged out successfully"}
