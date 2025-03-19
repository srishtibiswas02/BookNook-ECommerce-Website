# Bookstore E-commerce Website

A dynamic E-commerce website for books, novels, and related items built with React, Node.js, and MongoDB.

## Features

- Home page with featured products
- Product category pages (Fiction, Non-Fiction, Children's Books)
- Individual product pages with detailed information
- Shopping cart functionality
- User authentication
- Secure payment integration
- Company information and policies
- Customer service and contact information

## Tech Stack

- Frontend: React.js, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Payment: Stripe

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```
3. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Start the development server:
   ```bash
   npm run dev:full
   ```

## Project Structure

```
bookstore-ecommerce/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       ├── context/      # React context
│       └── utils/        # Utility functions
├── server/                # Node.js backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── middleware/      # Custom middleware
└── package.json
``` 