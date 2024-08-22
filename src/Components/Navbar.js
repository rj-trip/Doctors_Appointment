import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

function Navbar() {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="booked-appointments">
        <Link to="/booked-appointments">Booked Appointments</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
    
  );
}

export default Navbar;
