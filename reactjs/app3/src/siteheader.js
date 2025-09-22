import React from "react"
export default class SiteHeader extends React.Component {
    render() {
        return (<>
            <div className="container-fluid px-5 py-4 d-none d-lg-block">
                <div className="row gx-0 align-items-center text-center">
                    <div className="col-md-4 col-lg-3 text-center text-lg-start">
                        <div className="d-inline-flex align-items-center">
                            <a href className="navbar-brand p-0">
                                <h1 className="display-5 text-primary m-0"><i className="fas fa-shopping-bag text-secondary me-2" />Electro</h1>
                                {/* <img src="img/logo.png" alt="Logo"> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bar p-0">
                <div className="row gx-0 bg-primary px-5">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                            <a href className="navbar-brand d-block d-lg-none">
                                <h1 className="display-5 text-secondary m-0"><i className="fas fa-shopping-bag text-white me-2" />My
                                    Shop</h1>
                                {/* <img src="img/logo.png" alt="Logo"> */}
                            </a>
                            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars fa-1x" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <a href="site_index.html" className="nav-item nav-link">Home</a>
                                    <a href="site_shop.html" className="nav-item nav-link">Shop</a>
                                    <a href="site_cart.html" className="nav-item nav-link">Cart</a>
                                    <a href="site_wishlist.html" className="nav-item nav-link">Wishlist</a>
                                    <a href="site_cheackout.html" className="nav-item nav-link">Checkout</a>
                                    <a href="site_register.html" className="nav-item nav-link">Register</a>
                                    <a href="site_login.html" className="nav-item nav-link">Login</a>
                                    <a href="site_change_password.html" className="nav-item nav-link">Change Password</a>
                                    <a href="site_forgot_password.html" className="nav-item nav-link">Forgot Password</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Page Heading</h1>
            </div></>)
    }
}