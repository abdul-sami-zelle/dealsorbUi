import './style.css';
import amazon from '../../../public/amazon.png';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState ,setCouponData}  from '../../stateManagement/slices/loadingSlice';
import expiresIcon from '../../assets/expires.png'

export default function Upd_Cat_Coupon2(props) {
    const dispatch = useDispatch();

    const handleSetLoadingTrue = () => {
        console.log(selectLoadingState);
        dispatch(setLoadingTrue());
        console.log(selectLoadingState);
      };
      
      const isLoading = useSelector(selectLoadingState);
    return <>
        <div className="mainContainerUCC2">
            <div className="mainContainerUCCLogo2" style={{
                backgroundImage:`url(${amazon})`
            }}>
                <div className="lastDateUCC2">
                    60% off
                </div>

            </div>
            <div className="mainContainerUCCDetails2">
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
                <div className="expiryDate21">
                    <img src={expiresIcon} alt="" srcset="" />
                    <div className="expiryDate22">
                        <p className='expiryDate2p2'>Expires at:</p>
                        <h1 className='expiryDate2h12'>{
                            props.neverExpire===true?`Never Expire`:props.expiry
                        }
                          </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
}