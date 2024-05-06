import   './styler.css'
import   React, { useState,useEffect } from 'react';
import   CloseIconButton from '../closeButton/closeButton'
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingFalse, selectLoadingState,getCouponData } from '../../stateManagement/slices/loadingSlice';

export default function CouponCodeModal(){
    const [copied, setCopied] = useState(false);
    const dispatch = useDispatch();


    const handleCopy = () => {
        const textToCopy = document.querySelector('.codeCopier p').innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                // setTimeout(() => setCopied(false), 2000); // Reset 'copied' state after 2 seconds
            })
            .catch(err => console.error('Failed to copy:', err));
    };

    

      const handleSetLoadingFalse = () => {
        dispatch(setLoadingFalse());
      };
      const data = useSelector(getCouponData);

      const handleData = () => {
        console.log(data);
      }

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            window.open(`${data.trackingUrl}`, '_blank');
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, []); 
    
    return <div className="modalMainContainer">
        <div className='modalContainer1'>
           
            <div className='topSideMContainer'>
            <div className='CIbtn' onClick={()=>{
                handleSetLoadingFalse();
               // handleData();
            }}>
                <CloseIconButton/>
            </div>

            <div className="storeIconImageM" style={{
                backgroundImage:`url(${data.logo})`
            }}>

</div>
<div className="storeNameM">
    <h3>
      
    {data.companyName}
    </h3>
</div>
<div className="tagLine">
    <h2>
    {data.tagLine}
    </h2>
</div>

{data.type==='coupon'? <div className='codeCopier'>
            <p>{data.code}</p>
            <button onClick={handleCopy}>
                {copied ? 'Copied' : 'COPY'}
            </button>
        </div>:<button onClick={()=>{
            window.open(`${data.trackingUrl}`, '_blank');
        }} className='shopButtonM'>
    Shop at {data.companyName} 
</button>}

{data.type==='coupon'?<p className='cCbottom'>Copy and paste this code at <span style={{color:'red',textDecoration:'underline',cursor:'pointer'}}>{data.companyName}</span></p>:<p className='cCbottom'>No Code Needed. Start shopping at <span style={{color:'red',textDecoration:'underline',cursor:'pointer'}}>{data.companyName}</span></p>}

<div className="endsDateM">
    <h4>
    Ends {data.expiry}
    </h4>
</div>


            </div>
            <div className="bottomSideMContainer">
                <p>Details Ends 03/22/2024 Tap offer to copy the coupon code. Remember to paste code when you check out. Online only.</p>
            </div>

        </div>
    </div>
    
}