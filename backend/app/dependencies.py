from fastapi import Depends, HTTPException, status, Request
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordBearer
from .database import get_db
from . import auth, models
from sqlalchemy.future import select

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login", auto_error=False)

async def get_current_user(request: Request, token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    cookie_token = request.cookies.get("access_token")
    if cookie_token and cookie_token.startswith("Bearer "):
        token = cookie_token.split(" ")[1]
    elif not token:
        raise credentials_exception
        
    payload = auth.decode_access_token(token)
    if payload is None:
        raise credentials_exception
        
    user_id: str = payload.get("user_id")
    if user_id is None:
        raise credentials_exception
        
    result = await db.execute(select(models.User).filter(models.User.id == user_id))
    user = result.scalars().first()
    
    if user is None:
        raise credentials_exception
        
    return user
