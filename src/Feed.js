import StoryReel from './StoryReel';
import './Feed.css';
import PostSender from './PostSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostSender
        user={{
          displayName: 'Duc Thanh Dao'
        }}
      />
      <Post
        profilePic="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1265891953huge-1675854591428.jpg"
        image="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1265891953huge-1675854591428.jpg"
        username="Duc Thanh Dao"
        timestamp={new Date().toLocaleDateString()}
        message="Hello World"
      />
    </div>
  );
}

export default Feed;
