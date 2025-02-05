🎟️ Event Management & Ticketing System
📌 Overview
The Event Management & Ticketing System is a MERN stack application that allows event organizers to create, manage, and sell tickets for events.
Users can browse events, purchase tickets, and check in using QR codes.

🚀 Features
✅ User & Organizer Authentication (JWT, Google OAuth)
✅ Event Creation & Management (Title, Date, Venue, Pricing, etc.)
✅ Ticket Booking & Payments (Stripe/Razorpay integration)
✅ QR Code-Based Check-In for event access
✅ Real-time Seat Selection (WebSockets)
✅ Admin Dashboard for event analytics

🛠️ Tech Stack
Frontend: React.js, Redux Toolkit, Material UI
Backend: Node.js, Express.js, MongoDB, Mongoose
Others: JWT, Stripe/Razorpay, WebSockets, Cloudinary
🎯 Installation
Clone the repo:

git clone https://github.com/Bidhu1024/Tickets.git
cd event-ticketing-system
Install dependencies:
cd client  # For frontend
npm install
cd ../server  # For backend
npm install
Set up environment variables (.env file).
Start the project:
# Run backend
cd server
npm start

# Run frontend
📌 Future Enhancements (to be added)
Email & SMS notifications for ticket confirmation
AI-based event recommendations
Social media sharing for events
