import { useEffect, useState } from "react";
import axios from "axios";
import getBase,{COOKIE_FILE} from "./common";
import {useCookies} from 'react-cookie'; //hook
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { showError, showMessage } from "./message";
export default function AdminLogin() {
  //create state variable for each and every input
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var navigator = useNavigate();
  var [cookies,setCookie,removeCookie] = useCookies(COOKIE_FILE);
  var doLogin = (e) => {
    console.log(email, password);
    e.preventDefault();
    //https://theeasylearnacademy.com/shop/ws/login.php?email=ankit@gmail.com&password=123123
    var apiAddress = getBase() + 'admin_login.php';
    var form = new FormData();

    form.append('email', email);
    form.append('password', password);
    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
    }).then((response) => {
      console.log(response.data);
      const error = response.data[0].error; // Check for error in response
      if (error !== 'no') {
        alert(error);
      } else {
        const success = response.data[1].success;
        const message = response.data[2].success;
        if (success === 'no') {
          showError('invalid login attempt');
        } else {
          showMessage('login successful');
          var adminid = response.data[3]['id'];
          //store adminid into cookies
          setCookie('adminid',adminid);
          console.log('admin id ',cookies['adminid']);
          setTimeout(() => {
            navigator('/dashboard');
          }, 3000);
        
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK') {
        alert('It seems you are offline. Check your internet connection.');
      }
      else
        alert('oops something went wrong please contact Administrator');
    })
  }
  return (<div className="container">
    <ToastContainer />
    <div className="row mt-20">
      <div className="col-lg-6 offset-3">
        <div className="card shadow">
          <div className="card-body">
            <form className="form w-100" id="kt_sign_in_form" data-kt-redirect-url="/keen/demo1/index.html" action="#" onSubmit={doLogin}>
              {/*begin::Heading*/}
              <div className="text-center mb-11">
                {/*begin::Title*/}
                <h1 className="text-gray-900 fw-bolder mb-3">
                  Administrator Login
                </h1>
              </div>
              <div className="fv-row mb-8">
                {/*begin::Email*/}
                <input type="email" placeholder="Email" name="email" id="email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off" className="form-control bg-transparent" required />
                {/*end::Email*/}
              </div>
              {/*end::Input group-*/}
              <div className="fv-row mb-3">
                {/*begin::Password*/}
                <input type="password" placeholder="Password" name="password" id="password" autoComplete="off" className="form-control bg-transparent" required
                  onChange={(e) => setPassword(e.target.value)} value={password} />
                {/*end::Password*/}
              </div>
              {/*end::Input group-*/}
              {/*begin::Wrapper*/}
              <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />
                <a href="admin_forgot_password.html" className="link-primary">
                  Forgot Password ?
                </a>
              </div>
              {/*end::Wrapper*/}
              {/*begin::Submit button*/}
              <div className="d-grid mb-10">
                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                  {/*begin::Indicator label*/}
                  <span className="indicator-label">
                    Sign In</span>
                  {/*end::Indicator label*/}
                  {/*begin::Indicator progress*/}
                  <span className="indicator-progress">
                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                  {/*end::Indicator progress*/} </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}