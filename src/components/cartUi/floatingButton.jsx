import React from 'react';
import './floating.css';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../../stateManagement/slices/cartVisibilitySlice';
import LocalMallIcon from '@mui/icons-material/LocalMall';


function FloatingButton() {
//   const handleButtonClick1 = () => {
//     // Define the action you want to perform when the button is clicked
//     // For example, scroll to the top of the page
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(toggleVisibility());
  };
  return (
    <button className="floating-button" onClick={handleButtonClick}>
      <LocalMallIcon/>
      <div className="quantityItems">
        12
      </div>
    </button>
  );
}

export default FloatingButton;
