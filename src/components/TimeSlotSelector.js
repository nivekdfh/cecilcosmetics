import React, { useState } from 'react';

function TimeSlotSelector({ availableSlots, onSelectTime }) {
    const [selectedTime, setSelectedTime] = useState(null);

    const timeSlots = [
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
        "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
        "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
    ];

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        onSelectTime(time);
    };

    return (
        <div className="time-slot-selector">
            {timeSlots.map((time, index) => (
              <button
  key={index}
  onClick={() => handleTimeSelect(time)}
  disabled={!availableSlots.includes(time)}
  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
  role="button"
  tabIndex={availableSlots.includes(time) ? "0" : "-1"}
  aria-label={`Time slot at ${time} ${selectedTime === time ? "selected" : ""}`}
>
  {time}
</button>
            ))}
        </div>
    );
}

export default TimeSlotSelector;
