from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from .. import schemas, models, dependencies
from ..database import get_db

router = APIRouter(
    prefix="/api/reviews",
    tags=["Reviews"],
)

@router.get("/")
async def get_reviews(
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(models.Review).limit(50))
    return result.scalars().all()
