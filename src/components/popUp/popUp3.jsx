import React, { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid';
import './popUp3.css'
import { useDispatch, useSelector } from 'react-redux';
import warning from '../../../public/warning.png';
import CloseIconButton from "../closeButton/closeButton";
import { setErrorPopupFalse } from "../../stateManagement/slices/errorPopUp";

function PopUp3({paraLine}) {
    const dispatch = useDispatch();
    
    return(
        <>
        <div className="mainPopup3Container">
            <div className="mainBodyPopUp3">
                <div className="imgPopUp3">
                  <img src={warning} alt="" srcset="" />
                  <h1>Alert</h1>
                </div>
                <p>{paraLine}</p>
                <div onClick={()=>{
                    dispatch(setErrorPopupFalse());
                }} className="closeBtnPOpup3">
                    <CloseIconButton/>
                </div>
            </div>
        </div>
           
        </>
    )
}
export default PopUp3