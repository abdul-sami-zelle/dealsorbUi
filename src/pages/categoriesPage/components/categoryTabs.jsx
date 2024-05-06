import Grid from '@mui/material/Grid';
import '../mainCategoriesPage.css'


function CategoryTabsMain({data}) {
    return(
      <>
        <div>
      {data.map((item) => (
        <div className="categories_section_a" key={item.id}>
          <div className="categoryHeadingView">
            <div className="categoryHeadingView_a">
              <div className="categoryImg">
                <img src={item.src} alt="" />
              </div>
              <h2>{item.category}</h2>
            </div>
            <div className="forward_icon_cat">
              <img
                src='https://cdn-icons-png.flaticon.com/128/2989/2989988.png'
                height="25px"
                width="25px"
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
      </>  
    )
}

export default CategoryTabsMain;