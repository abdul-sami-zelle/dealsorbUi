import React, { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid';
import './popUp2.css'
import checkmark from '../../../public/checkmark.png'
import CloseIconButton from "../closeButton/closeButton";
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessLoaderState,setSuccessPopUpFalse,setSuccessPopUpTrue } from "../../stateManagement/slices/successPopup";


function PopUp2({popUpFor,exclaimation,mainLine,paraLine}) {
    const dispatch = useDispatch();
    
    return(
        <>
        <div className="mainPopup2Container">
            <div className="mainPopUpBody2">
                <div onClick={()=>{
                    dispatch(setSuccessPopUpFalse());
                }} className="closeBtnPopup2">
                     <CloseIconButton/>
                </div>
                <div className="imgIcon">
                    <img src={checkmark} alt="" srcset="" />
                </div>

                <h1>{exclaimation}</h1>
                <div style={{height:'5px'}}></div>
                <h1>{mainLine}</h1>
                
                <p>{paraLine}</p>
                
                <div className="barLine"></div>
            </div>
        </div>
           
        </>
    )
}
export default PopUp2