from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional, List
from datetime import datetime

# --- Token Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[str] = None

# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    email: EmailStr
    role: str = "USER"
    accommodationType: Optional[str] = None
    addressDetails: Optional[str] = None
    collegeName: Optional[str] = None
    course: Optional[str] = None
    phone: Optional[str] = None
    year: Optional[str] = None
    avatar: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    accommodationType: Optional[str] = None
    addressDetails: Optional[str] = None
    collegeName: Optional[str] = None
    course: Optional[str] = None
    phone: Optional[str] = None
    year: Optional[str] = None
    avatar: Optional[str] = None

class UserResponse(UserBase):
    id: str
    createdAt: datetime
    updatedAt: datetime
    model_config = ConfigDict(from_attributes=True)

# --- Category Schemas ---
class CategoryBase(BaseModel):
    name: str
    imageUrl: Optional[str] = None

class CategoryResponse(CategoryBase):
    id: str
    createdAt: datetime
    updatedAt: datetime
    model_config = ConfigDict(from_attributes=True)

# --- Product Schemas ---
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    stock: int = 0
    imageUrl: Optional[str] = None
    categoryId: str

class ReviewResponse(BaseModel):
    id: str
    productId: str
    userId: str
    rating: int
    comment: Optional[str] = None
    createdAt: datetime
    user: Optional[UserResponse] = None
    model_config = ConfigDict(from_attributes=True)

class ProductResponse(ProductBase):
    id: str
    createdAt: datetime
    updatedAt: datetime
    category: Optional[CategoryResponse] = None
    reviews: List[ReviewResponse] = []
    model_config = ConfigDict(from_attributes=True)

# --- Order Schemas ---
class OrderItemBase(BaseModel):
    productId: str
    quantity: int
    price: float

class OrderItemResponse(OrderItemBase):
    id: str
    orderId: str
    model_config = ConfigDict(from_attributes=True)

class OrderBase(BaseModel):
    totalAmount: float
    status: str = "ORDERED"
    deliveryLocation: Optional[str] = None
    deliveryNotes: Optional[str] = None
    paymentMethod: str = "COD"
    paymentStatus: str = "Pending"
    transactionId: Optional[str] = None
    paidAt: Optional[datetime] = None
    isUrgent: bool = False
    urgentFee: float = 0.0

class OrderCreate(OrderBase):
    items: List[OrderItemBase]

class OrderResponse(OrderBase):
    id: str
    userId: str
    createdAt: datetime
    updatedAt: datetime
    items: List[OrderItemResponse] = []
    model_config = ConfigDict(from_attributes=True)
