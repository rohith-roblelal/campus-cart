# 🛒 Campus Cart

> A full-stack campus marketplace designed to make buying, selling, and discovering products within a college community simple, secure, and accessible.

[![Status](https://img.shields.io/badge/status-active-success)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](#license)
[![Type](https://img.shields.io/badge/project-full--stack-orange)](#)
[![Security](https://img.shields.io/badge/security-focused-purple)](#security)

---

## 📌 Overview

**Campus Cart** is a campus-focused marketplace platform built to solve a common problem in college communities: students often need to buy or sell items, but there is no dedicated, trusted platform designed specifically for their campus.

Instead of relying on scattered WhatsApp groups, social media posts, or informal communication, Campus Cart provides a centralized platform where students can discover listings, publish products, communicate with other users, and manage their marketplace activity.

The project was built as a practical full-stack application with a focus on:

* Real-world user workflows
* Secure authentication and authorization
* RESTful API design
* Database-driven application architecture
* Responsive frontend development
* Validation and error handling
* Scalable project structure

---

# 🎯 Problem

College students regularly buy, sell, exchange, or give away items such as:

* Textbooks
* Electronics
* Study materials
* Furniture
* Accessories
* Event-related items
* Used academic equipment

However, these transactions are commonly handled through:

* WhatsApp groups
* Instagram
* Telegram
* Personal contacts
* Informal college communities

This creates several problems:

* Listings become difficult to find
* Important information gets buried in chat messages
* There is no structured product discovery
* Sellers cannot properly manage listings
* Buyers have limited information about products
* There is no centralized marketplace workflow
* Trust and security become difficult to manage

---

# 💡 Solution

Campus Cart provides a dedicated digital marketplace for the campus community.

The platform organizes the complete marketplace workflow into a single application:

```text
User
  │
  ├── Create Account / Login
  │
  ├── Browse Products
  │
  ├── Search / Filter
  │
  ├── View Product Details
  │
  ├── Create Listing
  │
  ├── Manage Listings
  │
  └── Interact with Other Users
```

The goal is to make campus commerce:

**Discoverable → Organized → Secure → Convenient**

---

# 🏗️ Architecture

Campus Cart follows a layered full-stack architecture.

```text
┌───────────────────────────────┐
│          Client / UI          │
│                               │
│     Web Application           │
│     React / Next.js           │
└───────────────┬───────────────┘
                │
                │ HTTP / REST API
                ▼
┌───────────────────────────────┐
│          Backend API          │
│                               │
│ Routes / Controllers          │
│ Services / Business Logic     │
│ Validation / Authorization    │
└───────────────┬───────────────┘
                │
                │ Database Queries
                ▼
┌───────────────────────────────┐
│          Database             │
│                               │
│ Users                         │
│ Products / Listings           │
│ Transactions / Relationships  │
│ Other application data        │
└───────────────────────────────┘
```

### Architectural principles

The application is structured around separation of responsibilities:

```text
Presentation
     ↓
API Layer
     ↓
Business Logic
     ↓
Data Access
     ↓
Database
```

This makes the system easier to:

* Maintain
* Test
* Debug
* Extend
* Secure
* Scale

---

# 🧰 Tech Stack

## Frontend

* React / Next.js
* TypeScript
* HTML5
* CSS / Tailwind CSS
* Responsive UI
* Client-side state management

## Backend

* Node.js
* TypeScript
* REST API
* Server-side validation
* Authentication
* Authorization

## Database

* PostgreSQL / relational database
* SQL
* Relational data modelling
* Foreign-key relationships
* Indexed queries

## Development & Infrastructure

* Git
* GitHub
* Environment variables
* REST API
* Deployment platform
* CI/CD-ready architecture

> Update this section with the exact technologies used by the current implementation so the README always matches the codebase.

---

# ✨ Features

## 👤 User Management

* User registration
* User login
* Secure session handling
* Profile management
* Logout

## 🛍️ Marketplace

* Browse product listings
* View product details
* Create listings
* Edit listings
* Delete listings
* Manage personal listings
* Product categorization

## 🔎 Discovery

* Search products
* Filter listings
* Browse categories
* View relevant product information

## 📦 Product Listings

Each listing can contain information such as:

* Product name
* Description
* Price
* Category
* Images
* Seller information
* Listing status
* Creation date

## 📱 Responsive Experience

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile browsers

---

# 🗄️ Database

Campus Cart uses a relational database to persist application data.

A simplified relationship model:

```text
                    ┌─────────────┐
                    │    Users    │
                    └──────┬──────┘
                           │
                           │ creates
                           ▼
                    ┌─────────────┐
                    │  Listings   │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Category │ │  Images  │ │  Status  │
        └──────────┘ └──────────┘ └──────────┘
```

### Database design principles

The database is designed around:

* Primary keys
* Foreign keys
* Referential integrity
* Normalized relational data
* Unique constraints
* Appropriate indexes
* Server-side validation

---

# 🔌 API

Campus Cart exposes backend functionality through API endpoints.

A typical API structure follows:

```text
/api
 ├── /auth
 │    ├── register
 │    ├── login
 │    ├── logout
 │    └── me
 │
 ├── /users
 │
 ├── /products
 │    ├── GET
 │    ├── POST
 │    ├── PUT/PATCH
 │    └── DELETE
 │
 ├── /categories
 │
 └── /...
```

### Example request flow

```text
Frontend
   │
   │ POST /api/...
   ▼
API Route
   │
   ▼
Authentication
   │
   ▼
Authorization
   │
   ▼
Validation
   │
   ▼
Business Logic
   │
   ▼
Database
   │
   ▼
JSON Response
   │
   ▼
Frontend
```

API responses should consistently communicate:

* Success/failure
* HTTP status
* Data
* Validation errors
* Authentication errors
* Authorization errors
* Server errors

---

# 🔐 Authentication

Authentication protects user accounts and private application functionality.

The authentication flow follows the general model:

```text
User
 │
 │ Credentials
 ▼
Login Endpoint
 │
 ▼
Credential Validation
 │
 ▼
Password Verification
 │
 ▼
Session / Token Creation
 │
 ▼
Authenticated Request
 │
 ▼
Protected API
```

Passwords should **never be stored in plaintext**.

Authentication credentials should be handled using secure password hashing and protected session/token mechanisms.

Protected resources verify authentication before allowing access.

---

# 🛡️ Security

Security is an important part of Campus Cart's architecture.

### Authentication

* Passwords are hashed rather than stored directly
* Protected routes require authentication
* Sessions/tokens are validated server-side

### Authorization

Authentication answers:

> "Who are you?"

Authorization answers:

> "Are you allowed to perform this action?"

Operations affecting user-owned resources should verify ownership server-side.

For example:

```text
User A
  │
  └── Attempts to modify User B's listing
                    │
                    ▼
             Authorization Check
                    │
                    ▼
                 DENIED
```

Client-side UI restrictions are **not treated as security boundaries**.

### Input Validation

User-controlled input should be validated before reaching business logic or the database.

Examples:

* Product name
* Price
* Description
* IDs
* Query parameters
* Authentication credentials

### Security principles

Campus Cart follows common application-security principles including:

* Least privilege
* Server-side authorization
* Input validation
* Secure credential handling
* Controlled error responses
* Environment-based secret management
* Protection of sensitive configuration
* Database constraints

---

# 🖥️ Screenshots

## Homepage

![Campus Cart Homepage](./screenshots/homepage.png)

## Marketplace

![Campus Cart Marketplace](./screenshots/marketplace.png)

## Product Details

![Campus Cart Product Details](./screenshots/product-details.png)

## Create Listing

![Campus Cart Create Listing](./screenshots/create-listing.png)

## User Dashboard

![Campus Cart Dashboard](./screenshots/dashboard.png)

> Add the actual screenshots to `screenshots/` in the repository. Do not leave broken image paths in the final README.

---

# 🚀 Deployment

Campus Cart is designed for production deployment using separate application and data services where appropriate.

### Production architecture

```text
                    Internet
                       │
                       ▼
                ┌─────────────┐
                │   Frontend  │
                │   Hosting   │
                └──────┬──────┘
                       │
                       │ HTTPS
                       ▼
                ┌─────────────┐
                │   Backend   │
                │    API      │
                └──────┬──────┘
                       │
                       │ Secure DB Connection
                       ▼
                ┌─────────────┐
                │  Database   │
                └─────────────┘
```

### Deployment requirements

Production configuration should provide:

* HTTPS
* Environment variables
* Production database credentials
* Secure authentication configuration
* CORS configuration
* Database connection configuration
* Error logging
* Appropriate build configuration

---

# 💻 Local Setup

## 1. Clone the repository

```bash
git clone https://github.com/rohith-roblelal/campus-cart.git

cd campus-cart
```

## 2. Install dependencies

Install the dependencies for the frontend and backend according to the repository structure.

```bash
npm install
```

If the project contains separate applications:

```bash
cd frontend
npm install

cd ../backend
npm install
```

## 3. Configure environment variables

Create the required environment files.

Example:

```env
DATABASE_URL=your_database_url

AUTH_SECRET=your_secret

NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Never commit real secrets to GitHub.**

Use `.env.example` to document required variables without exposing credentials.

## 4. Configure the database

Create/configure the local database and run the required migrations.

```bash
# Example
npm run migrate
```

Use the actual migration command provided by the project.

## 5. Start the application

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

Then open the local application in your browser.

---

# 🧪 Testing

The application should be tested at multiple levels.

### Recommended testing layers

```text
Unit Tests
    ↓
Integration Tests
    ↓
API Tests
    ↓
End-to-End Tests
```

Important security scenarios should include:

* Unauthorized API access
* Invalid authentication
* Invalid input
* Accessing another user's resource
* Editing another user's listing
* Deleting another user's listing
* Invalid resource IDs
* Expired sessions/tokens

---

# 📁 Project Structure

A typical structure:

```text
campus-cart/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── app/
│   ├── hooks/
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── models/
│   └── ...
│
├── database/
│   ├── migrations/
│   └── ...
│
├── screenshots/
│
├── .env.example
├── .gitignore
├── README.md
└── ...
```

> Adjust this tree to exactly match the repository. The README should describe the real architecture rather than an idealized one.

---

# 🔮 Future Improvements

Potential future improvements include:

### Marketplace

* Advanced product recommendations
* Saved/favorite listings
* Listing expiration
* Seller ratings
* Product availability status
* Better category discovery

### Communication

* In-app buyer/seller messaging
* Notifications
* Real-time communication

### Security

* Multi-factor authentication
* Login anomaly detection
* Rate limiting
* Security event logging
* Automated dependency auditing
* Automated security testing

### Engineering

* Comprehensive automated test coverage
* CI/CD pipeline
* API documentation
* Performance monitoring
* Application observability
* Database query optimization

### Platform

* Campus-specific verification
* Multiple campus support
* Administrative moderation
* Report/flag system
* Abuse prevention

---

# 📊 Engineering Focus

Campus Cart is more than a UI project.

The project demonstrates experience across the full application lifecycle:

```text
Product Problem
      ↓
System Design
      ↓
Frontend
      ↓
Backend API
      ↓
Database
      ↓
Authentication
      ↓
Authorization
      ↓
Security
      ↓
Testing
      ↓
Deployment
```

The project was built to develop practical experience in designing and shipping real-world software rather than simply demonstrating individual technologies.

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Create a pull request

---

# 📄 License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# 👨‍💻 Author

**Rohith Roblelal**

B.Tech CSE — Cybersecurity
SNM Institute of Management and Technology

Interested in:

* Cybersecurity
* Secure Application Development
* Full-Stack Engineering
* Backend Development
* Security Engineering

GitHub: [@rohith-roblelal](https://github.com/rohith-roblelal)

---

## ⭐ Why Campus Cart?

Campus Cart represents my approach to software development:

> **Build useful products. Understand the systems behind them. Secure what you build.**

The project is continuously improved as I learn more about software engineering, backend architecture, and application security.

---

**Built with curiosity, code, and a security mindset.**
