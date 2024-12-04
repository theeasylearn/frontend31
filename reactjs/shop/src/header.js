import React from "react";
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<div className="border-bottom">
            <div className="py-5">
              <div className="container">
                <div className="row w-100 align-items-center gx-lg-2 gx-0">
                  <div className="col-xxl-2 col-lg-3 col-md-6 col-5">
                    <a className="navbar-brand d-none d-lg-block" href="index.html">
                      <img src="theme/assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                    </a>
                    <div className="d-flex justify-content-between w-100 d-lg-none">
                      <a className="navbar-brand" href="index.html">
                        <img src="theme/assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-2 col-xxl-2 text-end col-md-6 col-7">
                    <div className="list-inline">
                      <div className="list-inline-item d-inline-block d-lg-none">
                        {/* Button */}
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4" aria-label="Offcanvas navbar large">
              <div className="container">
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="navbar-default" aria-labelledby="navbar-defaultLabel">
                  <div className="offcanvas-header pb-1">
                    <a href="index.html"><img src="assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body">
                    <div>
                      <ul className="navbar-nav align-items-center">
                        <li className="nav-item w-100 w-lg-auto">
                          <a className="nav-link" href="dashboard/index.html">Dashboard</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>);
    }
}
export default Header;