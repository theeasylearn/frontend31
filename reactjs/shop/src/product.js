import React from "react";
import Header from "./header";
import Footer from "./footer";
class Product extends React.Component
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
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h3 className="py-3">Tea &amp; Snacks</h3>
      </div>
    </div>
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
      {/* col */}
      <div className="col">
        {/* card */}
        <div className="card card-product shadow">
          <div className="card-body">
            {/* badge */}
            <div className="text-center position-relative">
              <a href="shop-single.html">
                {/* img */}
                <img src="assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
              </a>
              {/* action btn */}
            </div>
            {/* heading */}
            <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none">Dhokla</a></h2>
            <div>
              {/* rating */}
              <small className="text-warning">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </small>
              <span className="text-muted small">4.5 (189)</span>
            </div>
            {/* price */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="text-dark">₹ 18</span>
              </div>
              {/* btn */}
              <div>
                <a href="#!" className="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                  Add
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
        <Footer />    
        </>)
    }
}
export default Product;