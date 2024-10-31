import React from 'react';

function ConfirmBooking({ onConfirm, disabled }) {
    return (
      <button onClick={onConfirm} className="confirm-button" disabled={disabled}>
        Bevestig afspraak
      </button>
    );
  }
  
export default ConfirmBooking;
