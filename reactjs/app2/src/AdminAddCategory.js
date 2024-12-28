import { use, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
export default function AdminAddCategory()
{
  VerifyLogin();

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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card shadow">
                      <div className="card-header p-5 text-bg-primary">
                        <h1 className="text-white">Category (Add new)</h1>
                        <a href="admin_category.html" className="btn btn-light">Back</a>
                      </div>
                    </div>
                    <div className="card-body p-10">
                      <form action>
                        <div className="mb-5">
                          <label htmlFor="title" className="form-label">Title</label>
                          <input type="text" name="title" id="title" className="form-control" required />
                        </div>
                        <div className="mb-5">
                          <label htmlFor="photo" className="form-label">Select Photo</label>
                          <input type="file" name="photo" id="photo" className="form-control" required accept="image/*" />
                        </div>
                        <span className="my-5 fw-bold">is this category Live?</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="form-check-inline mb-5">
                          <input name="islive" type="radio" className="form-check-input" defaultValue={1} />
                          <label htmlFor className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check-inline mb-5">
                          <input name="islive" type="radio" className="form-check-input" defaultValue={0} />
                          <label htmlFor className="form-check-label">No</label>
                        </div>
                        <div className="d-flex justify-content-end">
                          <input type="submit" defaultValue="Save changes" className="btn btn-primary" />&nbsp;
                          <input type="reset" defaultValue="Clear all" className="btn btn-dark" />
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