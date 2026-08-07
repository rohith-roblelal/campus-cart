from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Campus Cart API")

import os

origins_str = os.getenv("CORS_ORIGINS", "http://localhost:3000")
origins = [origin.strip() for origin in origins_str.split(",")]

# Configure CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from app.routers import auth, products, orders, users, print_orders, reviews

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "message": "FastAPI backend is running"}

app.include_router(auth.router)
app.include_router(products.router)
app.include_router(orders.router)
app.include_router(users.router)
app.include_router(print_orders.router)
app.include_router(reviews.router)
