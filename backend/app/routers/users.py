from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from .. import schemas, models, dependencies
from ..database import get_db

router = APIRouter(
    prefix="/api/user",
    tags=["User"],
)

@router.get("/profile", response_model=schemas.UserResponse)
async def get_my_profile(current_user: models.User = Depends(dependencies.get_current_user)):
    return current_user

@router.put("/profile", response_model=schemas.UserResponse)
async def update_my_profile(
    update_data: schemas.UserUpdate, 
    db: AsyncSession = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    update_dict = update_data.model_dump(exclude_unset=True)
    for key, value in update_dict.items():
        setattr(current_user, key, value)
    
    db.add(current_user)
    await db.commit()
    await db.refresh(current_user)
    return current_user
