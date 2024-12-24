import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AdminViewOrderDetail() {
    const [orders, setOrders] = useState(null); // Initialize orders as null
    const { orderid } = useParams();

    useEffect(() => {
        const apiAddress = `https://theeasylearnacademy.com/shop/ws/orders.php?id=${orderid}`;
        axios({
            url: apiAddress,
            method: 'get',
            responseType: 'json'
        })
            .then((response) => {
                const error = response.data[0]?.error; // Check for error in response
                if (error !== 'no') {
                    alert(error);
                } else {
                    const total = response.data[1]?.total;
                    if (total === 0) {
                        alert('No order detail found');
                    } else {
                        response.data.splice(0, 2); // Remove first two entries
                        setOrders(response.data); // Set fetched orders
                    }
                }
            })
            .catch((error) => {
                console.error(error);
                if (error.code === 'ERR_NETWORK') {
                    alert('It seems you are offline. Check your internet connection.');
                }
            });
    }, [orderid]); // Re-run effect when orderid changes

    if (!orders) {
        // Render a loading state if orders is null
        return <div>Loading order details...</div>;
    }

    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                    <div id="kt_app_sidebar" className="app-sidebar flex-column">
                        <AdminSideBar />
                    </div>
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
                                            <table className="table table-sm table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td width="25%">Id</td>
                                                        <td width="25%">{orders[0]?.id || 'N/A'}</td>
                                                        <td width="25%">Name</td>
                                                        <td width="25%">{orders[0]?.fullname || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Date</td>
                                                        <td width="25%">{orders[0]?.billdate || 'N/A'}</td>
                                                        <td width="25%">Address 1</td>
                                                        <td width="25%">{orders[0]?.address1 || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Amount</td>
                                                        <td width="25%">{orders[0]?.amount || 'N/A'}</td>
                                                        <td width="25%">Address 2</td>
                                                        <td width="25%">{orders[0]?.address2 || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Status</td>
                                                        <td width="25%">{orders[0]?.status || 'N/A'}</td>
                                                        <td width="25%">City</td>
                                                        <td width="25%">{orders[0]?.city || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Payment Mode</td>
                                                        <td width="25%">{orders[0]?.payment_mode || 'N/A'}</td>
                                                        <td width="25%">Pincode</td>
                                                        <td width="25%">{orders[0]?.pincode || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Payment Status</td>
                                                        <td width="25%">{orders[0]?.payment_status || 'N/A'}</td>
                                                        <td width="25%">Mobile</td>
                                                        <td width="25%">{orders[0]?.mobile || 'N/A'}</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="25%">Remarks</td>
                                                        <td colSpan={3}>{orders[0]?.remarks || 'N/A'}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <h4 className="my-3">Products</h4>
                                            <table className="table table-sm table-striped table-bordered">
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
                                                    {orders.map((order, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{order.name}</td>
                                                            <td>{order.price}</td>
                                                            <td>{order.qty}</td>
                                                            <td>{order.total}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}