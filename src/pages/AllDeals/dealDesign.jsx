import './allDeals.css'

export default function DealDesign({storeName,expiry,title,type}) {
    return <>
    <div className="mainContainerDD">
        <div className="imgSectionDD" style={{
            backgroundImage:'url(https://www.adorama.com/images/cms/20008DealsPage-SocialCard-1200x630_71521.jpg)'
        }}>
            <div className="storeLogoDD">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Macy%27s_logo.svg/1280px-Macy%27s_logo.svg.png" alt="" srcset="" />
            </div>
            <div className="dealHeadingDD">
                {type}
            </div>
        </div>
        <div className="remainingSecDD">
            <p>{storeName}</p>
           <h3>
            {title}
           </h3>


            <h5>
                Expires : {expiry}
            </h5>

        </div>
    </div>
    </>
}

