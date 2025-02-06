import { useNavigate, useParams } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
import { useEffect, useState } from "react";
import getBase, { getImageBase } from "./common";
import axios from "axios";
import { showError, ERROR_MESSAGE, showMessage } from "./message";
import { ToastContainer } from "react-toastify";

export default function AdminEditProduct() {
    VerifyLogin();
    //create state array
    let [categoryId, setCategoryId] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState(0);
    let [stock, setStock] = useState(0);
    let [weight, setWeight] = useState(0);
    let [size, setSize] = useState("");
    let [remarks, setRemarks] = useState("");
    let [photo, setPhoto] = useState(null); //used to store current photo (photo selected by user)
    let [oldPhoto, setOldPhoto] = useState(null); ////used to store existing(old) photo
    let [islive, setIsLive] = useState(false);
    let [isFetched, setIsFetched] = useState(false);
    let [categories, SetCategories] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
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

    let fetchProduct = function () {

        let apiAddress = getBase() + "product.php?productid=" + id;
        console.log(apiAddress);
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
                    setCategoryId(response.data[0]['categoryid']);
                    setIsLive(response.data[0]['islive']);
                    setName(response.data[0]['title']);
                    setPhoto(response.data[0]['photo']);
                    setOldPhoto(response.data[0]['photo']);
                    setPrice(response.data[0]['price']);
                    setRemarks(response.data[0]['detail']);
                    setSize(response.data[0]['size']);
                    setStock(response.data[0]['stock']);
                    setWeight(response.data[0]['weight']);
                    setIsFetched(true);

                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError(ERROR_MESSAGE);
        });

    }
    useEffect(() => {
        if (isFetched === false) {
            fetchCategory();
            fetchProduct();
        }
    })
    let saveProduct = function (e) {
        console.log(categoryId, name, price, stock, weight, remarks, size, islive, photo);
        e.preventDefault();
        let apiAddress = getBase() + "update_product.php";
        let form = new FormData();
        form.append('name', name);
        form.append('categoryid', categoryId);
        form.append('price', price);
        form.append('stock', stock);
        form.append('weight', weight);
        form.append('size', size);
        form.append('detail', remarks);
        form.append('islive', islive);
        form.append('photo', photo);
        form.append('productid', id);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                    showError(message);
                else 
                {
                    showMessage(message);
                    setTimeout(()=>{
                        navigate("/product");
                    },2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'NETWORK_ERROR')
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
                                        <h1 className="text-white">Product (Edit)</h1>
                                        <a href="admin_product.html" className="btn btn-light">Back</a>
                                    </div>
                                    <div className="card-body p-10">
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <form action onSubmit={saveProduct}>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating">
                                                                <select className="form-select" id="categoryid" name="categoryid" aria-label="Floating label select example">
                                                                    <option selected value>Select</option>
                                                                    {categories.map((item) => {
                                                                        if (item.id === categoryId)
                                                                            return (<option value={item.id} selected>{item.title}</option>);
                                                                        else
                                                                            return (<option value={item.id}>{item.title}</option>);
                                                                    })}
                                                                </select>
                                                                <label htmlFor="floatingSelect">Change Product Category</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="title" name="title" placeholder="title"
                                                                    value={name} onChange={(e) => setName(e.target.value)} />
                                                                <label htmlFor="title">Edit Product Name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="number" className="form-control" id="price" name="price" placeholder="Price"
                                                                    value={price}
                                                                    onChange={(e) => setPrice(e.target.value)} />
                                                                <label htmlFor="price">Edit Price</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="number" className="form-control" id="quantity" name="quantity" placeholder="Product quantity"
                                                                    value={stock}
                                                                    onChange={(e) => setStock(e.target.value)} />
                                                                <label htmlFor="floatingInput">Edit Stock</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="weight" name="weight" placeholder="Weight"
                                                                    value={weight}
                                                                    onChange={(e) => setWeight(e.target.value)} />
                                                                <label htmlFor="weight">Edit Weight</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                            <div className="form-floating mb-3">
                                                                <input type="text" className="form-control" id="size" name="size" placeholder="Size"
                                                                    value={size}
                                                                    onChange={(e) => setSize(e.target.value)} />
                                                                <label htmlFor="size">Edit Size</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                                                            <div className="form-floating">
                                                                <textarea className="form-control" placeholder="Product description" id="detail" style={{ "height": "100px" }} name="detail"
                                                                    defaultValue={remarks}
                                                                    onChange={(e) => setRemarks(e.target.value)}></textarea>
                                                                <label htmlFor="floatingTextarea">Edit Detail</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                            <p className="fw-bold">is this category Live?</p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            <div className="form-check mb-4">
                                                                <input name="islive" type="radio" className="form-check-input" value={1} checked={(islive === '1')} onChange={(e) => setIsLive(e.target.value)} />
                                                                <label htmlFor className="form-check-label">Yes</label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input name="islive" type="radio" className="form-check-input" value={0} checked={(islive === '0')} onChange={(e) => setIsLive(e.target.value)} />
                                                                <label htmlFor className="form-check-label">No</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <label htmlFor="photo" className="form-label">Change Product Photo</label>
                                                            <input className="form-control" type="file" id="photo" name="photo" onChange={(e) => setPhoto(e.target.files[0])} />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-5 pt-3 d-flex  justify-content-end">
                                                            <input type="submit" value="Save changes" className="btn btn-primary" />&nbsp;
                                                            <input type="reset" defaultValue="Clear all" className="btn btn-dark" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-3">
                                                <b>Current Photo</b>
                                                <img src={getImageBase() + "/product/" + oldPhoto} alt className="img-fluid img-thumbnail shadow" />
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