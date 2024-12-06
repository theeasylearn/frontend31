import React from 'react'
import Header from './header';
import Footer from './footer';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Header />
            <main>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-8 offset-2">
                            <div className="card shadow">
                                <div className="card-header text-bg-success">
                                    <h3 className="text-white">Checkout</h3>
                                </div>
                                <div className="card-body">
                                    <form action>
                                        <div className="row g-3">
                                            {/* col */}
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Full name" aria-label="Full name" required />
                                            </div>
                                            {/* col */}
                                            {/* col */}
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Address Line 1" />
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="Address Line 2" />
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="City" />
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <select className="form-select">
                                                    <option value="andhra-pradesh">Andhra Pradesh</option>
                                                    <option value="arunachal-pradesh">Arunachal Pradesh</option>
                                                    <option value="assam">Assam</option>
                                                    <option value="bihar">Bihar</option>
                                                    <option value="chhattisgarh">Chhattisgarh</option>
                                                    <option value="goa">Goa</option>
                                                    <option value="gujarat">Gujarat</option>
                                                    <option value="haryana">Haryana</option>
                                                    <option value="himachal-pradesh">Himachal Pradesh</option>
                                                    <option value="jharkhand">Jharkhand</option>
                                                    <option value="karnataka">Karnataka</option>
                                                    <option value="kerala">Kerala</option>
                                                    <option value="madhya-pradesh">Madhya Pradesh</option>
                                                    <option value="maharashtra">Maharashtra</option>
                                                    <option value="manipur">Manipur</option>
                                                    <option value="meghalaya">Meghalaya</option>
                                                    <option value="mizoram">Mizoram</option>
                                                    <option value="nagaland">Nagaland</option>
                                                    <option value="odisha">Odisha</option>
                                                    <option value="punjab">Punjab</option>
                                                    <option value="rajasthan">Rajasthan</option>
                                                    <option value="sikkim">Sikkim</option>
                                                    <option value="tamil-nadu">Tamil Nadu</option>
                                                    <option value="telangana">Telangana</option>
                                                    <option value="tripura">Tripura</option>
                                                    <option value="uttar-pradesh">Uttar Pradesh</option>
                                                    <option value="uttarakhand">Uttarakhand</option>
                                                    <option value="west-bengal">West Bengal</option>
                                                    <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                                                    <option value="chandigarh">Chandigarh</option>
                                                    <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu
                                                    </option>
                                                    <option value="delhi">Delhi</option>
                                                    <option value="jammu-kashmir">Jammu and Kashmir</option>
                                                    <option value="ladakh">Ladakh</option>
                                                    <option value="lakshadweep">Lakshadweep</option>
                                                    <option value="puducherry">Puducherry</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="Zip Code" />
                                            </div>
                                            <div className="col-12">
                                                <span className="fw-bold">Select payment type</span>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault" />
                                                    <label className="form-check-label" htmlFor="formRadioDefault">Cash on Delivery</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioDefault" id="formRadioChecked" defaultChecked />
                                                    <label className="form-check-label" htmlFor="formRadioChecked">
                                                        Online money transfer
                                                    </label>
                                                </div>
                                            </div>
                                            {/* button */}
                                            <div className="col-12 text-end">
                                                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
                                                <button className="btn btn-primary" type="button">Place Order</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>);
    }
}
export default Checkout;