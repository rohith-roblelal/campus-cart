# Campus Cart - Progress Tracker

## ✅ Completed Tasks

### Architecture & Setup
- [x] Set up a monorepo structure with `frontend/` (Next.js) and `backend/` (FastAPI) directories.
- [x] Migrated backend from Prisma + Next.js Server Actions to a dedicated **Python FastAPI** service.
- [x] Replaced Prisma ORM with **SQLAlchemy 2.0 (async)** and **Alembic** for migrations.
- [x] Cleaned up root directory by removing old temporary files and scratch scripts.

### Backend Development (FastAPI)
- [x] Implemented API Routers:
  - `Auth` (/api/auth)
  - `Users` (/api/user) - Added `/profile` GET/PUT endpoints.
  - `Products & Categories` (/api/products)
  - `Orders` (/api/orders)
  - `Print Orders` (/api/print_orders)
  - `Reviews` (/api/reviews)
- [x] Created Pydantic schemas for request validation (`email-validator` added for robust email checks).
- [x] Eager loaded relationships (e.g., Categories and Reviews for Products) using `selectinload`.

### Frontend Development (Next.js)
- [x] Configured Next.js rewrites in `next.config.ts` to proxy `/api/*` to the FastAPI backend.
- [x] Refactored Next.js Server Components (`app/page.tsx`, `app/products/[id]/page.tsx`) to fetch data from the REST API instead of querying the database directly.

### Production Readiness
- [x] Prepared backend for **Render** deployment with **PostgreSQL** support (`asyncpg`).
- [x] Updated SQLAlchemy and Alembic configurations to seamlessly switch between local SQLite and Render's PostgreSQL `DATABASE_URL`.
- [x] Prepared frontend for **Vercel** deployment (reads `NEXT_PUBLIC_API_URL` for API routing).
- [x] Secured backend CORS to accept origins from environment variables.
- [x] Generated `.env.production` template for managing secrets.

## 🚀 Next Steps / Pending

- [ ] Complete full deployment to Vercel and Render.
- [ ] Connect production Postgres database.
- [ ] End-to-end testing of user flows (Auth, Checkout, Print Ordering) on the live deployment.
- [ ] Implement payment gateway integration (if applicable, currently set to COD).
