import './DesktopSidebar.css';
import Search from '../components/Search';
import TrendingSection from '../components/TrendingsSection'
import SuggestedUsersSection from '../components/SuggestedUsersSection'
import JoinSection from '../components/JoinSection'
import ProfileAvatar from 'components/ProfileAvatar'

export default function DesktopSidebar(props) {
  const trendings = [
    { "hashtag": "100DaysOfCloud", "count": 2053 },
    { "hashtag": "CloudProject", "count": 8253 },
    { "hashtag": "AWS", "count": 9053 },
    { "hashtag": "FreeWillyReboot", "count": 7753 }
  ]

  let trending;
  if (props.user) {
    trending = <TrendingSection trendings={trendings} />
  }

  let suggested;
  if (props.user) {
    const users = [
      {
        "display_name": props.user.display_name,
        "handle": props.user.handle
      }
    ]
    console.log('suggested user props',props,users)
    suggested = <SuggestedUsersSection users={users} />
    // <ProfileAvatar id={props.user.handle} />
  }
  let join;
  if (props.user) {
  } else {
    join = <JoinSection />
  }

  return (
    <section>
      <Search />
      {trending}
      {suggested}
      {join}
      <footer>
        <a href="/about">About</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </footer>
    </section>
  );
}