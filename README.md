# Ace-Tickets 🎟️

Ace-Tickets is a full-stack web application designed to facilitate ticket booking for football matches, movies, and events. The app uses React.js for the frontend and Express.js with Python for the backend, incorporating JWT-based authentication and Paystack payment integration
# --Table of Contents
+- Features
+- Tech Stack
+- Project Structure
+- Installation
+- Environment Variables
+- Usage
+- Routes
+- Frontend
+- Backend
+- Security
+- Future Enhancements
--Features
Ticket Booking: Purchase tickets for football games, movies (action, thriller, comedy, etc.), and events.
QR Code: Generates a QR code for the purchased tickets.
Responsive Design: The app is fully responsive for different devices.
Payment Integration: Users can pay for tickets via Paystack.
User Authentication: Secure user registration and login with JWT.
Form Validation: User-friendly form validation and error handling.
Event Calendar: A calendar component to track upcoming events and movies.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Routes](#routes)
- [Frontend](#frontend)
- [Backend](#backend)
- [Security](#security)
- [Future Enhancements](#future-enhancements)

## Features
- **Ticket Booking**: Purchase tickets for football games, movies (action, thriller, comedy, etc.), and events
- **QR Code**: Generates a QR code for the purchased tickets
- **Responsive Design**: The app is fully responsive for different devices
- **Payment Integration**: Users can pay for tickets via Paystack
- **User Authentication**: Secure user registration and login with JWT
- **Form Validation**: User-friendly form validation and error handling
- **Event Calendar**: A calendar component to track upcoming events and movies


## Tech Stack

### Frontend
- React.js (with React Router)
- Bootstrap for styling
- React-QR-Code for QR generation
- Axios for HTTP requests

### Backend
- Express.js for API and routing
- Passport.js for JWT authentication
- MongoDB for data persistence
- Paystack API for payment integration

### Development Tools
- ESLint for code linting
- Vercel for frontend deployment
- Node.js for backend runtime

## Project Structure
```
ace-tickets/
│
├── ace-tickets-backend/          # Backend (Express.js)
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── middleware/
│   │   └── auth.js               # JWT Authentication logic
│   ├── models/
│   │   └── User.js               # User model (MongoDB schema)
│   ├── routes/
│   │   └── auth.js               # Authentication routes (register/login)
│   ├── index.js                  # Express.js entry point
│   └── .env                      # Environment variables (e.g. JWT_SECRET)
│
├── ace-tickets-frontend/         # Frontend (React.js)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar.js         # Navigation Bar
│   │   │   ├── Welcome.js        # Welcome page with animations
│   │   │   ├── TicketModal.js    # Modal for QR code after payment
│   │   │   ├── PaystackPayment.js# Paystack integration
│   │   ├── App.js                # Main app component with routes
│   │   ├── index.js              # React entry point
│   └── .env                      # Paystack public key
│
├── README.md                     # Documentation
└── package.json                  # Project dependencies
```

## Installation


Usage
Register and Login: Users can register and login to purchase tickets.
Browse Events and Movies: Users can browse football games, movies, and events from different categories.
Payment Integration: Select the event or movie, and proceed to payment using Paystack.
Ticket Confirmation: After payment, the QR code for the ticket is displayed in a modal, confirming the purchase.
Routes
Backend Routes:
POST /api/auth/register: Register a new user
POST /api/auth/login: Login user and receive JWT
GET /api/protected: A sample protected route (requires JWT)
Frontend:
/: Home page with welcome section and event calendar
/movies: Select and book movie tickets
/football: Select and book football game tickets
/events: Select and book event tickets
/login: Login page
/signup: Signup page
# --+ Frontend
Main Components:
NavBar: Navigation bar with links to different sections (movies, events, football).
Welcome: Animated welcome section with an event calendar.
TicketModal: Modal showing ticket QR code after successful payment.
PaystackPayment: Paystack integration for handling payments.
Login & Signup: Authentication forms with validation and error handling.
# --+ Backend
Authentication:
JWT Authentication: Passport.js is used for securing routes with JWT tokens.
bcrypt.js: Passwords are hashed for security.
# --Database:
MongoDB: Used to store user information (register/login).
# --Middleware:
auth.js: Handles JWT strategy with Passport.js for protecting API routes.
# --Security
JWT-based Authentication: Ensures secure access to protected routes.
Environment Variables: Sensitive information (e.g., JWT secret, Paystack keys) is stored in .env files.
Password Hashing: User passwords are hashed using bcrypt.
# --Future Enhancements
Add a search functionality for movies and events.
Implement user profile pages to view and manage bookings.
Add filters for different genres and categories in the movie and event selection pages.
Integrate social login (e.g., Google, Facebook).
Provide email notifications for upcoming events.
=======
### Prerequisites
- Node.js installed locally
- MongoDB setup for database
- Paystack account for payment gateway


## Usage
1. **Register and Login**: Users can register and login to purchase tickets
2. **Browse Events and Movies**: Users can browse football games, movies, and events from different categories
3. **Payment Integration**: Select the event or movie, and proceed to payment using Paystack
4. **Ticket Confirmation**: After payment, the QR code for the ticket is displayed in a modal, confirming the purchase

<<<<<<< HEAD
# Project by: ##Sean Samuel
# X.com/xinbadt

## Routes


### Backend Routes
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login user and receive JWT
- `POST /api/protected/tickets`: Create ticket for user (requires JWT)
- `GET /api/protected/tickets`: Respond with user's tickets (requires JWT)
- `GET /api/events`: Fetch all events (can be filtered by category e.g., movies, football)

### Frontend Routes
- `/`: Home page with welcome section and event calendar
- `/movies`: Select and book movie tickets
- `/football`: Select and book football game tickets
- `/events`: Select and book event tickets
- `/login`: Login page
- `/signup`: Signup page

## Frontend

### Main Components
- **NavBar**: Navigation bar with links to different sections (movies, events, football)
- **Welcome**: Animated welcome section with an event calendar
- **TicketModal**: Modal showing ticket QR code after successful payment
- **PaystackPayment**: Paystack integration for handling payments
- **Login & Signup**: Authentication forms with validation and error handling

## Backend

### Authentication
- **JWT Authentication**: Passport.js is used for securing routes with JWT tokens
- **bcrypt.js**: Passwords are hashed for security

### Database
- **MongoDB**: Used to store user information (register/login)

### Middleware
- **auth.js**: Handles JWT strategy with Passport.js for protecting API routes

## Security
- **JWT-based Authentication**: Ensures secure access to protected routes
- **Environment Variables**: Sensitive information (e.g., JWT secret, Paystack keys) is stored in .env files
- **Password Hashing**: User passwords are hashed using bcrypt

## Possible Future Enhancements
- Add a search functionality for movies and events
- Implement user profile pages to view and manage bookings
- Integrate social login (e.g., Google, Facebook)
- Provide email notifications for upcoming events

---

## Contributors
- [Sean Samuel](github.com/unseanted)
- [Kimah Pam](github.com/Kimah20X)
- [Perez-salem Tuwan](github.com/perez-21)

Project by: Sean Samuel  
[X.com/xinbadt](https://x.com/xinbadt)

