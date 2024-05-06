import   './loader.css'
import   React, { useState,useEffect } from 'react';
import loader from '../../../public/loader.gif'


export default function MainLoader() {
    return (
        <>
        <div className="loaderMainContainer">
            <div style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <img src={loader} alt="" srcset="" />
                <h1>Please Wait...</h1>
            </div>

        </div>
        </>
    )
}