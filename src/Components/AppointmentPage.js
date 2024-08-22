import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, message, Card } from 'antd';
import { bookAppointment, fetchTimeSlots } from './api';


function AppointmentPage() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
      const fetchTimeSlotsData = async () => {
        const timeSlotsData = await fetchTimeSlots();
        setTimeSlots(timeSlotsData);
      };
  
      fetchTimeSlotsData();
    }, []);

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleSave = async () => {
    try {
      // Perform API call to book the appointment with selectedTimeSlot
      console.log(selectedTimeSlot.id,doctorId);
      const appointment = await bookAppointment(doctorId, selectedTimeSlot.id);
  
      // Show success toast or message
      message.success('Appointment booked successfully');
  
      // Redirect or perform any other necessary actions
      navigate('/');
  
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Failed to book appointment:', error);
      message.error('Failed to book appointment');
    }
  };

  const handleReset = () => {
    setSelectedTimeSlot(null);
  };

  return (
    <div className="container">
      <h1 style={{ justifyContent: "center" }}>Book Appointment</h1>
      <h3>Doctor ID: {doctorId}</h3>
      <h3>Available Time Slots</h3>
      <div className="time-slot-list ">
        {timeSlots.map(timeSlot => (
          <Button
            key={timeSlot.id}
            onClick={() => handleTimeSlotClick(timeSlot)}
            disabled={!timeSlot.available || selectedTimeSlot === timeSlot}
            style={{
              backgroundColor: selectedTimeSlot === timeSlot ? 'green' : 'white',
              marginRight: 8,
              marginBottom: 8,
            }}
          >
            {timeSlot.time}
          </Button>
        ))}
      </div>
      <Button onClick={handleSave} disabled={!selectedTimeSlot} type="primary">
        Save
      </Button>
      {(selectedTimeSlot != undefined && selectedTimeSlot != null) ? <Button onClick={handleReset} style={{ marginLeft: 8 }}>Reset</Button> : null}
    </div>
  );
}

export default AppointmentPage;