import React, { useEffect, useState, useRef } from 'react';
import './blogs.css';
import SEO from '../../SEO/mainSEO';
import { useNavigate,useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';


const htmlString = "";

export default function SpecificBlog() {
    // const { id } = useParams();
    const location = useLocation();
    const [allBlogCategories, setAllBlogCategories] = useState([]);
    const [allTrendingBlogs, setAllTrendingBlogs] = useState([]);
    const [firstCategoryBlog, setFirstCategoryBlog] = useState([]);
    const [featuredDealBlogPage, setFeaturedDealBlogPage] = useState([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    const handleFormSubmit = (event) => {
        event.preventDefault();
        yourFunction(email);
        setEmail('');
    };

    const yourFunction = (email) => {
        console.log("Email submitted:", email);
    };

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
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/post/get-all`)
            .then((response) => response.json())
            .then((data) => {
                setAllTrendingBlogs(data.trendingPosts);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const navigate = useNavigate();
    
    const navigateToCategory = (category) => {
        // Navigate to the desired route with the category parameter
        navigate(`/blogs/category/${category}`);
      };
    const navigateToBlog = (id, e) => {
        // Navigate to the desired route with the category parameter
        navigate(`/blogs/${id}`, { state: e });
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
                                    item.name,)
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
                    Every product and brand is selected by RetailMeNot's editors. We may earn a commission on the items you choose to buy. 
                    </h4>
                </div>
                </Grid>
                
                    <Grid item lg={8}>
                        <div className="spec-main-blog-thumbnail">
                            <div className="spec-main-blog-thumbnail-other-sec">
                                <h2>
                                {location?.state?.heading}
                                </h2>
                                <img src='https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg' className="category-image3"/>
                                <div style={{display:'flex'}}>
                                    <h3>{location?.state?.category}</h3>
                                    <h4>{location?.state?.date}</h4>
                                    <h4><span style={{fontWeight:'500 !important'}}>By</span> {location?.state?.author}</h4>
                                </div>
                            </div>
                            <div className="spec-main-blog-thumbnail-image-sec" style={{
                                backgroundImage:`url(${location?.state?.image})`
                            }}>
                                
                            </div>
                        </div>
                        <div className="blog-content">
                           <div dangerouslySetInnerHTML={{ __html: location?.state?.blog }} />
                        </div>
                    </Grid>
                    <Grid item lg={4}>
                    <div className="other-trending-blogs">
                                    <h2>TRENDING</h2>
                                

                                {allTrendingBlogs.map((item, index) => (
                           <div className="trending-blog-side" onClick={()=>{
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
                           <div className="thumbnail-tbs">

                               <img src='https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg' className="cat-img-2" />

                               <img src={item.postImgUrl} alt="" srcset="" />
                           </div>
                           <h3>
                               {item.postHeading}
                           </h3>
                       </div>
                        ))}
                                    
                                    
                                    
                                  
                                  

                                </div>

                            {featuredDealBlogPage.length>0 &&  (featuredDealBlogPage.map((item, index) => ( 
                          <div style={{
                            cursor:'pointer'
                          }} onClick={()=>{
                            window.open(item.url, '_blank');
                        }}  className="blog-sec-offer">
                                <div className="white-section-circle" style={{
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
                                        <input required type="email" name='email' placeholder='Your Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />
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