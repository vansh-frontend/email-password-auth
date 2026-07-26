# React Authentication Demo with localStorage

A simple React project that demonstrates basic authentication using **localStorage**. This project is built for beginners to understand how client-side authentication works without using a backend.

## Features

- User Signup
- User Login
- Logout
- Change/Reset Password
- Store user data using localStorage

## Tech Stack

- React
- React Router DOM
- JavaScript
- localStorage

## Project Structure

```
src/
├── components/
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Reset.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-auth-localstorage.git
```

### 2. Navigate to the project

```bash
cd react-auth-localstorage
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

## How It Works

1. Create a new account using **Signup**.
2. User information is stored in **localStorage**.
3. Login using the registered email and password.
4. After successful login, the user is redirected to the Home page.
5. Users can update their password from the Reset Password page.
6. Logout removes the current user session from localStorage.

## Note

This project is for **learning purposes only**.

It uses **localStorage** to store user data, which is **not secure** for production applications. In real-world projects, authentication should be handled using a backend server, database, password hashing, and secure authentication methods such as JWT or sessions.

