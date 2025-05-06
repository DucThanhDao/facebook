import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import './PostSender.css';

PostSender.propTypes = {
  user: {
    displayName: ''
  }
};
function PostSender({ user }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="postSender">
      <div className="postSender__top">
        <Avatar src="" />
        <form>
          <input type="text" placeholder={`What's on your mind, ${user.displayName}?`} />
          <input type="text" placeholder="image URL (Optional)" />
          <button onClick={handleSubmit} type="submit">
            Hiden submit
          </button>
        </form>
      </div>
      <div className="postSender__bottom">
        <div className="postSender__option">
          <VideocamIcon style={{ color: 'red' }} />
          <p>Live Video</p>
        </div>
        <div className="postSender__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <p>Photo/Video</p>
        </div>
        <div className="postSender__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default PostSender;
