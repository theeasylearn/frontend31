import React from "react"
import SiteHeader from "./siteheader"
import SiteFooter from "./sitefooter"
export default class Shop extends React.Component {
    render() {
        return (<div>
            <SiteHeader />
            {/* put your content here */}
            <div className="container py-5">
                <div className="row product">
                    <div className="col-lg-4">
                        <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item-inner border rounded">
                                <div className="product-item-inner-item">
                                    <img src="theme/img/product-3.png" className="img-fluid w-100 rounded-top" alt />
                                    <div className="product-details">
                                        <a href="#"><i className="fa fa-eye fa-1x" /></a>
                                    </div>
                                </div>
                                <div className="text-center rounded-bottom p-4">
                                    <a href="#" className="d-block h4">Category Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* put your content here */}
            {/* footer*/}
            <SiteFooter />
        </div>)
    }
}