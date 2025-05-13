# 💳 BillEase - Bill Management Web Application

**Live Site:** [https://bill-ease-moumita.netlify.app/](https://bill-ease-moumita.netlify.app/)

BillEase is a modern and intuitive Single Page Application (SPA) built to simplify your utility bill payments. It allows users to securely manage and pay bills like electricity, gas, water, tuition, and more — all from one place.

---

## 📌 Project Purpose

BillEase aims to bring all your bills under one dashboard, where you can pay them seamlessly, track due dates, and manage your account easily. Designed for users in Bangladesh with support for major utility providers, the app promotes local service integration and hassle-free experience.

---

## 🌟 Key Features

- 🔐 **Authentication with Firebase**
  - Email & Password login/register
  - Google OAuth Login
  - Protected routes (Bills, Profile, etc.)
  - Firebase environment variables secured via `.env`

- 🧾 **Bill Management**
  - View all available utility bills (Electricity, Gas, Water, Internet, Credit Card, Tuition)
  - Filter by bill type
  - View detailed bill info
  - Pay using balance (default 10,000 BDT)

- ✅ **Payment Logic**
  - Prevent duplicate payments
  - Payment reduces balance
  - Green checkmark on paid bills
  - Redirects after payment

- 👤 **My Profile**
  - View user info (photo, name, email)
  - Update name and profile picture

- 📱 **Responsive Design**
  - Fully mobile-friendly, tablet-ready and desktop optimized

- 💬 **User Feedback**
  - Toast notifications for errors and success
  - Error boundaries and custom 404 page

- 🔁 **Routing**
  - React Router v6 with lazy loading and protected routes
  - Redirect unauthenticated users to login and back to their intended page after login

---

## 🧪 Technologies Used

- React.js
- React Router DOM
- Firebase (Authentication, Hosting)
- Tailwind CSS
- Swiper.js (for carousel)
- React Icons
- React Toastify

---

## 📁 Folder Structure

