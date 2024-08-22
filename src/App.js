import React from 'react';
import { BrowserRouter as Router,Routes ,Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import AppointmentPage from './Components/AppointmentPage';
import BookedAppointments from './Components/BookedAppointments';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/appointment/:doctorId" element={<AppointmentPage/>} />
          <Route path="/booked-appointments/" element={<BookedAppointments/>} />
          <Route path='/contact/' element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;