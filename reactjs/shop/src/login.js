import React from "react";
import Footer from "./footer";
import WithHook from "./hoc";
import axios from 'axios';
import getBase from "./common";
import { showError, showNetworkError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import { withCookies } from "react-cookie";

class Login extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }

    updateValue = (event) => {
      // console.log(event.target.name + " " + event.target.value);
      this.setState({
        [event.target.id]: event.target.value
      });
      //  console.log(this.state);
    }
    
    doLogin = (e) => {
        console.log(this.state);
        e.preventDefault();
        let apiAddress = getBase() + "login.php";
        let form = new FormData();
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        axios({
          method: 'post',
          responseType: 'json',
          url: apiAddress,
          data: form
        }).then((response) => {
          console.log(response.data);
          let error = response.data[0]['error'];
          if (error !== 'no')
            showError(error);
          else {
            let success = response.data[1]['success'];
            let message = response.data[2]['message'];
            if (success === 'no')
              showError(message);
            else {
              let userid = response.data[3]['id'];
              console.log(userid);
              showMessage(message);
              this.props.setCookie('userid',userid);
              console.log(this.props.cookies);
              setTimeout(() => {
                 this.props.navigate("/");
              }, 5000);
            }
          }
        }).catch((error) => showNetworkError(error));
    }
    render()
    {
        return (<>
            <div className="border-bottom shadow-sm">
              <nav className="navbar navbar-light py-2">
                <div className="container justify-content-center justify-content-lg-between">
                  <ToastContainer />
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
                        <h1 className="mb-1 h2 fw-bold">Sign in to myshop</h1>
                      </div>
                      <form className="needs-validation" onSubmit={this.doLogin}>
                        <div className="row g-3">
                          {/* row */}
                          <div className="col-12">
                            {/* input */}
                            <label htmlFor="email" className="form-label visually-hidden">Email
                              address</label>
                            <input 
                            type="email" 
                            className="form-control" 
                            id="email" value={this.state.email} onChange={(e) => this.updateValue(e)}
                            placeholder="Email" required />
                            <div className="invalid-feedback">Please enter name.</div>
                          </div>
                          <div className="col-12">
                            {/* input */}
                            <div className="password-field position-relative">
                              <label htmlFor="password" className="form-label visually-hidden">Password</label>
                              <div className="password-field position-relative">
                                <input 
                                type="password" 
                                className="form-control fakePassword" 
                                id="password" 
                                value={this.state.password} onChange={(e) => this.updateValue(e)}
                                placeholder="password" required />
                                <span><i className="bi bi-eye-slash passwordToggler" /></span>
                                <div className="invalid-feedback">Please enter password.</div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            {/* form check */}
                            <div>
                              Forgot password?
                              <a href="user-forgot-password.html">Reset It</a>
                            </div>
                          </div>
                          {/* btn */}
                          <div className="col-12 d-grid"><button type="submit" className="btn btn-primary">Sign
                              In</button></div>
                          {/* link */}
                          <div>
                            Don’t have an account?
                            <a href="user-register.html">Sign Up</a>
                          </div>
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
export default WithHook(Login);