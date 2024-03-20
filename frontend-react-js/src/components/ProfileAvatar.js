import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
  const backgroundImageurl = `url("https://assets.ohary37.com/avatars/${props.id}.jpg")`;
  const styles = {
    backgroundImage: backgroundImageurl.includes("undefined") ? 'none' : backgroundImageurl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   };
  // console.log("backgroundImage (not undefined)",backgroundImageurl,styles)

  return (
    <div 
      className="profile-avatar"
      style={styles}
    ></div>
  );
}