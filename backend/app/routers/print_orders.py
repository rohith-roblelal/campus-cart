from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from .. import schemas, models, dependencies
from ..database import get_db

router = APIRouter(
    prefix="/api/print-orders",
    tags=["Print Orders"],
)

# Minimal print order schemas can be defined inline or we reuse dict for simplicity
# In production, we'd add PrintOrderCreate and PrintOrderResponse to schemas.py

@router.get("/")
async def get_my_print_orders(
    db: AsyncSession = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    result = await db.execute(select(models.PrintOrder).filter(models.PrintOrder.userId == current_user.id))
    return result.scalars().all()
