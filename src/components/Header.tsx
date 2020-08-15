import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar fixed="top" bg="primary">
      <Navbar.Brand> FlashCard </Navbar.Brand>
    </Navbar>
  );
}
