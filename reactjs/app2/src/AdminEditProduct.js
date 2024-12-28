import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
import { useEffect, useState } from "react";

export default function AdminEditProduct() {
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
                                        <h1 className="text-white">Product (Edit)</h1>
                                        <a href="admin_product.html" className="btn btn-light">Back</a>
                                    </div>
                                    <div className="card-body p-10">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <form action>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating">
                                                                <select className="form-select" id="categoryid" name="categoryid" aria-label="Floating label select example">
                                                                    <option selected value>Select</option>
                                                                    <option value={1}>One</option>
                                                                    <option value={2}>Two</option>
                                                                    <option value={3}>Three</option>
                                                                </select>
                                                                <label htmlFor="floatingSelect">Change Product Category</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="title" name="title" placeholder="title" />
                                                                <label htmlFor="title">Edit Product Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="number" className="form-control" id="price" name="price" placeholder="Price" />
                                                                <label htmlFor="price">Edit Price</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Product quantity" />
                                                                <label htmlFor="floatingInput">Edit Stock</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight" />
                                                                <label htmlFor="weight">Edit Weight</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="size" name="size" placeholder="Size" />
                                                                <label htmlFor="size">Edit Size</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                                                            <div className="form-floating">
                                                                <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail" defaultValue={""} />
                                                                <label htmlFor="floatingTextarea">Edit Detail</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <p className="fw-bold">is this category Live?</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <div className="form-check mb-4">
                                                                <input name="islive" type="radio" className="form-check-input" defaultValue={1} />
                                                                <label htmlFor className="form-check-label">Yes</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input name="islive" type="radio" className="form-check-input" defaultValue={0} />
                                                                <label htmlFor className="form-check-label">No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <label htmlFor="photo" className="form-label">Change Product Photo</label>
                                                            <input className="form-control" type="file" id="photo" name="photo" />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-5 pt-3 d-flex  justify-content-end">
                                                            <input type="submit" defaultValue="Save changes" className="btn btn-primary" />&nbsp;
                                                            <input type="reset" defaultValue="Clear all" className="btn btn-dark" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-3">
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
            </div>
            {/*end:::Main*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    );
}