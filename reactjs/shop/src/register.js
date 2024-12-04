import React from "react";
import Footer from "./footer";
class Register extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
        <>
           <div className="border-bottom shadow-sm">
              <nav className="navbar navbar-light py-2">
                <div className="container justify-content-center justify-content-lg-between">
                  <a className="navbar-brand" href="../index.html">
                    <img src="theme/assets/images/logo/freshcart-logo.png" alt className="d-inline-block align-text-top" />
                  </a>
                  <span className="navbar-text">
                    Already have an account?
                    <a href="signin.html">Sign in</a>
                  </span>
                </div>
              </nav>
            </div>
          <main>
            {/* section */}
            <section className="my-lg-14 my-8 vh-100">
              {/* container */}
              <div className="container">
                {/* row */}
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                    {/* img */}
                    <img src="theme/assets/images/svg-graphics/signup-g.svg" alt className="img-fluid" />
                  </div>
                  {/* col */}
                  <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                    <div className="mb-lg-9 mb-5">
                      <h1 className="mb-1 h2 fw-bold">Sign Up</h1>
                      <p>Welcome to FreshCart! Enter your email to get started.</p>
                    </div>
                    {/* form */}
                    <form className="needs-validation" noValidate>
                      <div className="row g-3">
                        {/* col */}
                        <div className="col-12">
                          {/* input */}
                          <label htmlFor="email" className="form-label visually-hidden">Email address</label>
                          <input type="email" className="form-control" id="email" placeholder="Email" required />
                          <div className="invalid-feedback">Please enter email.</div>
                        </div>
                        <div className="col-12">
                          <div className="password-field position-relative">
                            <label htmlFor="password" className="form-label visually-hidden">Password</label>
                            <div className="password-field position-relative">
                              <input type="password" className="form-control fakePassword" id="password" placeholder="Password" required />
                              <span><i className="bi bi-eye-slash passwordToggler" /></span>
                              <div className="invalid-feedback">Please enter password.</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="password-field position-relative">
                            <label htmlFor="password2" className="form-label visually-hidden">Password</label>
                            <div className="password-field position-relative">
                              <input type="password" className="form-control fakePassword" id="password2" placeholder="Confirm Password" required />
                              <span><i className="bi bi-eye-slash passwordToggler" /></span>
                              <div className="invalid-feedback">Please enter password.</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          {/* input */}
                          <label htmlFor="mobile" className="form-label visually-hidden">Email address</label>
                          <input type="tel" className="form-control" id="mobile" placeholder="Email" required />
                          <div className="invalid-feedback">Please enter Mobile.</div>
                        </div>
                        {/* btn */}
                        <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Register</button></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
            </>
          );
    }
}
export default Register;