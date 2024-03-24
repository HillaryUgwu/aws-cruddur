import './MessageItem.css';
import { format_datetime, message_time_ago } from '../lib/DateTimeFormats';
import ProfileAvatar from 'components/ProfileAvatar'

export default function MessageItem(props) {
  console.log("MessageItem props",props)
  return (
    <div className='message_item'>
      {/* <Link className='message_avatar' to={`/messages/@`+props.message.handle}></Link> */}
      <ProfileAvatar id={props.message.cognito_user_id} />
      <div className='message_content'>
        <div classsName='message_meta'>
          <div className='message_identity'>
            <div className='display_name'>{props.message.display_name}</div>
            <div className="handle">@{props.message.handle}</div>
          </div>{/* activity_identity */}
        </div>{/* message_meta */}
        <div className="message">{props.message.message}</div>
        <div className="created_at" title={format_datetime(props.message.created_at)}>
          <span className='ago'>{message_time_ago(props.message.created_at)}</span>
        </div>{/* created_at */}
      </div>{/* message_content */}
    </div>
  );
}