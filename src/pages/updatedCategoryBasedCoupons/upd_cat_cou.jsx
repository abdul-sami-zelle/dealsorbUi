import './style.css';
import toyota from '../../../public/toyota.png';
import amazon from '../../../public/amazon.png';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState ,setCouponData,getCouponData}  from '../../stateManagement/slices/loadingSlice';
import expiresIcon from '../../assets/expires.png'


function handleClick(id) {
    const apiUrl = `https://coupon-backend-tau.vercel.app/api/v1/coupon/click-coupon/${id}`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API response:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


export default function Upd_Cat_Coupon(props) {
    const dispatch = useDispatch();

    const handleSetLoadingTrue = () => {
        console.log(selectLoadingState);
        dispatch(setLoadingTrue());
        console.log(selectLoadingState);
    };
    
    const handleSetLoadingFalse = () => {
        dispatch(setLoadingFalse());
    };
      
      const isLoading = useSelector(selectLoadingState);
    return <>
        <div className="mainContainerUCC">
            <div className="mainContainerUCCLogo" style={{
                backgroundImage:`url(${amazon})`
            }}>
                <div className="lastDateUCC">
                    60% off
                </div>

            </div>
            <div className="mainContainerUCCDetails">
                <h1>
                    {props.company}
                </h1>
                <div style={{
                    height:'5px'
                }}></div>
                <p>
                    {props.tagline}
                </p>
                <div style={{
                    height:'10px'
                }}></div>
                <h3 onClick={()=>{
                    handleSetLoadingTrue();
                    handleClick(props.id);
                    dispatch(setCouponData({
                        name:`${props.logo}`,
                        companyName:`${props.company}`,
                        tagLine:`${props.tagline}`,
                        code:`${props.code}`,
                        expiry:`${props.expiry}`,
                        trackingUrl:`${props.url}`,
                        logo:`${props.imgUrl}`
                    }));
                }}>
                    Coupon Code
                </h3>
                <div className="expiryDate">
                    <img src={expiresIcon} alt="" srcset="" />
                    <div className="expiryDate2">
                        <p className='expiryDate2p'>Expires at:</p>
                        <h1 className='expiryDate2h1'>{
                            props.neverExpire===true?`Never Expire`:props.expiry
                        }
                          </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
}