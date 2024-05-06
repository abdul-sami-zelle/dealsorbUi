import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowableProductDetails from "../pages/productDetailPage/showableProductDetails";
import MainCouponLandingPage from "../pages/couponsPage/mainCouponsLandingPage";
import MainLandingPage from "../pages/landingPage/landingPage";
import MainStorePage from "../pages/storesCouponsPage/mainStorePage";
import MainCategories from "../pages/categoriesPage/mainCategoriesPage";
import AllStores from "../pages/AllStores/allStores";
import MainCheckOutPage1 from "../pages/checkoutPage/mainCheckoutPage";
import OcassionalFeaturedProducts from "../pages/ocassionalFeaturedProducts/ocassionalFeaturedProducts";
import SpecificCategories from "../pages/categoriesPage/specificCategory";
import CouponCategoryWise from "../pages/couponCategoryWise/couponCategoryWise";
import UpdatedCouponView from "../pages/updatedCouponCate/updatedCouponCat";
import UpdatedCategoryPageDC from "../pages/updatedCategoryBasedCoupons/updatedCategoryDC";
import OcassionPage from "../pages/ocassions/ocassionPage";
import AllEvents from "../pages/AllEvents/allEvents";
import AllDeals from "../pages/AllDeals/allDeals";
import AllCoupons from "../pages/AllCoupons/allCoupons";
import MainBlogsPage from "../pages/blogs/blogs";
import SpecificBlog from "../pages/blogs/specificblog";
import SpecificBlogCategory from "../pages/blogs/specificBlogCategory";

function Routing(categoryValue){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLandingPage/>} />
                <Route path="/product-details/:productName" element={<ShowableProductDetails />} />
                <Route path="/coupon-deals" element={<MainCouponLandingPage/>}/>
                <Route path="/all-stores/:storeName" element={<MainStorePage category={categoryValue}  />}/>
                <Route path="/all-stores" element={<AllStores/>}/>
                <Route path="/categories" element={<UpdatedCouponView/>}/>
                <Route path="/categories/:category" element={<SpecificCategories category={categoryValue}  /> }/>
                <Route path="/check-out" element={<MainCheckOutPage1/>}/>
                <Route path="/coupon-category" element={<UpdatedCouponView/>}/>
                <Route path="/coupon-category/:category" element={<UpdatedCategoryPageDC category={categoryValue} />}/>
                <Route path="/events" element={<AllEvents />}/>
                <Route path="/events/:eventType" element={<OcassionPage eventType={categoryValue} />}/>
                <Route path="/all-deals" element={<AllDeals/>} />
                <Route path="/all-coupons" element={<AllCoupons/>} />
                <Route path="/blogs" element={<MainBlogsPage/>} />
                <Route path="/blogs/category/:category" element={<SpecificBlogCategory category={categoryValue} />} />
                <Route path="/blogs/:id" element={<SpecificBlog id={categoryValue} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;