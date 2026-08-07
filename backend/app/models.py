from sqlalchemy import Column, String, Float, Integer, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import uuid
from .database import Base

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "User"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    passwordHash = Column(String, nullable=False)
    role = Column(String, default="USER")
    accommodationType = Column(String, nullable=True)
    addressDetails = Column(String, nullable=True)
    collegeName = Column(String, nullable=True)
    course = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    year = Column(String, nullable=True)
    avatar = Column(String, nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    orders = relationship("Order", back_populates="user", cascade="all, delete-orphan")
    printOrders = relationship("PrintOrder", back_populates="user", cascade="all, delete-orphan")
    reviews = relationship("Review", back_populates="user", cascade="all, delete-orphan")


class Category(Base):
    __tablename__ = "Category"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    name = Column(String, unique=True, index=True, nullable=False)
    imageUrl = Column(String, nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    products = relationship("Product", back_populates="category")


class Product(Base):
    __tablename__ = "Product"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)
    imageUrl = Column(String, nullable=True)
    categoryId = Column(String, ForeignKey("Category.id"), nullable=False)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    category = relationship("Category", back_populates="products")
    orderItems = relationship("OrderItem", back_populates="product")
    reviews = relationship("Review", back_populates="product")


class Order(Base):
    __tablename__ = "Order"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    userId = Column(String, ForeignKey("User.id", ondelete="CASCADE"), nullable=False)
    totalAmount = Column(Float, nullable=False)
    status = Column(String, default="ORDERED")
    deliveryLocation = Column(String, nullable=True)
    deliveryNotes = Column(String, nullable=True)
    paymentMethod = Column(String, default="COD")
    paymentStatus = Column(String, default="Pending")
    transactionId = Column(String, nullable=True)
    paidAt = Column(DateTime(timezone=True), nullable=True)
    isUrgent = Column(Boolean, default=False)
    urgentFee = Column(Float, default=0)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())
    updatedAt = Column(DateTime(timezone=True), onupdate=func.now(), server_default=func.now())

    user = relationship("User", back_populates="orders")
    items = relationship("OrderItem", back_populates="order")


class OrderItem(Base):
    __tablename__ = "OrderItem"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    orderId = Column(String, ForeignKey("Order.id"), nullable=False)
    productId = Column(String, ForeignKey("Product.id"), nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)

    order = relationship("Order", back_populates="items")
    product = relationship("Product", back_populates="orderItems")


class PrintOrder(Base):
    __tablename__ = "PrintOrder"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    userId = Column(String, ForeignKey("User.id", ondelete="CASCADE"), nullable=False)
    fileData = Column(String, nullable=False)
    fileName = Column(String, nullable=False)
    totalPages = Column(Integer, nullable=False)
    copies = Column(Integer, nullable=False)
    colorMode = Column(String, nullable=False)
    pricePerPage = Column(Float, nullable=False)
    totalPrice = Column(Float, nullable=False)
    address = Column(String, nullable=False)
    orderStatus = Column(String, default="Uploaded")
    customPageRange = Column(String, nullable=True)
    paymentMethod = Column(String, default="COD")
    paymentStatus = Column(String, default="Pending")
    transactionId = Column(String, nullable=True)
    paidAt = Column(DateTime(timezone=True), nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="printOrders")


class Review(Base):
    __tablename__ = "Review"

    id = Column(String, primary_key=True, index=True, default=generate_uuid)
    productId = Column(String, ForeignKey("Product.id", ondelete="CASCADE"), nullable=False)
    userId = Column(String, ForeignKey("User.id", ondelete="CASCADE"), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="reviews")
    product = relationship("Product", back_populates="reviews")
