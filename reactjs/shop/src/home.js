import React from "react";
import Header from "./header";
import Footer from "./footer";
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <>
            <Header />
            <main>
            <section className="mt-8">
              {/* contianer */}
              <div className="container">
                <div className="row">
                  {/* col */}
                  <div className="col-12">
                    {/* cta */}
                    <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded">
                      {/* img */}
                      <div className="d-lg-flex align-items-center">
                        <img src="theme/assets/images/about/about-icons-1.svg" alt className="img-fluid" />
                        {/* text */}
                        <div className="ms-lg-4">
                          <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
                          <span>
                            Download the app get free food &amp;
                            <span className="text-primary">$30</span>
                            off on your first order.
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 mt-lg-0">
                        {/* btn */}
                        <a href="#" className="btn btn-dark">Download FreshCart App</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-8">
              <div className="container">
                {/* row */}
                <div className="table-responsive-xl pb-6 pb-xl-0">
                  <div className="row flex-nowrap">
                    <div className="col-12 col-xl-4 col-lg-6">
                      <div className="p-8 mb-3 rounded" style={{"background":"url(theme/assets/images/banner/ad-banner-1.jpg) no-repeat","background-size":"cover"}}>
                        <div>
                          <h3 className="mb-0 fw-bold">
                            10% cashback on
                            <br />
                            personal care
                          </h3>
                          <div className="mt-4 mb-5 fs-5">
                            <p className="mb-0">Max cashback: $12</p>
                            <span>
                              Code:
                              <span className="fw-bold text-dark">CARE12</span>
                            </span>
                          </div>
                          <a href="#" className="btn btn-dark">Shop Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-6">
                      <div className="p-8 mb-3 rounded" style={{"background":"url(theme/assets/images/banner/ad-banner-2.jpg) no-repeat","background-size":"cover"}}>
                        {/* Banner Content */}
                        <div>
                          {/* Banner Content */}
                          <h3 className="fw-bold mb-3">
                            Say yes to
                            <br />
                            season’s fresh
                          </h3>
                          <div className="mt-4 mb-5 fs-5">
                            <p className="fs-5 mb-0">
                              Refresh your day
                              <br />
                              the fruity way
                            </p>
                          </div>
                          <a href="#" className="btn btn-dark">Shop Now</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-6">
                      <div className="p-8 mb-3 rounded" style={{"background":"url(theme/assets/images/banner/ad-banner-3.jpg) no-repeat","background-size":"cover"}}>
                        <div>
                          {/* Banner Content */}
                          <h3 className="fw-bold mb-3">
                            When in doubt,
                            <br />
                            eat ice cream
                          </h3>
                          <div className="mt-4 mb-5 fs-5">
                            <p className="fs-5 mb-0">
                              Enjoy a scoop of
                              <br />
                              summer today
                            </p>
                          </div>
                          <a href="#" className="btn btn-dark">Shop Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-lg-14 my-8">
              {/* category */}
              <div className="container">
                {/* row */}
                <div className="row">
                  <div className="col-12">
                    <div className="mb-8">
                      {/* heading */}
                      <h3 className="mb-0">Shop by Category</h3>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
                  {/* col */}
                  <div className="col">
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
            </section>
            <section className="my-8">
              <div className="container">
                {/* row */}
                <div className="row">
                  <div className="col-12 mb-6">
                    {/* heading */}
                    <h3 className="mb-1">Fruits &amp; vegetables</h3>
                  </div>
                </div>
                {/* slider */}
                <div className="product-slider">
                  {/* item */}
                  <div className="item">
                    {/* item */}
                    <div className="card card-product shadow">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <a href="shop-single.html">
                            {/* img */}
                            <img src="theme/assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
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
            </section>
            <section className="my-8">
              <div className="container">
                {/* row */}
                <div className="row">
                  <div className="col-12 mb-6">
                    {/* heading */}
                    <h3 className="mb-1">tea &amp; Snacks</h3>
                  </div>
                </div>
                {/* slider */}
                <div className="product-slider">
                  {/* item */}
                  <div className="item">
                    {/* item */}
                    <div className="card card-product shadow">
                      <div className="card-body">
                        {/* badge */}
                        <div className="text-center position-relative">
                          <a href="shop-single.html">
                            {/* img */}
                            <img src="theme/assets/images/products/product-img-6.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" />
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
            </section>
          </main>
          <Footer />
            </>
          )
    }
}
export default Home;