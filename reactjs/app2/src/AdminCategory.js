import { useEffect, useState } from "react";
import AdminSideBar from "./AdminSideBar";
import getBase from "./common";
import VerifyLogin from "./authenticate";
export default function AdminCategory() {
    //create state array
    let [categories, SetCategories] = useState([]);
    VerifyLogin();

        
    let fetchCategory = function () {
        let apiAddress = getBase() + "category.php";
        if (categories.length === 0) {
            fetch(apiAddress).then((msg) => msg.json()).then((response) => {
                //console.log(response); //array of object (JSON)
                /*
                 [
                     {"error":"no"},
                     {"total":6},
                     {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
                     {"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
                     {"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"},
                     {"id":"4","title":"Cookies & waffers","photo":"Cookies.jpg","islive":"1","isdeleted":"0"},{"id":"5","title":"Washing Powders","photo":"washing_powders.jpg","islive":"1","isdeleted":"0"},
                     {"id":"6","title":"shampoo","photo":"shampoo.jpg","islive":"1","isdeleted":"0"}
                ]
                */
                let error = response[0]['error']; //copy error key value into error
                if (error !== 'no') {
                    alert(error);
                }
                else {
                    let total = response[1]['total'];
                    if (total === 0) {
                        alert('no category found');
                    }
                    else {
                        //delete 2 objects 
                        response.splice(0, 2);
                        console.log(response);
                        SetCategories(response);
                    }
                }
            });
        }

    }

    useEffect(() => {
        fetchCategory();
    })
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
                                        <h1 className="text-white">Category</h1>
                                        <a href="admin_add_category.html" className="btn btn-light">Add Category</a>
                                    </div>
                                    <div className="card-body p-10">
                                        <table className="table table-striped table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Sr No</th>
                                                    <th>Title</th>
                                                    <th>Photo</th>
                                                    <th>is Live</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {categories.map((item) => {
                                                    return (<tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.title}</td>
                                                        <td>
                                                            <img src={"http://www.theeasylearnacademy.com/shop/images/category/" + item.photo} className="img-fluid" />
                                                        </td>
                                                        <td>
                                                            {(item.islive==='1')?'Yes':'No'}
                                                        </td>
                                                        <td width="20%">
                                                            <a href="admin_edit_category.html" className="btn btn-warning">Edit</a>
                                                            <a href="admin_edit_category.html" className="btn btn-secondary">Delete</a>
                                                        </td>
                                                    </tr>)
                                                })}
                                            </tbody>
                                        </table>
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