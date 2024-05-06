import Carousel from 'react-bootstrap/Carousel';
import './subCarousel.css'
import noonBanner from '../../public/noonBanner.png'
import noonBanner1 from '../../public/noonBanner1.png'



function SubCarousel() {
  return (
    <Carousel className='mainSubCarousel'>
      <Carousel.Item className='storesBanners'>
        <div className='imageSection' style={{backgroundImage:`url(${noonBanner1})`}}>
        
        </div>
        <Carousel.Caption>
          <div style={{padding:'10px'}}>
          <h3 style={{
            textShadow:'1px 1px 2px pink'
          }}>NOON</h3>
          <p style={{
            textShadow:'1px 1px 2px pink'
          }}>
          Score unbeatable deals at noon with our exclusive coupons – saving made simple for every purchase!
          </p>
          </div>
        </Carousel.Caption>
        <div className="visitStoreLink">
          <button onClick={()=>{
             window.open(`https://www.noon.com/`, '_blank');
          }}>
            Visit Store
            <img src="https://cdn-icons-png.flaticon.com/128/10009/10009152.png" alt="" srcset="" />
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item className='storesBanners'>
        <div className='imageSection' style={{backgroundImage:`url(https://play-lh.googleusercontent.com/OAKRRBQmFM6E1cPmaS9cLrewRxKSy3H0IeeVIbXYXvHCnF8bG5KOJcxAaz39xdB6BlVk)`}}>
        
        </div>
        <Carousel.Caption>
          <div style={{ backgroundColor:'transparent'}}>
          <h3 style={{
            textShadow:'1px 1px 2px pink'
          }}>NAMSHI</h3>
          <p style={{
            textShadow:'1px 1px 2px pink'
          }}>
          Elevate your style for less with exclusive Namshi coupons – fashion savings at your fingertips!
          </p>
          </div>
        </Carousel.Caption>
        <div className="visitStoreLink">
          <button onClick={()=>{
             window.open(`https://www.namshi.com/home/`, '_blank');
          }}>
            Visit Store
            <img src="https://cdn-icons-png.flaticon.com/128/10009/10009152.png" alt="" srcset="" />
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item className='storesBanners'>
        <div className='imageSection'  style={{backgroundImage:`url(https://seeklogo.com/images/D/daraz-logo-AA537DF718-seeklogo.com.png)`}}>
      
        </div>
        <Carousel.Caption>
          <div style={{ backgroundColor:'transparent'}}>
          <h3 style={{
            textShadow:'1px 1px 2px pink'
          }}>DARAZ</h3>
          <p style={{
            textShadow:'1px 1px 2px pink'
          }}>
             Unlock savings galore at our Daraz store with exclusive coupons for every purchase!
          </p>
          </div>
        </Carousel.Caption>
        <div className="visitStoreLink">
          <button onClick={()=>{
             window.open(`https://www.daraz.pk/`, '_blank');
          }}>
            Visit Store
            <img src="https://cdn-icons-png.flaticon.com/128/10009/10009152.png" alt="" srcset="" />
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default SubCarousel;