import './DropdownMenu.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function DropdownMenu () {
  const submenus=[
    {title: 'About', url: '/about' }, 
    { title: 'Terms', url: '/terms-of-service' }, 
    { title: 'Privacy', url: '/privacy-policy' }
  ];

 return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link to={submenu.url} className="dropdown-link">{submenu.title}</Link>
        </li>
      ))}
    </ul>
 );
};

// export default DropdownMenu;