import React from "react"
export default class SiteFooter extends React.Component {
    render() {
        return (<div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2" />My Shop</a>, All right
                            reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-white">
                        Designed By <a className="border-bottom text-white" href="#">frontend31</a>.
                        Distributed By <a className="border-bottom text-white" href="#">the easylearn </a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}