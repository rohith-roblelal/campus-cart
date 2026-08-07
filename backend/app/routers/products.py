from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from sqlalchemy.orm import selectinload
from .. import schemas, models
from ..database import get_db

router = APIRouter(
    prefix="/api/products",
    tags=["Products"],
)

@router.get("/", response_model=List[schemas.ProductResponse])
async def get_products(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    # Eager load category for the list
    stmt = select(models.Product).options(selectinload(models.Product.category)).offset(skip).limit(limit)
    result = await db.execute(stmt)
    products = result.scalars().all()
    return products

@router.get("/{product_id}", response_model=schemas.ProductResponse)
async def get_product(product_id: str, db: AsyncSession = Depends(get_db)):
    # Eager load category and reviews (with their user)
    stmt = select(models.Product).options(
        selectinload(models.Product.category),
        selectinload(models.Product.reviews).selectinload(models.Review.user)
    ).filter(models.Product.id == product_id)
    result = await db.execute(stmt)
    product = result.scalars().first()
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
