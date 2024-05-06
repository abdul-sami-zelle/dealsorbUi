import * as React from "react";
import { useDispatch , useSelector} from 'react-redux';
import { toggleVisibility } from "../stateManagement/slices/cartVisibilitySlice";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function CartItems() {
    const isVisible = useSelector((state) => state.visibility);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
      dispatch(toggleVisibility());
    };
    return(
        <>
             <div>
        <div className={`cartt ${isVisible ? 'visible' : ''}`}>
        
          <IconButton onClick={handleButtonClick}>
          <CloseRounded/>
          </IconButton>
        <p>This is the container content.</p>
      </div>
      
      <style>
        {`
          .cartt {
            position: fixed;
            top: 0;
            right: ${isVisible ? '0' : '-400px'};
            height: 100%;
            width: 400px;
            background-color: #fff;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
            overflow-y: auto;
            z-index: 9999;
            transition: right 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
        </>
    )
}

export default CartItems;