import AdminSideBar from "./AdminSideBar";
import VerifyLogin from "./authenticate";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { showError, showMessage } from "./message";
import axios from "axios";
import {useCookies} from 'react-cookie'; //hook
import { useNavigate } from "react-router-dom";
import getBase,{COOKIE_FILE} from "./common";

export default function AdminChangePassword() {
    VerifyLogin();
    let [password, setPassword] = useState('');
    let [newPassword, setNewPassword] = useState('');
    let [confirmNewPassword, setConfirmNewPassword] = useState('');
    var navigator = useNavigate();
    var [cookies, setCookie, removeCookie] = useCookies(COOKIE_FILE);

    let doChangePassword = function (event) {
        event.preventDefault();
        if (newPassword !== confirmNewPassword) {
            showError('new password and confirm new password mismatch');
        }
        else {
            //api call 
            http://theeasylearnacademy.com/shop/ws/admin_change_password.php?id=1&password=123123&newpassword=112233
            var apiAddress = getBase() + "admin_change_password.php";
            var form = new FormData();
            form.append('id',cookies['adminid']);
            form.append('password', password);
            form.append('newpassword', newPassword);
            axios({
                method: 'post',
                responseType: 'json',
                data: form,
                url: apiAddress
            }).then((response) => {
                console.log(response.data);
                var error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else {
                    var success = response.data[1]['success'];
                    var message = response.data[2]['message'];
                    if (success === 'no') {
                        showError(message);
                    }
                    else {
                        showMessage(message);
                        setTimeout(() => {
                            navigator("/logout");
                        },2000);
                    }

                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    showError('It seems you are offline. Check your internet connection.');
                }
                else
                    showError('oops something went wrong please contact Administrator');
            });

        }
    }
    return (<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
            {/*begin::Header*/}
            <ToastContainer />
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
                            <div className="col-lg-6 offset-3">
                                <div className="card shadow">
                                    <div className="card-header p-5 text-bg-primary">
                                        <h1 className="text-white">Change password</h1>
                                    </div>
                                    <div className="card-body p-10">
                                        <form action onSubmit={doChangePassword}>
                                            <div className="mb-5">
                                                <label htmlFor="password" className="form-label">Current password</label>
                                                <input type="password" name="password" id="password" className="form-control" required
                                                    value={password} onChange={(event) => setPassword(event.target.value)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="new_password" className="form-label">New password</label>
                                                <input type="password" name="password" id="password" className="form-control" required
                                                    value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="confirm_new_password" className="form-label">
                                                    Confirm new password
                                                </label>
                                                <input type="password" name="confirm_new_password" id="confirm_new_password" className="form-control"
                                                    value={confirmNewPassword} onChange={(event) => setConfirmNewPassword(event.target.value)} required />
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
            </div>
            {/*end:::Main*/}
        </div>
        {/*end::Wrapper*/}
    </div>
    );
}