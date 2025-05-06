import './Story.css';
import Avatar from '@mui/material/Avatar';

Story.propTypes = {
  image: '',
  profileSrc: '',
  title: ''
};
function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
