import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../common/button/button';
import './addPostModal.scss';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
});

const AddPostModal = ({ onSubmit, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className='addPostModal-container-wrapper'>
      <form
        className='addPostModal-container'
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className='addPostModal-close' onClick={onClose}>
          x
        </div>
        <h3 className='addPostModal-title'>Add post</h3>
        <input
          className='addPostModal-input'
          type='text'
          name='title'
          placeholder='Title'
          {...register('title')}
        />
        <p className='addPostModal-errText'>{errors.title?.message}</p>
        <textarea
          className='addPostModal-textarea'
          rows='10'
          name='body'
          placeholder='Body'
          {...register('body')}
        />
        <p className='addPostModal-errText'>{errors.body?.message}</p>
        <Button
          btnType='submit'
          text='Submit'
          className='addPostModal-button'
        />
      </form>
    </div>
  );
};

export default AddPostModal;
