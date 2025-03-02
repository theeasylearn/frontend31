import React from 'react'
import Header from './header';
import Footer from './footer';
import WithHook from './hoc';
import getBase from './common';
import { showError, showMessage, showNetworkError } from './message';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            address1: '',
            address2: '',
            mobile: '',
            city: '',
            pincode: '',
            remarks: ''
        }
    }
    updateValue = (event) => {
        // console.log(event.target.name + " " + event.target.value);
        this.setState({
            [event.target.id]: event.target.value
        });
        //  console.log(this.state);
    }
    doCheckout = (e) => {
        console.log(this.state);
        e.preventDefault();
        //usersid,fullname,address1,address2,mobile,city,pincode,remarks 

        let apiAddress = getBase() + "checkout.php";
        let form = new FormData();
        form.append('usersid', this.props.cookies['userid']);
        form.append('fullname', this.state.fullname);
        form.append('address1', this.state.address1);
        form.append('address2', this.state.address2);
        form.append('mobile', this.state.mobile);
        form.append('city', this.state.city);
        form.append('pincode', this.state.pincode);
        form.append('remarks', this.state.remarks);

        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data:form
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no')
                    showError(message);
                else {
                    showMessage(message);
                    setTimeout(() => {
                        this.props.navigate("/");
                    }, 2000);
                }
            }
        }).catch((error) => showNetworkError(error));
    }
    render() {
        return (<>
            <Header />
            <main>
                <div className="container">
                    <ToastContainer />
                    <div className="row my-5">
                        <div className="col-lg-8 offset-2">
                            <div className="card shadow">
                                <div className="card-header text-bg-success">
                                    <h3 className="text-white">Checkout</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.doCheckout}>
                                        <div className="row g-3">
                                            {/* col */}
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Full name" aria-label="Full name" required id='fullname'
                                                    value={this.state.fullname}
                                                    onChange={(e) => this.updateValue(e)} />
                                            </div>

                                            <div className="col-12">
                                                <input type="number" className="form-control" placeholder="Mobile" aria-label="Mobile" required id='mobile'
                                                    value={this.state.mobile}
                                                    onChange={(e) => this.updateValue(e)} />
                                            </div>

                                            {/* col */}
                                            {/* col */}
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Address Line 1" required
                                                    id='address1'
                                                    value={this.state.address1}
                                                    onChange={(e) => this.updateValue(e)}
                                                />
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="Address Line 2" required
                                                    id='address2'
                                                    value={this.state.address2}
                                                    onChange={(e) => this.updateValue(e)}
                                                />
                                            </div>
                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="City" required
                                                    id='city'
                                                    value={this.state.city}
                                                    onChange={(e) => this.updateValue(e)}
                                                />
                                            </div>

                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="pin Code" required
                                                    id='pincode'
                                                    value={this.state.pincode}
                                                    onChange={(e) => this.updateValue(e)}
                                                />
                                            </div>

                                            <div className="col-12">
                                                {/* button */}
                                                <input type="text" className="form-control" placeholder="Remarks" required
                                                    id='remarks'
                                                    value={this.state.remarks}
                                                    onChange={(e) => this.updateValue(e)}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <span className="fw-bold">Select payment type</span>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault" checked />
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
                                                <button className="btn btn-primary" type="submit">Place Order</button>
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
export default WithHook(Checkout);