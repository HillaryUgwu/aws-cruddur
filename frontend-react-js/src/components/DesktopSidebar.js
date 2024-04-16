import './DesktopSidebar.css';
import Search from '../components/Search';
import TrendingSection from '../components/TrendingsSection'
import SuggestedUsersSection from '../components/SuggestedUsersSection'
import ContactSection from '../components/ContactSection'
import JoinSection from '../components/JoinSection'

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

  const handle = props.user ? props.user.handle : 'undefined';
  const displayName = props.user ? props.user.display_name : 'undefined';

  let suggested;
  let contact;
  const users = [
    {
      "display_name": handle === "undefined" ? "Emeka" : displayName,
      "handle":  handle === "undefined" ?  "altlary" : handle
   },
    {
      "display_name": handle === "ohahuru" ? "Emeka" : "Hillary",
      "handle":  handle === "ohahuru" ?  "altlary" : "ohahuru"
   }
   ];

  suggested = <SuggestedUsersSection users={users} />

  contact = <ContactSection users={users} />

  let join;
  if (props.user) {
  } else {
    join = <JoinSection />
  }

  return (
    <section>
      <Search />
      {/* {contact} */}
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