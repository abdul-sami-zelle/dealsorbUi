import React, { useEffect, useState, useRef } from 'react';
import './blogs.css';
import SEO from '../../SEO/mainSEO';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';
import more from '../../../public/more.png'
import loaderImg from '../../../public/loader.gif'
import done from '../../../public/done.png'


export default function MainBlogsPage() {
    const [allBlogs, setAllBlogs] = useState([]);
    const [allBlogCategories, setAllBlogCategories] = useState([]);
    const [allTrendingBlogs, setAllTrendingBlogs] = useState([]);
    const [allFeaturedBlogs, setAllFeaturedBlogs] = useState([]);
    const [firstCategoryBlog, setFirstCategoryBlog] = useState([]);
    const [secondCategoryBlog, setSecondCategoryBlog] = useState([]);
    const [featuredDealBlogPage, setFeaturedDealBlogPage] = useState([]);
    const [email, setEmail] = useState('');
    const [loader,showLoader] = useState(false);
    const [subscribeDone,setSubscribeDone] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);



    const handleFormSubmit = (event) => {
        event.preventDefault();
        yourFunction(email);
        showLoader(true);
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


    const fetchFirstCategoryBlogs = (categoryName) => {
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/post/get-post/${categoryName}`)
          .then(response => response.json())
          .then(post => setFirstCategoryBlog(post.post));
      }

    const fetchSecondCategoryBlogs = (categoryName) => {
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/post/get-post/${categoryName}`)
          .then(response => response.json())
          .then(post => setSecondCategoryBlog(post.post));
      }

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/PostCategory/Get-All`)
            .then((response) => response.json())
            .then((data) => {
                setAllBlogCategories(data.postCategory);
                fetchFirstCategoryBlogs(data.postCategory[0].name);
                fetchSecondCategoryBlogs(data.postCategory[1].name);
                
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
                setAllBlogs(data.posts);
                setAllTrendingBlogs(data.trendingPosts);
                setAllFeaturedBlogs(data.featuredPosts);
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const navigate = useNavigate();
    const navigateToBlog = (id, e) => {
      // Navigate to the desired route with the category parameter
      navigate(`/blogs/${id}`, { state: e });
    };

    const navigateToCategory = (category) => {
        // Navigate to the desired route with the category parameter
        navigate(`/blogs/category/${category}`);
      };

    // useEffect(() => {
    //     // Fetch data from your API endpoint
    //     fetch(`https://coupon-backend-tau.vercel.app/api/v1/post/get-post/Budget`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setFirstCategoryBlog(data.post);
                
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);




    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <ResponsiveAppBar activePage={'Blogs'} />
            <div className="headerBlogsPage">

            </div>

            <Grid container>
                <Grid item lg={1.5}></Grid>
                <Grid item lg={9} className='main-blog-content'>
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


                    <div className="blog-quote-1">
                        <h4>
                            Every product and brand is selected by RetailMeNot's editors. We may earn a commission on the items you choose to buy.
                        </h4>
                    </div>

                    <div className="trending-blogs-section">
                        <Grid container>
                            <Grid item lg={8}>
                                {allTrendingBlogs.length > 0 && (
                                    <div className="main-blog-thumbnail" onClick={()=>{
                                        navigateToBlog(
                                            allTrendingBlogs[0]._id,
                                            {
                                                "author": allTrendingBlogs[0].author,
                                                "date": allTrendingBlogs[0].createdAt,
                                                "blog": allTrendingBlogs[0].description,
                                                "heading": allTrendingBlogs[0].postHeading,
                                                "image": allTrendingBlogs[0].postImgUrl,
                                                "category": allTrendingBlogs[0].postCategory,
                                                "categoryIcon":""
                                            }
                                        )
                                    }}>
                                        <div className="main-blog-thumbnail-img-sec" style={{
                                            backgroundImage: `url(${allTrendingBlogs[0].postImgUrl})`
                                        }}>

                                        </div>
                                        <div className="main-blog-thumbnail-other-sec">
                                            <img src='https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg' className="category-image" alt="Category" />
                                            <h5>{allTrendingBlogs[0].postCategory}</h5>
                                            <h2>{allTrendingBlogs[0].postHeading}</h2>
                                        </div>
                                    </div>
                                )}

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
                            </Grid>
                        </Grid>
                    </div>

                    <Grid container sx={{marginTop:'40px'}}>
                          <Grid item lg={8}>
                          <div className="latest-blogs-section">
                        <h2>The Latest</h2>
                        <div className="latest-blogs-sections-blogs">
                        {allFeaturedBlogs.map((item, index) => (
                            <div className="simple-blog-post" onClick={()=>{
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
                            <div className="image-section-sbp" style={{ backgroundImage: `url(${item.postImgUrl})` }}>

                            </div>
                            <div className="other-section-sbp">
                                <img src='https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg' className="category-image1" />
                                <h5>{item.postCategory}</h5>
                                <h2>{item.postHeading}</h2>
                            </div>
                        </div>
                        ))}

                        </div>
                    </div>
                          </Grid>
                          <Grid item lg={4}>
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
                                {loader? <div className="subscribe-blog-sec-overlay">
                                    <img src={loaderImg} alt="" srcset="" />
                                </div>:<></> }
                                {subscribeDone? <div className="subscribe-blog-sec-overlay-done">
                                    <img src={done} alt="" srcset="" /> 
                                    <h4>Thank You.</h4>
                                <h5>Your Subscription has been Done.</h5>
                                </div>:<></>}
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

                    <div className="category-wise-blogs-section">
                        <div className="header-cwbs">
                            <div style={{ display: 'flex' }}>
                                <img src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg" alt="" />
                                <h2>{allBlogCategories.length>0 &&(allBlogCategories[0].name)}</h2>
                            </div>

                            <h2 onClick={()=>{
                                 navigateToCategory(
                                    allBlogCategories[0].name)
                            }}>View All</h2>

                        </div>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>

{ firstCategoryBlog.length>0 &&  (firstCategoryBlog.map((item, index) => (
                            <div className="simple-blog-post" onClick={()=>{
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
                            <div className="image-section-sbp" style={{ backgroundImage: `url(${item.postImgUrl})` }}>

                            </div>
                            <div className="other-section-sbp">
                               
                                <h5>{item.postCategory}</h5>
                                <h2>{item.postHeading}</h2>
                            </div>
                        </div>
                        )))}




                          


                            

                        </div>
                    </div>

                    <div className="category-wise-blogs-section">
                        <div className="header-cwbs">
                            <div style={{ display: 'flex' }}>
                                <img src="https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2023/06/budget.svg" alt="" />
                                <h2>{allBlogCategories.length>0 &&(allBlogCategories[1].name)}</h2>
                            </div>

                            <h2 onClick={()=>{
                                 navigateToCategory(
                                    allBlogCategories[1].name)
                            }} >View All</h2>

                        </div>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>

{ secondCategoryBlog.length>0 &&  (secondCategoryBlog.map((item, index) => (
                            <div className="simple-blog-post" onClick={()=>{
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
                            <div className="image-section-sbp" style={{ backgroundImage: `url(${item.postImgUrl})` }}>

                            </div>
                            <div className="other-section-sbp">
                               
                                <h5>{item.postCategory}</h5>
                                <h2>{item.postHeading}</h2>
                            </div>
                        </div>
                        )))}
                          


                            

                        </div>
                    </div>
                </Grid>
                <Grid item lg={1.5}></Grid>
            </Grid>
            <Footer />
        </div>
    )
}