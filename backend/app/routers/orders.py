from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from .. import schemas, models, dependencies
from ..database import get_db

router = APIRouter(
    prefix="/api/orders",
    tags=["Orders"],
)

@router.post("/", response_model=schemas.OrderResponse, status_code=status.HTTP_201_CREATED)
async def create_order(
    order_in: schemas.OrderCreate, 
    db: AsyncSession = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    new_order = models.Order(
        userId=current_user.id,
        totalAmount=order_in.totalAmount,
        status=order_in.status,
        deliveryLocation=order_in.deliveryLocation,
        deliveryNotes=order_in.deliveryNotes,
        paymentMethod=order_in.paymentMethod,
        paymentStatus=order_in.paymentStatus,
        isUrgent=order_in.isUrgent,
        urgentFee=order_in.urgentFee
    )
    db.add(new_order)
    await db.commit()
    await db.refresh(new_order)
    
    # Add items
    for item in order_in.items:
        order_item = models.OrderItem(
            orderId=new_order.id,
            productId=item.productId,
            quantity=item.quantity,
            price=item.price
        )
        db.add(order_item)
    await db.commit()
    await db.refresh(new_order)
    
    return new_order

@router.get("/", response_model=List[schemas.OrderResponse])
async def get_my_orders(
    db: AsyncSession = Depends(get_db),
    current_user: models.User = Depends(dependencies.get_current_user)
):
    result = await db.execute(select(models.Order).filter(models.Order.userId == current_user.id))
    orders = result.scalars().all()
    return orders
