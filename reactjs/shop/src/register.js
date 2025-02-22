import { Component } from "react";
import Footer from "./footer";
import WithHook from "./hoc";
import axios from 'axios';
import getBase from "./common";
import { showError, showNetworkError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);
    //create state variables
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
    }
  }
  updateValue = (event) => {
    // console.log(event.target.name + " " + event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
    //  console.log(this.state);
  }
  registerUser = (e) => {
    e.preventDefault();
    console.log(this.state);
    let apiAddress = getBase() + "register.php";
    console.log(apiAddress);
    let form = new FormData();
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    form.append("mobile", this.state.mobile);
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
          showMessage(message);
          setTimeout(() => {
             this.props.navigate("/login");
          }, 5000);
        }
      }
    }).catch((error) => showNetworkError(error));
  }
  render() {
    return (<div>
      <div className="border-bottom shadow-sm">
        <nav className="navbar navbar-light py-2">
          <div className="container justify-content-center justify-content-lg-between">
            <ToastContainer />
            <a className="navbar-brand" href="../index.html">
              <img src="theme/assets/images/logo/freshcart-logo.svg" alt className="d-inline-block align-text-top" />
            </a>
            <span className="navbar-text">
              Already have an account?
              <a href="user-login.html">Log in</a>
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
                <form className="needs-validation" onSubmit={this.registerUser}>
                  <div className="row g-3">
                    {/* col */}
                    <div className="col-12">
                      {/* input */}
                      <label htmlFor="email" className="form-label visually-hidden">Email address</label>
                      <input type="email" className="form-control" id="email" placeholder="Email" required
                        value={this.state.email} onChange={(e) => this.updateValue(e)} />
                      <div className="invalid-feedback">Please enter email.</div>
                    </div>
                    <div className="col-12">
                      <div className="password-field position-relative">
                        <label htmlFor="password" className="form-label visually-hidden">Password</label>
                        <div className="password-field position-relative">
                          <input type="password" className="form-control fakePassword" id="password" placeholder="Password" required value={this.state.password} onChange={(e) => this.updateValue(e)} />
                          <span><i className="bi bi-eye-slash passwordToggler" /></span>
                          <div className="invalid-feedback">Please enter password.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="password-field position-relative">
                        <label htmlFor="confirmPassword" className="form-label visually-hidden">Password</label>
                        <div className="password-field position-relative">
                          <input type="password" className="form-control fakePassword" id="confirmPassword" placeholder="Confirm Password" required
                            value={this.state.confirmPassword} onChange={(e) => this.updateValue(e)} />
                          <span><i className="bi bi-eye-slash passwordToggler" /></span>
                          <div className="invalid-feedback">Please enter password.</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      {/* input */}
                      <label htmlFor="mobile" className="form-label visually-hidden">Mobile</label>
                      <input type="tel" className="form-control" id="mobile" placeholder="Mobile" required
                        value={this.state.mobile} onChange={(e) => this.updateValue(e)} />
                      <div className="invalid-feedback">Please enter Mobile.</div>
                    </div>
                    {/* btn */}
                    <div className="col-12 d-grid">
                      <button type="submit" className="btn btn-primary">Register</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    );
  }
}
export default WithHook(Register)