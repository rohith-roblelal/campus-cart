from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.security import OAuth2PasswordBearer
from .database import get_db
from . import auth, models
from sqlalchemy.future import select

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/login")

async def get_current_user(token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
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
