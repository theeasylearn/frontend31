import React from 'react'
import Header from './header';
import Footer from './footer';
class Cart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Header />
            <main>
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* card */}
                                <div className="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 className="fw-bold">Shop Cart</h1>
                                        <p className="mb-0">Shopping in 382480</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {/* alert */}
                                    <div className="alert alert-danger p-2" role="alert">
                                        You’ve got FREE delivery. Start
                                        <a href="#!" className="alert-link">checkout now!</a>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {/* list group */}
                                        <li className="list-group-item py-3 ps-0 border-top">
                                            {/* row */}
                                            <div className="row align-items-center">
                                                <div className="col-6 col-md-6 col-lg-7">
                                                    <div className="d-flex">
                                                        <img src="theme/assets/images/products/product-img-1.jpg" alt="Ecommerce" className="icon-shape icon-xxl" />
                                                        <div className="ms-3">
                                                            {/* title */}
                                                            <a href="shop-single.html" className="text-inherit">
                                                                <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                                            </a>
                                                            {/* text */}
                                                            <div className="mt-2 small lh-1">
                                                                <a href="#!" className="text-decoration-none text-inherit">
                                                                    <span className="me-1 align-text-bottom">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                                                                            <polyline points="3 6 5 6 21 6" />
                                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                            <line x1={10} y1={11} x2={10} y2={17} />
                                                                            <line x1={14} y1={11} x2={14} y2={17} />
                                                                        </svg>
                                                                    </span>
                                                                    <span className="text-muted">Remove</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* input group */}
                                                <div className="col-4 col-md-4 col-lg-3">
                                                    {/* input */}
                                                    {/* input */}
                                                </div>
                                                {/* price */}
                                                <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                    <span className="fw-bold">₹5.00</span>
                                                </div>
                                            </div>
                                        </li>
                                        {/* list group */}
                                    </ul>
                                    {/* btn */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <a href="#!" className="btn btn-primary">Continue Shopping</a>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item Subtotal</div>
                                                    </div>
                                                    <span>₹70.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>₹3.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">₹67.00</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <button className="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit">
                                                Go to Checkout
                                                <span className="fw-bold">₹67.00</span>
                                            </button>
                                        </div>
                                        {/* text */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>

            <Footer />
        </>);
    }
}
export default Cart;