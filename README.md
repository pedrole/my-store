# 🛒 MyStore - Angular E-commerce App

This is **MyStore**, a responsive e-commerce web application built using Angular and Bootstrap. The application is part of the Udacity Full Stack JavaScript Developer Nanodegree and is designed to provide a full shopping experience, from browsing products to completing orders securely.

![Shopping Flow](src/assets/screenshots/my-store.gif)

---

## 🌟 Key Features

- ✅ Browse a product catalog
- 🛒 Add and remove products from a shopping cart
- 📋 Fill in a checkout form with personal and payment details
- ✅ Submit orders securely with backend integration
- 🔐 **Email-based authentication** with JWT tokens
- 📄 Order confirmation screen with summary and success message

## 🔐 Demo Credentials

For quick testing and demonstration purposes, use these pre-seeded accounts:

### Demo User
- **Email**: `demo@example.com`
- **Password**: `demo123`

### Additional Test Users
- **Email**: `jane.smith@example.com` | **Password**: `password123`
- **Email**: `admin@example.com` | **Password**: `admin123`

## 📸 Screenshots

### Product Listing

![Product List](src/assets/screenshots/product-list.png)

### Cart + Checkout

![Cart and Checkout](src/assets/screenshots/cart-checkout.png)

### Order Confirmation

![Order Confirmation](src/assets/screenshots/order-confirmation.png)

---

## ⚙️ Backend Integration

This project uses the custom REST API available at:

🔗 [storefront-backend GitHub Repository](https://github.com/pedrole/storefront-backend)

The backend provides:

- JWT authentication
- Endpoints to manage users, products, and orders
- Secure order completion with ownership verification

See:
- [API Requirements](https://github.com/pedrole/storefront-backend/blob/master/REQUIREMENTS.md)
- [API README](https://github.com/pedrole/storefront-backend/blob/master/README.md)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)
- PostgreSQL (for backend)
- Backend running from [storefront-backend](https://github.com/pedrole/storefront-backend)

---

### 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/pedrole/my-store.git
cd my-store
```

2. **Install depenmdencies**
```bash
npm install
```

3. **Serve the app**
```bash
ng serve
```

Navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

### 🖥️ Backend Setup
Clone and follow instructions here:
👉 https://github.com/pedrole/storefront-backend

Make sure the backend is running at http://localhost:3000.

### 🔐 Authentication Flow

1. **Login**: Use email + password (industry standard)
2. **Registration**: Create new accounts with firstname, lastname, email, password
3. **Demo Access**: One-click demo credentials for testing
4. **JWT Tokens**: Secure authentication with automatic token management
5. **Route Protection**: Cart and checkout require authentication

### 🛒 Shopping Flow

1. Browse products (no login required)
2. Login or register to add items to cart
3. View and modify cart contents
4. Complete checkout form
5. Receive order confirmation


### Scripts

```bash
ng serve         # Dev server at localhost:4200
ng build         # Build production version
ng test          # Run unit tests
```

## 📡 API Integration

Connects to custom backend API with:
- Email-based user authentication
- JWT token management
- Product catalog endpoints
- Shopping cart and order management

## 🎨 UI/UX Features

- **Bootstrap 5** styling with responsive design
- **Bootstrap Icons** for consistent iconography
- **Form validation** with helpful error messages
- **Demo credentials** prominently displayed for testing
- **Login/Register toggle** for seamless user experience
