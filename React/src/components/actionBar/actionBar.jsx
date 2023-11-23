import Button from '../common/button/button';
import './actionBar.scss';

const ActionBar = ({ onAddModal }) => {
  return (
    <div className='actionBar-container'>
      <Button
        text='Add post'
        className='actionBar-button'
        onClick={onAddModal}
      />
    </div>
  );
};

export default ActionBar;
