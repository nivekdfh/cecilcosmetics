import React, { useState, useEffect } from 'react';
import ServiceList from '../components/ServiceList';
import DateSelector from '../components/DateSelector';
import TimeSlotSelector from '../components/TimeSlotSelector';
import EmployeeSelector from '../components/EmployeeSelector';
import ConfirmationButton from '../components/ConfirmationButton';
import './gridbooknow.css';

function Booking() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null); // Track selected sub-service
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  // New fields for user information
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Fetch available time slots when the date or service changes
  useEffect(() => {
    if (selectedDate && selectedService) {
      fetchAvailableSlots(selectedDate, selectedService);
    }
  }, [selectedDate, selectedService]);

  const fetchAvailableSlots = async (date, service) => {
    // Mock API response (replace this with your actual API call)
    const mockApiResponse = {
      availableSlots: ['09:30', '10:30', '12:00', '15:30', '17:00']
    };
    setAvailableSlots(mockApiResponse.availableSlots);
  };

  const handleConfirm = async () => {
    if (!name || !phone || !email || !selectedService || !selectedTime) {
      alert('Please fill in all required fields.');
      return;
    }

    const bookingDetails = {
      name,
      email,
      phone,
      service: selectedService,
      subService: selectedSubService, // Add selected sub-service
      date: selectedDate,
      time: selectedTime,
      employee: selectedEmployee
    };

    try {
      const response = await fetch('http://localhost:5000/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        alert('Booking confirmed and confirmation email sent!');
      } else {
        alert('Booking confirmed, but there was an error sending the email.');
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Error confirming booking. Please try again.');
    }
  };

  return (
    <main className="grid-item main">
      <img className="grid-item slider" src="images/zink-slider-1.jpg" alt="Slider" />
      <img className="grid-item slider-mobile" src="images/zink-slider-1-mobile.jpg" alt="Slider Mobile" />

      <div className="grid-item reclame1">
        <img className="grid-item reclame1" src="images/zink-slider-2.jpg" alt="Ad" />
      </div>

      <div className="grid-item booking-container">
        <ServiceList
          onSelectService={(service, subService) => {
            setSelectedService(service);
            setSelectedSubService(subService); // Update selected sub-service
          }}
        />
        <EmployeeSelector onSelectEmployee={setSelectedEmployee} />
        <DateSelector onDateChange={setSelectedDate} />
        <TimeSlotSelector onSelectTime={setSelectedTime} availableSlots={availableSlots} />
       
        <div className="user-info">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <ConfirmationButton
          onConfirm={handleConfirm}
          disabled={
            !selectedTime ||
            !selectedEmployee ||
            !selectedService ||
            !name ||
            !phone ||
            !email
          }
        />
      </div>
    </main>
  );
}

export default Booking;
