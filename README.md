##Ace-Tickets 🎟️
Ace-Tickets is a full-stack web application designed to facilitate ticket booking for football matches, movies, and events. The app uses React.js for the frontend and Express.js with Python for the backend, incorporating JWT-based authentication and Paystack payment integration.

--Table of Contents
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
## Tech Stack
-- Frontend:
React.js (with React Router)
Bootstrap for styling
React-QR-Code for QR generation
Axios for HTTP requests
-- Backend:
Express.js for API and routing
Passport.js for JWT authentication
MongoDB for data persistence
Paystack API for payment integration
Development Tools:
ESLint for code linting
Vercel for frontend deployment
Node.js for backend runtime
## Project Structure
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

##Installation
Prerequisites:
Node.js installed locally
MongoDB setup for database
Paystack account for payment gateway

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
--+ Frontend
Main Components:
NavBar: Navigation bar with links to different sections (movies, events, football).
Welcome: Animated welcome section with an event calendar.
TicketModal: Modal showing ticket QR code after successful payment.
PaystackPayment: Paystack integration for handling payments.
Login & Signup: Authentication forms with validation and error handling.
--+ Backend
Authentication:
JWT Authentication: Passport.js is used for securing routes with JWT tokens.
bcrypt.js: Passwords are hashed for security.
--Database:
MongoDB: Used to store user information (register/login).
--Middleware:
auth.js: Handles JWT strategy with Passport.js for protecting API routes.
--Security
JWT-based Authentication: Ensures secure access to protected routes.
Environment Variables: Sensitive information (e.g., JWT secret, Paystack keys) is stored in .env files.
Password Hashing: User passwords are hashed using bcrypt.
--Future Enhancements
Add a search functionality for movies and events.
Implement user profile pages to view and manage bookings.
Add filters for different genres and categories in the movie and event selection pages.
Integrate social login (e.g., Google, Facebook).
Provide email notifications for upcoming events.


--Project by: Sean Samuel
--X.com/xinbadt

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
