import './post.scss';

const Post = ({ title, body }) => {
  return (
    <div className='post-container'>
      <h3 className='post-title'>{title}</h3>
      <div className='post-body'>{body}</div>
    </div>
  );
};

export default Post;
