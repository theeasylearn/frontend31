import React from 'react'
import Header from './header';
import Footer from './footer';
import WithHook from './hoc';
import getBase, { getImageBase } from './common';
import axios from 'axios';
import { showError, showMessage, showNetworkError } from './message';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],  // empty array
            cartTotal: 0
        }
    }
    componentDidMount() {
        //get all products added by user in cart.
        const userid = this.props.cookies['userid'];
        let apiAddress = getBase() + "cart.php?usersid=" + userid;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    alert('cart is empty');
                else {
                    response.data.splice(0, 2); //delete 2 object from beginning 
                    //calculate cart total 
                    var temp = 0;
                    response.data.map((current) => {
                        temp += (current.price * current.quantity)
                    });

                    //store data into state array
                    this.setState({
                        items: response.data,
                        cartTotal: temp
                    });
                }
            }
        }).catch((error) => showNetworkError(error));
    }
    deleteItem = (item) => {
        console.log(item);
        let apiAddress = getBase() + "delete_from_cart.php?cartid=" + item.cartid;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                showMessage(response.data[1]['message']);
                var itemTotal=0;
                var temp = this.state.items.filter((current) => {
                    if(current.cartid !== item.cartid)
                        return item;
                    else 
                    {
                        itemTotal = current.price * current.quantity;
                    }
                });

                this.setState({
                    items:temp,
                    cartTotal: this.state.cartTotal - itemTotal
                });
            }
        }).catch((error) => showNetworkError(error));

    }
    render() {
        return (<>
            <Header />
            <main>
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        <ToastContainer />
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* card */}
                                <div className="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 className="fw-bold">Shop Cart</h1>
                                        <p className="mb-0">Shopping in 382480</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {/* alert */}
                                    <div className="alert alert-danger p-2" role="alert">
                                        You’ve got FREE delivery. Start
                                        <Link to="/checkout" className="alert-link">checkout now!</Link>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {this.state.items.map((current) => {
                                            return (<li className="list-group-item py-3 ps-0 border-top">
                                                {/* row */}
                                                <div className="row align-items-center">
                                                    <div className="col-6 col-md-6 col-lg-7">
                                                        <div className="d-flex">
                                                            <img src={getImageBase() + "product/" + current.photo} alt="Ecommerce" className="icon-shape icon-xxl" />
                                                            <div className="ms-3">
                                                                {/* title */}
                                                                <a href="shop-single.html" className="text-inherit">
                                                                    <h6 className="mb-0">
                                                                        {current.title}
                                                                    </h6>
                                                                </a>
                                                                {/* text */}
                                                                <div className="mt-2 small lh-1">
                                                                    <span className="text-decoration-none text-inherit" onClick={() => this.deleteItem(current)}>
                                                                        <span className="me-1 align-text-bottom">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                                                                                <polyline points="3 6 5 6 21 6" />
                                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                <line x1={10} y1={11} x2={10} y2={17} />
                                                                                <line x1={14} y1={11} x2={14} y2={17} />
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text-muted">Remove</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* input group */}
                                                    <div className="col-4 col-md-4 col-lg-3">
                                                        {/* input */}
                                                        {/* input */}
                                                    </div>
                                                    {/* price */}
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold">₹{current.price}</span>
                                                    </div>
                                                </div>
                                            </li>);
                                        })}
                                    </ul>
                                    {/* btn */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <a href="#!" className="btn btn-primary">Continue Shopping</a>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item</div>
                                                    </div>
                                                    <span>₹ {this.state.cartTotal}</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>₹0.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">₹ {this.state.cartTotal}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <Link to="/checkout" className="btn btn-primary btn-lg d-flex justify-content-between align-items-center">
                                                Go to Checkout
                                                <span className="fw-bold">₹{this.state.cartTotal}</span>
                                            </Link>
                                        </div>
                                        {/* text */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>

            <Footer />
        </>);
    }
}
export default WithHook(Cart);