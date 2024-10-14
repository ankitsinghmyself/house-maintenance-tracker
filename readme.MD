# House Maintenance Tracker

## Description

The House Maintenance Tracker is a web application that helps house owners manage their maintenance payments and track expenditures made by the society association. The application allows users to register, log in, make payments, and track expenditures in an organized manner.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS(Upcoming)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Features

- User Registration and Login
- Create and view maintenance payments
- Create and view expenditures
- JWT authentication for secure access

## API Endpoints

### Authentication

- **POST** `http://localhost:5000/api/auth/register`: Register a new user
- **POST** `http://localhost:5000/api/auth/login`: Log in and receive a JWT

### Payments

- **POST** `http://localhost:5000/api/payments`: Create a new payment
- **GET** `http://localhost:5000/api/payments`: Retrieve all payments

### Expenditures

- **POST** `http://localhost:5000/api/expenditures`: Create a new expenditure
- **GET** `http://localhost:5000/api/expenditures`: Retrieve all expenditures

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitsinghmyself/house-maintenance-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd house-maintenance-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the server:
   ```bash
   npx nodemon
   ```

2. Open Postman to test the APIs using the endpoints mentioned above.


## Author

Ankit Singh