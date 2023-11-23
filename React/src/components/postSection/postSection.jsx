import { useSelector } from 'react-redux';
import Post from './post/post';
import './postSection.scss';

const PostSection = () => {
  const { posts } = useSelector((state) => state.post);
  return (
    <div className='postSection-container'>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostSection;
