import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, message } from "antd";
import {
  fetchDoctors,
  fetchBookedAppointments,
  cancelAppointment,
} from "./api";
import "./index.css";

const { Meta } = Card;

function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      const doctorsData = await fetchDoctors();
      setDoctors(doctorsData);
    };

    fetchDoctorsData();
  }, []);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointments = await fetchBookedAppointments();
        setBookedAppointments(appointments);
      } catch (error) {
        console.error("Failed to fetch booked appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId);
      message.success("Appointment canceled successfully");
      const updatedAppointments = bookedAppointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
      setBookedAppointments(updatedAppointments);
    } catch (error) {
      console.error("Failed to cancel appointment:", error);
      message.error("Failed to cancel appointment");
    }
  };

  return (
    <div className="container">
      <h1>Doctors</h1>
      <div className="card-list">
        {doctors.map((doctor) => {
          const isAlreadyBooked = bookedAppointments.some(
            (appointment) => appointment.doctorName === doctor.name
          );
          const appointmentId = bookedAppointments.find(
            (appointment) => appointment.doctorName === doctor.name
          )?.id;
          return (
            <Card key={doctor.id} hoverable className="doctor-card">
              <img src={doctor.avatar} alt="Doctor" className="doctor-image" />
              <Meta
                title={doctor.name}
                description={`Specialty: ${doctor.specialty}`}
              />
              <p>Charges: ₹{doctor.charges}</p>
              {isAlreadyBooked ? (
                <>
                  <p className="already-booked-text">Already booked</p>
                  <Button
                    danger
                    onClick={() => handleCancelAppointment(appointmentId)}
                  >
                    Cancel Appointment
                  </Button>
                </>
              ) : (
                <Link to={`/appointment/${doctor.id}`}>
                  <Button type="primary">Book Appointment</Button>
                </Link>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
