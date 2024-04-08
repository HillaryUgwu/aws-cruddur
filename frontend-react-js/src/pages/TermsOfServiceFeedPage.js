import './TermsOfServiceFeedPage.css';
import React from "react";

import DesktopNavigation  from 'components/DesktopNavigation';
import DesktopSidebar     from 'components/DesktopSidebar';
import TermsOfServiceFeed from 'components/TermsOfServiceFeed';
import {checkAuth} from 'lib/CheckAuth';

export default function TermsOfServiceFeedPage() {
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
        <div className='terms_feed'>
          <div className='terms_feed_heading'>
            <div className='title'>Terms of Service</div>
          </div>
          <TermsOfServiceFeed />
        </div>
      </div>
      <DesktopSidebar user={user} />
    </article>
  );
}