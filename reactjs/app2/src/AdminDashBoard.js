import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import getBase from "./common";

export default function AdminDashBoard() {
    let [summery, setSummery] = useState(null); //state array
    useEffect(() => {
        let apiAddress = getBase() + "summery.php";
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        })
            .then((response) => {
                console.log(response.data);
                setSummery(response.data); // Update state with response data
                const error = response.data[0].error; // Check for error in response
                if (error !== 'no') {
                    alert(error);
                }
                else {
                    setSummery(response.data[1]);
                }
            })
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    alert('It seems you are offline. Check your internet connection.');
                } else {
                    alert('Oops, something went wrong. Please contact the Administrator.');
                }
            });
    }, [summery]); // The dependency array is added here
    if (summery != null)
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
                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-12 mb-10">
                                <h1>Summery</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-danger">
                                    <div className="card-body">
                                        <h2 className="text-white">Products</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['products']} </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-info">
                                    <div className="card-body">
                                        <h2 className="text-white">Categories</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['categories']}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-warning">
                                    <div className="card-body">
                                        <h2 className="text-white">Users</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['users']}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-success">
                                    <div className="card-body">
                                        <h2 className="text-white">Total Order</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['orders']}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-danger">
                                    <div className="card-body">
                                        <h2 className="text-white">Today Orders</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['daily']}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-info">
                                    <div className="card-body">
                                        <h2 className="text-white">Weekly order</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['weekly']}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-warning">
                                    <div className="card-body">
                                        <h2 className="text-white">Monthly order</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['monthly']}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="card shadow text-bg-success">
                                    <div className="card-body">
                                        <h2 className="text-white">Yearly order</h2>
                                        <hr />
                                        <h4 className="text-white">{summery['yearly']}</h4>
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