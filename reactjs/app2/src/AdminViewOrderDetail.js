import AdminSideBar from "./AdminSideBar";
export default function AdminViewOrderDetail() {
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
                                        <h1 className="text-white">Bill</h1>
                                        <span>
                                            <a href="admin_order.html" className="btn btn-light">Back</a> &nbsp;
                                            <a href="admin_order_print.html" className="btn btn-dark">Print</a>
                                        </span>
                                    </div>
                                    <div className="card-body p-10">
                                        <table className="table table-sm table-striped table-striped-columns table-bordered">
                                            <tbody><tr>
                                                <td width="25%">Id</td>
                                                <td width="25%" />
                                                <td width="25%">Name</td>
                                                <td width="25%" />
                                            </tr>
                                                <tr>
                                                    <td width="25%">Date</td>
                                                    <td width="25%" />
                                                    <td width="25%">Address 1</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Amount</td>
                                                    <td width="25%" />
                                                    <td width="25%">Address 2</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Status</td>
                                                    <td width="25%" />
                                                    <td width="25%">City</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Payment Mode</td>
                                                    <td width="25%" />
                                                    <td width="25%">Pincode</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Payment Status</td>
                                                    <td width="25%" />
                                                    <td width="25%">Mobile</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Remarks</td>
                                                    <td colSpan={3} />
                                                </tr>
                                            </tbody></table>
                                        <h4 className="my-3">Products</h4>
                                        <table className="table table-sm table-striped table-striped-columns table-bordered">
                                            <thead>
                                                <tr>
                                                    <th width="10%">Sr No</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>IPhone 16</td>
                                                    <td>1,25,000</td>
                                                    <td>2</td>
                                                    <td>2,50,000</td>
                                                </tr>
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