import './DesktopNavigation.css';
import React from 'react';
import {ReactComponent as Logo} from './svg/logo.svg';
import DesktopNavigationLink from '../components/DesktopNavigationLink';
import CrudButton from '../components/CrudButton';
import ProfileInfo from '../components/ProfileInfo';
import ContactSection from '../components/ContactSection'

export default function DesktopNavigation(props) {

  let button;
  let profile;
  let notificationsLink;
  let messagesLink;
  let profileLink;
  let contact;
  if (props.user) {
    button = <CrudButton setPopped={props.setPopped} />;
    profile = <ProfileInfo user={props.user} />;
    // console.log('currently signed in user = ', props.user.handle)
    notificationsLink = <DesktopNavigationLink 
      url="/notifications" 
      name="Notifications" 
      handle="notifications" 
      active={props.active} />;
    messagesLink = <DesktopNavigationLink 
      url="/messages"
      name="Messages"
      handle="messages" 
      active={props.active} />
    profileLink = <DesktopNavigationLink 
      url={`/@${props.user.handle}`}
      name="Profile"
      handle="profile"
      active={props.active} />
  } 
  
  contact = <ContactSection/>


  return (
    <nav>
      <Logo className='logo' />
      <DesktopNavigationLink url="/" 
        name="Home"
        handle="home"
        active={props.active} />
      {/* {homeLink} */}
      {notificationsLink}
      {messagesLink}
      {profileLink}
      {/* {moreLink} */}
      <DesktopNavigationLink url="/" 
        name="More" 
        handle="more"
        active={props.active} />
      {button}
      {profile}
      {contact}
    </nav>
  );
}