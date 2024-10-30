import React from 'react';

function DateSelector({ onDateChange }) {
    const handleDateChange = (event) => {
        onDateChange(event.target.value);
    };

    return (
        <div className="date-selector">
            <input type="date" onChange={handleDateChange} />
        </div>
    );
}

export default DateSelector;
