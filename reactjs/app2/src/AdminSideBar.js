import { Link } from "react-router-dom"
export default function AdminSideBar()
{
    return ( <div id="kt_app_sidebar" className="app-sidebar  flex-column " data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
        {/*begin::Logo*/}
        <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
          {/*begin::Logo image*/}
          <a href="../../index.html">
            <img alt="Logo" src="../../assets/media/logos/default-dark.svg" className="h-30px app-sidebar-logo-default" />
          </a>
          {/*end::Logo image*/}
          {/*begin::Sidebar toggle*/}
          <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate " data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
            <i className="ki-duotone ki-double-left fs-2 rotate-180"><span className="path1" /><span className="path2" /></i>
          </div>
          {/*end::Sidebar toggle*/}
        </div>
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
                <div className="menu-item">
                  <Link to="/dashboard" className="menu-link text-white">Dashboard</Link>
                </div>
                <div className="menu-item">
                  <Link to="/category" className="menu-link text-white">Categories</Link>
                </div>
                <div className="menu-item">
                  <Link to="/product" className="menu-link text-white">products</Link>
                </div>
                <div className="menu-item">
                  <Link to="/orders" className="menu-link text-white">orders</Link>
                </div>
                <div className="menu-item">
                  <Link to="/users" className="menu-link text-white">users</Link>
                </div>
                <div className="menu-item">
                  <Link to="/change-password" className="menu-link text-white">Change password</Link>
                </div>
                <div className="menu-item">
                  <Link to="/logout" className="menu-link text-white">Logout</Link>
                </div>
                
              </div>
              {/*end::Menu*/}
            </div>
          </div>
        </div>
        {/*end::sidebar menu*/}
      </div>)
}