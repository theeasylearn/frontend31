import AdminSideBar from "./AdminSideBar";
import { useEffect, useState } from "react";
import getBase from "./common";
import VerifyLogin from "./authenticate";
import { Link } from "react-router-dom";
import axios from "axios";
import { showError, ERROR_MESSAGE, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
export default function AdminProduct() {
    //create state array
    let [products, setProducts] = useState([]);
    VerifyLogin();
    useEffect(() => {
        if (products.length === 0) {
            let apiAddress = getBase() + "product.php";
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error']; //WE HAVE CREATE ERROR VARAIABLE FROM 0TH OBJECT WHICH HAS KEY ERROR
                if (error !== 'no')
                    showError(error)
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showError('no products found');
                    else {
                        response.data.splice(0, 2); //delete 2 object from beginning
                        setProducts(response.data);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError(ERROR_MESSAGE);
            });
        }

    });
    let deleteProduct = function (productid) {

        let apiAddress = getBase() + "delete_product.php?id=" + productid;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let temp = products.filter((item) => {
                        if(item.id != productid)
                            return item;
                });
                setProducts(temp);
                showMessage(response.data[1]['message']);

            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError(ERROR_MESSAGE);
        })
    }

    let display = (item) => {
        return (<tr>
            <td>{item['id']}</td>
            <td>{item['title']}</td>
            <td>
                <img src={"http://theeasylearnacademy.com/shop/images/product/" + item['photo']} className="img-fluid" alt='image not available' />
            </td>
            <td>{item['price']}</td>
            <td>{item['stock']}</td>
            <td>
                {(item.islive === '1') ? "Yes" : "No"}
            </td>
            <td width="25%">
                <a href="admin_view_product.html" className="btn btn-primary">View</a>
                <Link to={"/product/edit/" + item.id} className="btn btn-warning">Edit</Link>
                <button type='button' className="btn btn-secondary"
                    onClick={() => deleteProduct(item.id)}>Delete</button>
            </td>
        </tr>);
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
                        <ToastContainer />
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card shadow">
                                    <div className="card-header p-5 text-bg-primary">
                                        <h1 className="text-white">Product</h1>
                                        <Link to="/product/add" className="btn btn-light">Add Product</Link>
                                    </div>
                                    <div className="card-body p-10">
                                        <table className="table table-striped table-hover table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Sr No</th>
                                                    <th>Title</th>
                                                    <th>Photo</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>is Live</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((item) => display(item))}
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