import React from 'react';
import { Card, Button, Badge } from 'antd';


function BookedAppointmentCard({ appointment, handleCancelAppointment }) {
    console.log(appointment);
  const { id, doctorName,avatar, specialty, charges, time } = appointment;

  return (
    <Card key={id} hoverable style={{ width: 300, marginBottom: 16 }}>
      <img src={avatar} alt="Doctor" className="doctor-image" />
      <Card.Meta title={doctorName} description={`Specialty: ${specialty}`} />
      <p>Charges: {charges}</p>
      <p>
        Time Slot:{' '}
        <Badge color={'green' } text={time} />
      </p>
      <Button danger type="dashed" onClick={() => handleCancelAppointment(appointment)}>
        Cancel Appointment
      </Button>
    </Card>
  );
}

export default BookedAppointmentCard;
