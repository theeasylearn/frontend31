import React from "react";
import Header from "./header";
import Footer from "./footer";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* img slide */}
                            <div className="product productModal" id="productModal">
                                <div className="zoom" onmousemove="zoom(event)" style={{}}>
                                    {/* img */}
                                    <img src="theme/assets/images/products/product-single-img-1.jpg" alt />
                                </div>
                            </div>
                            {/* product tools */}
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-lg-8 mt-6 mt-lg-0">
                                <a href="#!" className="mb-4 d-block">Tea &amp; Snacks</a>
                                <h2 className="mb-1 h1">Dhokla</h2>
                                <div className="mb-4">
                                    <small className="text-warning">
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-fill" />
                                        <i className="bi bi-star-half" />
                                    </small>
                                    <a href="#" className="ms-2">(30 reviews)</a>
                                </div>
                                <div className="fs-4">
                                    <span className="fw-bold text-dark">₹32</span>
                                    <span className="text-decoration-line-through text-muted">₹35</span>
                                    <span><small className="fs-6 ms-2 text-danger">26% Off</small></span>
                                </div>
                                <hr className="my-6" />
                                <div>
                                    {/* input */}
                                    {/* input */}
                                </div>
                                <div className="mt-3 row justify-content-start g-2 align-items-center">
                                    <div className="col-lg-4 col-md-5 col-6 d-grid">
                                        {/* button */}
                                        {/* btn */}
                                        <button type="button" className="btn btn-primary">
                                            <i className="feather-icon icon-shopping-bag me-2" />
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-6" />
                                <div>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>Product Code:</td>
                                                <td>FBB00255</td>
                                            </tr>
                                            <tr>
                                                <td>Stock:</td>
                                                <td>50</td>
                                            </tr>
                                            <tr>
                                                <td>Size:</td>
                                                <td>medium</td>
                                            </tr>
                                            <tr>
                                                <td>Weight</td>
                                                <td>500 grams</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-12">
                            <span className="fw-bold">Description</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum nobis, tempore ipsam cum perferendis. Quisquam explicabo ratione voluptas minus et sit, saepe repellat cumque eius vero consequuntur unde laudantium aut recusandae harum quaerat nam, dolore suscipit provident labore beatae aliquid iusto. Distinctio ratione dolorum consequuntur neque odio, alias doloribus!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>You may also like this</h3>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6 mb-3">
                        {/* col */}
                        <div className="col">
                            {/* card */}
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
            </main>
            <Footer />
        </>);
    }
}
export default SingleProduct