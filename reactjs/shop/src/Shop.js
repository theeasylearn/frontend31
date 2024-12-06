import React from "react";
import Header from "./header";
import Footer from "./footer";
class Shop extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<>
        <Header />        
        <main>
  <div className="container vh-100">
    <div className="row">
      <div className="col-12">
        <h3 className="py-3">Shop</h3>
      </div>
    </div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
      {/* col */}
      <div className="col mb-3">
        <a href="shop-grid.html" className="text-decoration-none text-inherit">
          {/* card */}
          <div className="card card-product shadow">
            <div className="card-body text-center py-8">
              {/* img */}
              <img src="theme/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" className="mb-3" />
              {/* text */}
              <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</main>
         <Footer />   
        </>);
    }
}
export default Shop;