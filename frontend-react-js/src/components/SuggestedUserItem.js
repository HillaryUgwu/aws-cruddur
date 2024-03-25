import './SuggestedUserItem.css';
import ProfileAvatar from 'components/ProfileAvatar'

export default function SugestedUserItem(props) {
  return (
    <div className="user">
      <ProfileAvatar id={props.handle} />
      <div className='identity'>
        <span className="display_name">{props.display_name}</span>
        <span className="handle">@{props.handle}</span>
      </div>
    </div>
  );
}