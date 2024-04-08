import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Dropdown = ({ submenus }) => {
 return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
 );
};

export default Dropdown;