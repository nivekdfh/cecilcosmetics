require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

console.log("Mongo URI:", process.env.MONGO_URI);

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define the Booking Schema and Model
const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  subService: String,
  date: String,
  time: String,
});

const Booking = mongoose.model('Booking', BookingSchema);

// POST endpoint to create a new booking
app.post('/api/book-appointment', async (req, res) => {
  console.log('Received request at /api/book-appointment');
  const { name, email, phone, service, subService, date, time } = req.body;

  try {
    // Save the new booking to the database
    const newBooking = new Booking({ name, email, phone, service, subService, date, time });
    await newBooking.save();

    // Send confirmation email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Securely access email user
        pass: process.env.EMAIL_PASS, // Securely access email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      text: `Your appointment for ${service} (${subService}) on ${date} at ${time} is confirmed.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).send({ message: 'Booking confirmed and email sent' });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Error creating booking' });
  }
});

// GET endpoint to fetch available slots
app.get('/api/available-slots', (req, res) => {
  // For demonstration, returning a mock response. Replace this with real slot availability logic.
  const availableSlots = ["09:30", "10:30", "12:00", "15:30", "17:00"];
  res.status(200).json({ availableSlots });
});

// Serve static files from the React app's dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


