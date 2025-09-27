# 🏥 Avenue Hospital – QR Code & USSD Payment System

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Postgres](https://img.shields.io/badge/Database-PostgreSQL-blue)](https://www.postgresql.org/)
[![M-Pesa](https://img.shields.io/badge/Payments-M--Pesa-success)](https://developer.safaricom.co.ke/daraja)

## 📖 Overview
Avenue Hospital requires a **secure, digital payment system** to replace manual cash collection and improve patient checkout.  
This project provides a **QR Code and USSD payment system**, fully integrated with **M-Pesa STK Push**, **Africa’s Talking USSD/SMS**, and an **Admin Dashboard** for finance teams.

---

## 🚀 Features

### ✅ QR Code Payments
- Generates a **unique signed QR code** for each invoice.  
- Payload: `PatientID | Amount | InvoiceID | Note | Paybill`.  
- Patients scan → triggers **M-Pesa STK Push** → automatic reconciliation.  
- QR codes are **HMAC-SHA256 signed** (tamper-proof).  

### ✅ USSD Menu (Africa’s Talking)
- Dial `*123#` to access hospital USSD.  
- Menu Options:  
  1. Pay Bill (STK Push)  
  2. Check Balance  
  3. Last Payment  
  4. Exit  

### ✅ M-Pesa Integration
- Uses **Safaricom Daraja API**.  
- Supports STK Push with Paybill `953244`.  
- Callback URL updates invoice status: `PAID`, `FAILED`, `CANCELLED`.  

### ✅ SMS Notifications
- Branded SMS confirmations after payment:
  ```
  Avenue Healthcare: Payment of KES {amount} received. Ref: {invoiceId}. Thank you.
  ```

### ✅ Admin Dashboard
- Secure login (JWT).  
- Roles: **Admin**, **Cashier**, **Finance**.  
- Dashboard: Total Paid, Outstanding Balances, Recent Transactions.  
- Export:  
  - Excel (.xlsx) with logo watermark.  
  - PDF invoices & reports with faint hospital logo.  

### ✅ Database
- **PostgreSQL (primary)** with **SQLite fallback**.  
- Tables: Users, Invoices, Payments, Logs.  

### ✅ Security
- Signed QR payloads (HMAC-SHA256).  
- JWT authentication.  
- Role-based permissions.  
- HTTPS enforced on deployment.  

---

## 🛠️ Tech Stack
- **Backend:** Node.js (Express.js)  
- **Database:** PostgreSQL / SQLite  
- **Frontend:** HTML/JavaScript (served via Express)  
- **Payments:** Safaricom Daraja (M-Pesa API)  
- **USSD/SMS:** Africa’s Talking API  
- **Exports:** PDFKit + ExcelJS  
- **Hosting:** Render, Railway, Google Cloud Run, or VPS  

---

## ⚙️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/YOURNAME/avenue_hospital_final.git
cd avenue_hospital_final
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Copy `.env.sample` → `.env` and fill in:
```env
HMAC_SECRET=your_secret_key
PAYBILL=953244
BASE_URL=http://localhost:4000

# M-Pesa Daraja
MPESA_ENV=sandbox
MPESA_CONSUMER_KEY=your_key
MPESA_CONSUMER_SECRET=your_secret
MPESA_SHORTCODE=953244
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=http://localhost:4000/mpesa/callback

# Africa’s Talking
AT_USERNAME=your_username
AT_API_KEY=your_api_key
USSD_SHORTCODE=*123#

# Database
PG_CONNECTION=postgres://user:pass@host:5432/dbname

# JWT
JWT_SECRET=your_jwt_secret
```

### 4. Run Locally
```bash
node server_final.js
```
Visit:  
- Dashboard → [http://localhost:4000/admin](http://localhost:4000/admin)  
- QR Generator → [http://localhost:4000/secure_qr_generator.html](http://localhost:4000/secure_qr_generator.html)

---

## 🌍 Deployment
Supports deployment on:  
- **Render.com** (recommended for ease)  
- **Railway.app**  
- **Heroku**  
- **Google Cloud Run**  
- **DigitalOcean VPS**  

On Render:  
- Push repo to GitHub.  
- Create new **Web Service** → select repo.  
- Set build command: `npm install`.  
- Set start command: `npm start`.  
- Add environment variables in dashboard.  
- Get live HTTPS URL (use in M-Pesa/Africa’s Talking portals).  

---

## 📌 Benefits
- Faster patient checkouts.  
- Reduced fraud (tamper-proof signed QR).  
- Automatic reconciliation with M-Pesa.  
- Branded SMS confirmations.  
- Real-time dashboard with exportable reports.  

---

## 👨‍💻 Authors
Developed by **Mike Hillary Owaga** and contributors.  
