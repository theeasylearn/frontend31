import React from 'react'
import Header from './header';
import Footer from './footer';
/*
    api name : change_password.php
    //input  input : id (id means userid),password,newpassword (required) 
      output :
        [{"error":"input is missing"}] 
        [{"error":"no"},{"success":"no","message":"invalid change password attempt"}]
        [{"error":"no"},{"success":"yes","message":"password changed"}]
*/
class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Header />
            <main>
                {/* section */}
                <section className="my-lg-14 my-8">
                    <div className="container">
                        {/* row */}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img src="theme/assets/images/svg-graphics/signin-g.svg" alt className="img-fluid" />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Change Password</h1>
                                </div>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        {/* row */}
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="password" name="password" placeholder="*****" required />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                    <div className="invalid-feedback">Please enter current password.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <label htmlFor="newpassword" className="form-label visually-hidden">New Password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="newpassword" name="newpassword" placeholder="*****" required />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                    <div className="invalid-feedback">Please enter new password.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <label htmlFor="newpassword2" className="form-label visually-hidden">Confirm new password</label>
                                                <div className="password-field position-relative">
                                                    <input type="password" className="form-control fakePassword" id="newpassword2" name="newpassword2" placeholder="*****" required />
                                                    <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                                    <div className="invalid-feedback">Please re-enter new password.</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* btn */}
                                        <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Save changes</button></div>
                                        {/* link */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>);
    }
}
export default ChangePassword;