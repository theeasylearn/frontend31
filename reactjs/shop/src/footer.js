import React from "react";
class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<footer className="footer">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-center">
                  <span className="small text-muted">
                    © 2025
                    <span id="copyright">
                      -
                    </span>
                    MyShop eCommerce HTML Template. All rights reserved. Powered by
                    The easylearn academy
                    .
                  </span>
                </div>
              </div>
            </div>
          </footer>);
    }
}
export default Footer;