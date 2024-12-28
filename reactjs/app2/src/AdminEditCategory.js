import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
import { useEffect, useState } from "react";
export default function AdminEditCategory() {
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
                <div id="kt_app_sidebar" className="app-sidebar  flex-column " data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                    {/*begin::Logo*/}
                    <AdminSideBar />
                    {/*end::Logo*/}
                    {/*begin::sidebar menu*/}
                    <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                        <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                            <div id="kt_app_sidebar_menu_scroll" className="hover-scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                                {/*begin::Menu*/}
                                <div className="
                                menu 
                                menu-column 
                                menu-rounded 
                                menu-sub-indention       
                                fw-semibold  
                            " id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                    <div className="menu-item menu-accordion">
                                        <a href="#" className="menu-link text-white">Sample Link</a>
                                    </div>
                                </div>
                                {/*end::Menu*/}
                            </div>
                        </div>
                    </div>
                    {/*end::sidebar menu*/}
                </div>
                {/*end::Sidebar*/}
                {/*begin::Main*/}
                <div className="app-main" id="kt_app_main">
                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow">
                                    <div className="card-header p-5 text-bg-primary">
                                        <h1 className="text-white">Category (Edit)</h1>
                                        <a href="admin_category.html" className="btn btn-light">Back</a>
                                    </div>
                                </div>
                                <div className="card-body p-10">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <form action>
                                                <div className="mb-5">
                                                    <label htmlFor="title" className="form-label">Edit Title</label>
                                                    <input type="text" name="title" id="title" className="form-control" required />
                                                </div>
                                                <div className="mb-5">
                                                    <label htmlFor="photo" className="form-label">Change Photo</label>
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
                                        <div className="col-lg-4 text-center">
                                            <b>Current Photo</b>
                                            <img src="https://picsum.photos/300?random=1" alt className="img-fluid img-thumbnail shadow" />
                                        </div>
                                    </div>
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