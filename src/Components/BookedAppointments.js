import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import BookedAppointmentCard from './BookedAppointmentCard';
import { fetchBookedAppointments, cancelAppointment } from './api';

function BookedAppointments() {
  const [bookedAppointments, setBookedAppointments] = useState([]);

  useEffect(() => {
    const fetchBookedAppointmentsData = async () => {
      const appointments = await fetchBookedAppointments();
      setBookedAppointments(appointments);
    };

    fetchBookedAppointmentsData();
  }, []);

  const handleCancelAppointment = async (appointment) => {
    try {
      await cancelAppointment(appointment.id);
      // Show success toast or message
      message.success('Appointment canceled successfully');
      // Update the booked appointments list
      setBookedAppointments((prevAppointments) =>
        prevAppointments.filter((prevAppointment) => prevAppointment.id !== appointment.id)
      );
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Failed to cancel appointment:', error);
      message.error('Failed to cancel appointment');
    }
  };

  return (
    <div className='container'>
      <h1>Booked Appointments</h1>
      <div className="card-list">
        {bookedAppointments.map((appointment) => (
          <BookedAppointmentCard
            key={appointment.id}
            appointment={appointment}
            handleCancelAppointment={handleCancelAppointment}
          />
        ))}
      </div>
    </div>
  );
}

export default BookedAppointments;
