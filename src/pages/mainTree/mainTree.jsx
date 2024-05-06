import SubCarouselTesting from "../carouselTesting2/subCarouselTesting";
import MainCarouselTesting from "../carouselTesting/mainCarouselTesting";
import './mainTree.css'


export default function MainTree() {
    const saleBanners = [
        "https://img.freepik.com/free-vector/flat-sale-banner-with-photo_23-2149026968.jpg?w=1380&t=st=1693021570~exp=1693022170~hmac=15fbcfcb5cb810fb70e00bdcb5faadb7bf07ab815b91ac15f536909abcf07b99",
        "https://img.freepik.com/free-psd/fashion-super-sale-banner-template_23-2148997357.jpg?w=1380&t=st=1693021635~exp=1693022235~hmac=011a6d80eeccfeafe9525e04ad002fe111e36364381c745da72a1ec4df1575aa",
        "https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg?w=1380&t=st=1693021706~exp=1693022306~hmac=245ac710be90bd05b9c0bca7c38c8a1ae1e78bfb98f47877363c44881c143c4e",
        "https://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?w=1380&t=st=1693021730~exp=1693022330~hmac=d8be7fe228a02f04ee3b7e082122e96e514e8d14c23b0b0369e6ff4a49477893",
        "https://img.freepik.com/free-vector/modern-promotional-sales-banner-design_1017-9787.jpg?2&w=1060&t=st=1693021763~exp=1693022363~hmac=20877ff9e86694692b1a4cc1b4cbe090f39f0041c25851f1e5e4c5de2bb3417c",
        "https://img.freepik.com/free-vector/deal-promotional-banner-hanging-price-tag-style_1017-27325.jpg?w=1060&t=st=1693021786~exp=1693022386~hmac=6a40ee3173925f9e3de54fe29d2f3d5cf378c5b928c4b20bbda0ec86f72493f8"
      ]
    return (
        <div className="MainTree">
            <MainCarouselTesting images={saleBanners} />
           
        </div>
    )
}