import './DesktopNavigationLink.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as HomeIcon} from './svg/home.svg';
import {ReactComponent as NotificationsIcon} from './svg/notifications.svg';
import {ReactComponent as ProfileIcon} from './svg/profile.svg';
import {ReactComponent as MoreIcon} from './svg/more.svg';
import {ReactComponent as MessagesIcon} from './svg/messages.svg';
import DropdownMenu from '../components/DropdownMenu';

export default function DesktopNavigationLink(props) {
  const [showDropdown, setShowDropdown] = useState(false);
 
  const classes = () => {
     const classes = ['primary'];
     if (props.handle === props.active) {
       classes.push('active');
     }
     return classes.join(' ');
  };
 
  const icon = () => {
     switch (props.handle) {
       case 'home':
         return <HomeIcon className='icon' />;
       case 'notifications':
         return <NotificationsIcon className='icon' />;
       case 'profile':
         return <ProfileIcon className='icon' />;
       case 'more':
         return <MoreIcon className='icon' />;
       case 'messages':
         return <MessagesIcon className='icon' />;
       default:
         break;
     }
  };
 
  const toggleDropdown = () => {
     setShowDropdown(!showDropdown);
  };
 
  return (
    <ul className={classes()}>
      <Link to={props.url} onClick={props.handle === 'more' ? toggleDropdown : null} className={classes()} href="#">
        {icon()}
        <span>{props.name}</span>
      </Link>
      <li className="dropdown no-bullets">
       {props.handle === 'more' && showDropdown && (
         <DropdownMenu submenus={[{ title: 'About', url: '/about' }, { title: 'Terms', url: '/terms-of-service' }, { title: 'Privacy', url: '/privacy-policy' }]} />
       )}
      </li>
    </ul>
  );
 }