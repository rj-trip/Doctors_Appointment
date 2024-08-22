// Simulate a delay to mimic API latency
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Dummy data
const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiology',
    charges: 1000,
    avatar:"https://images.unsplash.com/photo-1584467735815-f778f274e296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatology',
    charges: 1500,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 3,
    name: 'Dr. Robert Johnson',
    specialty: 'Orthopedics',
    charges: 1200,
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    id: 4,
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrics',
    charges: 1900,
    avatar:"https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80"
  },
  {
    id: 5,
    name: 'Dr.  Surbhi Anand ',
    specialty: 'Gynecologist',
    charges: 16500,
    avatar: "https://media.istockphoto.com/id/1302677023/photo/mid-adult-female-doctor-talking-on-phone-at-clinic-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=5GbSGZB0LVGkxsYs5krfDyVy1w6xEqIbSLzEb7UsCnw="
  },
  {
    id: 6,
    name: 'Dr. Naresh Trehan',
    specialty: 'Psychiatrists',
    charges: 1700,
    avatar: "https://media.istockphoto.com/id/1124684854/photo/portrait-of-indian-doctor.jpg?s=612x612&w=0&k=20&c=z07-F84erAbm8Z_sVJhLXdaJBfMFSiJjf_uaHg7Z3sY="
  },
  {
    id: 7,
    name: 'Dr. Sudhansu Bhattacharyya ',
    specialty: 'Neurologist',
    charges: 12000,
    avatar: "https://media.istockphoto.com/id/1614148369/photo/portrait-of-young-smiling-indian-male-doctor-wearing-stethoscope-standing-cross-arms-he-is.webp?b=1&s=612x612&w=0&k=20&c=QDx_F40OVWBLUre0_oy-c8WtyFR9YcBIDicCNGxCUh0="
  },
  {
    id: 8,
    name: 'Dr. Siddhartha Mukherjee',
    specialty: ' Dentist',
    charges: 1900,
    avatar: "https://media.istockphoto.com/id/524539495/photo/indian-doctor.webp?b=1&s=612x612&w=0&k=20&c=BfqoqkeAOxOq7sP6CTOOecKoh8i-U1da5G7xjLlG03w="
  },
];

const timeSlots = [
  { id: 1, time: '10:00 AM', available: true },
  { id: 2, time: '11:00 AM', available: false },
  { id: 3, time: '12:00 PM', available: true },
  { id: 4, time: '1:00 PM', available: true },
  { id: 5, time: '3:00 PM', available: false },
  { id: 6, time: '4:00 PM', available: false },
  { id: 7, time: '5:00 PM', available: true },
];

let bookedAppointments = [];

// Fetch doctors
export const fetchDoctors = async () => {
  await delay(500); // Simulate API delay
  return doctors;
};

// Fetch time slots for a doctor
export const fetchTimeSlots = async doctorId => {
  await delay(500); // Simulate API delay
  return timeSlots;
};

// Book an appointment
export const bookAppointment = async (doctorId, timeSlotId) => {
  await delay(500); // Simulate API delay
  const selectedDoctor = doctors.find(doctor => doctor.id == doctorId);
  const selectedTimeSlot = timeSlots.find(timeSlot => timeSlot.id == timeSlotId);
  console.log(doctorId);
  const appointment = {
    id: Date.now(), // Generate a unique ID (can be replaced with an actual ID from the server)
    doctorName: selectedDoctor.name,
    time: selectedTimeSlot.time,
    charges: selectedDoctor.charges,
    avatar: selectedDoctor.avatar
  };
  bookedAppointments.push(appointment);
  return appointment;
};

// Fetch booked appointments
export const fetchBookedAppointments = async () => {
  await delay(500); // Simulate API delay
  return bookedAppointments;
};

// Cancel an appointment
export const cancelAppointment = async appointmentId => {
  await delay(500); // Simulate API delay
  bookedAppointments = bookedAppointments.filter(appointment => appointment.id !== appointmentId);
};