import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ActionBar from './components/actionBar/actionBar';
import PostSection from './components/postSection/postSection';
import { addPost, getPostItems } from './slice/postSlice';
import { useEffect, useState } from 'react';
import LoadingCircle from './components/common/loadingCircle/loadingCircle';
import AddPostModal from './components/addPostModal/addPostModal';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostItems());
  }, []);

  const handleOnAddSubmit = (data) => {
    const postData = {
      userId: 23,
      id: Math.floor(Math.random() * 10000),
      title: data.title,
      body: data.body,
    };
    dispatch(addPost(postData));
    setIsAddModalOpen(false);
  };

  const handleOnCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddModal = () => {
    setIsAddModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className='App'>
        <LoadingCircle />
      </div>
    );
  }

  return (
    <div className='App'>
      {isAddModalOpen && (
        <AddPostModal
          onSubmit={handleOnAddSubmit}
          onClose={handleOnCloseAddModal}
        />
      )}
      <ActionBar onAddModal={handleAddModal} />
      <PostSection />
    </div>
  );
}

export default App;
