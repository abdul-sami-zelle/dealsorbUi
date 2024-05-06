import React, { useEffect, useState, useRef } from 'react';
import './blogs.css';
import SEO from '../../SEO/mainSEO';
import { useNavigate ,useParams} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';


const htmlString = "";

export default function SpecificBlogCategory() {
    const { category } = useParams();
    const [allBlogCategories, setAllBlogCategories] = useState([]);
    const [allBlogCategoryWise, setAllBlogCategoryWise] = useState([]);
    const [featuredDealBlogPage, setFeaturedDealBlogPage] = useState([]);
    
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const navigateToBlog = (id, e) => {
      // Navigate to the desired route with the category parameter
      navigate(`/blogs/${id}`, { state: e });
    };


    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    useEffect(() => {
        // Fetch data from your API endpoint
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/Blog/Get-All`)
            .then((response) => response.json())
            .then((data) => {
                setFeaturedDealBlogPage(data.Blog);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(() => {
        // Fetch data from your API endpoint
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/PostCategory/Get-All`)
            .then((response) => response.json())
            .then((data) => {
                setAllBlogCategories(data.postCategory);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/post/get-post/${category}`)
            .then((response) => response.json())
            .then((data) => {
                setAllBlogCategoryWise(data.post);
              
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const handleFormSubmit = (event) => {
        event.preventDefault();
        yourFunction(email);
        setEmail('');
    };

    const yourFunction = (email) => {
        console.log("Email submitted:", email);
    };


    return (
       <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
             <ResponsiveAppBar/>
             <Grid container>
             <Grid item lg={1.5}></Grid>
             <Grid item lg={9}>
                <Grid container className='spec-blog'>
                <Grid item lg={12}>
                <div className="blog-categories">
                        {allBlogCategories.map((item, index) => (
                            <div className="blog-categories-tab" key={index} onClick={()=>{
                                navigateToCategory(
                                    item.name,
                                    
                                )
                            }}>
                                <img src={item.icon} alt="" />
                                <h4>{item.name}</h4>
                            </div>
                        ))}
                        {allBlogCategories.length >= 7 && (
                            <div className="blog-categories-tab">
                                <img src={more} alt="" />
                                <h4>More</h4>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item lg={12}>
                <div style={{marginBottom:'50px', marginTop:'50px'}}  className="blog-quote-1">
                    <h4>
                    Every product and brand is selected by RetailMeNot's editors. We may earn a commission on the items you choose to buy {category}. 
                    </h4>
                </div>
                </Grid>

                    <Grid item lg={12}>
                    <div style={{
                        display:'flex',
                        flexWrap:'wrap'
                    }}>
  

  {allBlogCategoryWise.length > 0 && (
    allBlogCategoryWise.slice(0, 3).map((item, index) => (
        <div className="simple-blog-post" onClick={() => {
            navigateToBlog(
                item._id,
                {
                    "author": item.author,
                    "date": item.createdAt,
                    "blog": item.description,
                    "heading": item.postHeading,
                    "image": item.postImgUrl,
                    "category": item.postCategory,
                    "categoryIcon":""
                }
            )
        }}>
            <div className="image-section-sbp" style={{
                backgroundImage: `url(${item.postImgUrl})`
            }}>

            </div>
            <div className="other-section-sbp">
                <h5>{item.postCategory}</h5>
                <h2>{item.postHeading}</h2>
            </div>
        </div>
    ))
)}


                   

               
                    </div> 
                    </Grid>  
                    <Grid item lg={8}>
                    <div style={{
                        display:'flex',
                        flexWrap:'wrap'
                    }}>
                        {allBlogCategoryWise.length > 3 && (
    allBlogCategoryWise.slice(3).map((item, index) => (
        <div className="simple-blog-post" onClick={() => {
            navigateToBlog(
                item._id,
                {
                    "author": item.author,
                    "date": item.createdAt,
                    "blog": item.description,
                    "heading": item.postHeading,
                    "image": item.postImgUrl,
                    "category": item.postCategory,
                    "categoryIcon":""
                }
            )
        }}>
            <div className="image-section-sbp" style={{
                backgroundImage: `url(${item.postImgUrl})`
            }}>

            </div>
            <div className="other-section-sbp">
                <h5>{item.postCategory}</h5>
                <h2>{item.postHeading}</h2>
            </div>
        </div>
    ))
)}


                    


               
                    </div> 
                    </Grid>
                    <Grid item lg={4}>
                  
                           
                          {featuredDealBlogPage.length>0 &&  (featuredDealBlogPage.map((item, index) => ( 
                          <div style={{
                            cursor:'pointer'
                          }} onClick={()=>{
                            window.open(item.url, '_blank');
                        }} className="blog-sec-offer">
                                <div  className="white-section-circle" style={{
                                    backgroundImage:`url(${item.image})`
                                }}>

                                </div>
                                <div className="second-section-circle">

                                </div>
                                <div className="content-section-offer">
                                    <h2>{item.title}</h2>
                                    <h1>{item.description}</h1>
                                </div>
                            </div>)))}

                            <div className="subscribe-blog-sec">
                                <h4>Deals delivered to your inbox.</h4>
                                <h5>Subscribe now for top-notch shopping advice</h5>
                                <div className="subscribe-form-blog-sec">
                                    <form className="subscribe-form" onSubmit={handleFormSubmit}>
                                        <input required type="email" name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <input type="submit" className='subscribe-button' value='Subscribe' />
                                    </form>
                                </div>
                            </div>
                    </Grid>
                </Grid>
             </Grid>
             <Grid item lg={1.5}></Grid>
             </Grid>
             <Footer/>
       </div>
    )
}