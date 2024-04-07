import './AboutFeedPage.css';
import React from "react";

import DesktopNavigation  from 'components/DesktopNavigation';
import DesktopSidebar     from 'components/DesktopSidebar';
import AboutFeed from 'components/AboutFeed';
import {checkAuth} from 'lib/CheckAuth';

export default function AboutFeedPage() {
  const [about, setAbout] = React.useState([]);
  const [popped, setPopped] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const dataFetchedRef = React.useRef(false);

  React.useEffect(()=>{
    //prevents double call
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    checkAuth(setUser);
  }, [])

  return (
    <article>
      <DesktopNavigation user={user} active={'home'} setPopped={setPopped} />
      <div className='content'>
        <div className='about_feed'>
          <div className='about_feed_heading'>
            <div className='title'>About CRUDDUR</div>
          </div>
          <AboutFeed />
        </div>
      </div>
      <DesktopSidebar user={user} />
    </article>
  );
}