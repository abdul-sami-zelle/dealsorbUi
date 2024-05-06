import Grid from '@mui/material/Grid';
import '../mainCategoriesPage.css'


function IconsTabMainCate() {
    return (
       
            <div className="tabsMainCategory">
                            <div className="rfq">
                                <div className="tabsMainCategory_icon">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/quote.png?alt=media&token=f69407c2-9fc3-4394-8b3d-cb86aecec01c" alt="" srcset="" />
                                </div>
                                <div style={{width:'10px'}}></div>
                                <div className="rfq_content">
                                   <h1>
                                      Request For Quotation
                                   </h1>
                                   <p>
                                    one request, multiple quotes
                                   </p>
                                </div>
                            </div>
                            <div className="rts">
                                <div className="tabsMainCategory_icon">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/ready.png?alt=media&token=c057da69-041d-4b28-93ca-ebe0688e4401" alt="" srcset="" />
                                </div>
                                <div style={{width:'10px'}}></div>
                                <div className="rts_content">
                                   <h1>
                                      Ready to Ship
                                   </h1>
                                   <p>
                                   Order Directly with Fast Dispatch
                                   </p>
                                </div>
                            </div>
                            <div className="ls">
                                <div className="tabsMainCategory_icon">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/quote.png?alt=media&token=f69407c2-9fc3-4394-8b3d-cb86aecec01c" alt="" srcset="" />
                                </div>
                                <div style={{width:'10px'}}></div>
                                <div className="ls_content">
                                   <h1>
                                      Logistics Services
                                   </h1>
                                   <p>
                                    Reliable Shipping by Ocean and Air
                                   </p>
                                </div>
                            </div>
                        </div>
    
    )
}

export default IconsTabMainCate