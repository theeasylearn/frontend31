import { Component } from "react";
import { Link } from "react-router-dom";
export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<main>
            {/* section */}
            <section>
                <div className="container d-flex flex-column">
                    {/* row */}
                    <div className="row min-vh-100 justify-content-center align-items-center">
                        {/* col */}
                        <div className="offset-lg-1 col-lg-10 py-8 py-xl-0">
                            <div className="mb-10 mb-xxl-0">
                                {/* img */}
                                <h1>myshop</h1>
                            </div>
                            <div className="row justify-content-center align-items-center">
                                {/* content */}
                                <div className="col-md-6">
                                    <div className="mb-6 mb-lg-0">
                                        <h1>Something’s wrong here...</h1>
                                        <p className="mb-8">
                                            We can’t find the page you’re looking for.
                                            <br />
                                            Check out our help center or head back to home.
                                        </p>
                                        <Link to="/" className="btn btn-primary ms-2">Back to home</Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        {/* img */}
                                        <img src="theme/assets/images/svg-graphics/error.svg" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        );
    }
}