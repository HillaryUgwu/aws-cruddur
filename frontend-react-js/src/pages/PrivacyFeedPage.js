import './PrivacyFeedPage.css';
import React from "react";

import DesktopNavigation  from 'components/DesktopNavigation';
import DesktopSidebar     from 'components/DesktopSidebar';
import PrivacyFeed from 'components/PrivacyFeed';
import {checkAuth} from 'lib/CheckAuth';

export default function PrivacyFeedPage() {
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
      <DesktopNavigation user={user} active={'more'} setPopped={setPopped} />
      <div className='content'>
        <div className='privacy_feed'>
          <div className='privacy_feed_heading'>
            <div className='title'>Privacy Policy</div>
          </div>
          <PrivacyFeed />
        </div>
      </div>
      <DesktopSidebar user={user} />
    </article>
  );
}