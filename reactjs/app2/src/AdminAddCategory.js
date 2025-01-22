import { useEffect, useState} from "react";
import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
import { Link, useNavigate } from "react-router-dom";
import getBase from "./common";
import axios from "axios";
import { showError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
export default function AdminAddCategory()
{
    VerifyLogin();
    //create state variable
    let [title,setTitle] = useState('');
    let [photo,setPhoto] = useState('');
    let[islive,setIsLive] = useState('');
    let navigator = useNavigate('');

    let addCategory = (e) =>{
      e.preventDefault();
      console.log(title,islive,photo);
      //let us call api.
      let apiAddress = getBase() + "insert_category.php";
      let form = new FormData();
      form.append('title',title);
      form.append('photo',photo);
      form.append('islive',islive);

      axios({
        method:'post',
        url:apiAddress,
        responseType:'json',
        data:form
      }).then((response) => {
          console.log(response.data);
          let error = response.data[0]['error'];
          if(error !== 'no')
          {
              showError(error);
          }  
          else 
          {
              let success = response.data[1]['succcess'];
              let message = response.data[2]['message'];
              if(success === 'no')
                showError(message);
              else 
              {
                showMessage(message);
                //display another view
                setTimeout(() => {
                  navigator("/category");
                },2000);
              }
          }
      }).catch((error) => {
          if(error.code === 'ERR_NETWORK')
            showError('oops, it seems either your offline or server is not available, please try after sometime');
      })
    }
    return (<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
          {/*begin::Header*/}
          <div id="kt_app_header" className="app-header ">
            <div className="app-container  container-fluid d-flex align-items-stretch justify-content-between " id="kt_app_header_container">
              {/*begin::sidebar mobile toggle*/}
              <div className="d-flex align-items-center d-lg-none ms-n3 me-2" title="Show sidebar menu">
                <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                  <i className="ki-duotone ki-abstract-14 fs-1"><span className="path1" /><span className="path2" /></i>
                </div>
              </div>
              {/*end::sidebar mobile toggle*/}
              {/*begin::Mobile logo*/}
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="../../index.html" className="d-lg-none">
                  <img alt="Logo" src="../../assets/media/logos/default-small.svg" className="theme-light-show h-30px" />
                  <img alt="Logo" src="../../assets/media/logos/default-small-dark.svg" className="theme-dark-show h-30px" />
                </a>
              </div>
              {/*end::Mobile logo*/}
            </div>
            {/*end::Header container*/}
          </div>
          {/*end::Header*/}
          {/*begin::Wrapper*/}
          <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
            <AdminSideBar />
            {/*begin::Main*/}
            <div className="app-main" id="kt_app_main">
              <div className="container mt-10">
                <ToastContainer />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card shadow">
                      <div className="card-header p-5 text-bg-primary">
                        <h1 className="text-white">Category (Add new)</h1>
                        <Link to="/category" className="btn btn-light">Back</Link>
                      </div>
                    </div>
                    <div className="card-body p-10">
                      <form action onSubmit={addCategory} method="post">
                        <div className="mb-5">
                          <label htmlFor="title" className="form-label">Title</label>
                          <input type="text" name="title" id="title" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="photo" className="form-label">Select Photo</label>
                          <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" 
                          onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                        <span className="my-5 fw-bold">is this category Live?</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check-inline mb-5">
                          <input id="yes" name="islive" type="radio" className="form-check-input" 
                          value={1} onChange={(e) => setIsLive(e.target.value)} required />
                          <label htmlFor="yes" className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check-inline mb-5">
                          <input id="no" name="islive" type="radio" className="form-check-input" 
                          value={0} onChange={(e) => setIsLive(e.target.value)} required />
                          <label htmlFor='no' className="form-check-label">No</label>
                        </div>
                        <div className="d-flex justify-content-end">
                          <input type="submit" value="Save changes" className="btn btn-primary" />&nbsp;
                          <input type="reset" value="Clear all" className="btn btn-dark" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end:::Main*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      );
}