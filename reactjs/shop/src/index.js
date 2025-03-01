import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgot-password';
import Home from './home';
import Checkout from './checkout'
import Product  from './product';
import Shop from './Shop';
import SingleProduct from './single_product';
import Cart from './cart';
import ChangePassword from './change_password';
import PageNotFound from './PageNotFound';
import Logout from './logout';
function MyRouter()
{
    return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/register' element={<Register />} />
            <Route  path='/forgot-password' element={<ForgotPassword />} />
            <Route  path='/change-password' element={<ChangePassword />} />
            <Route  path='/cart' element={<Cart />} />
            <Route  path='/checkout' element={<Checkout />} />
            <Route  path='/logout' element={<Logout />} />
            <Route  path='/shop' element={<Shop />} />
            {/* dynamaic route */}
            <Route  path='/product/:categoryid' element={<Product />} />
            <Route  path='/product/id/:productid' element={<SingleProduct />} />
            {/* below route will execute for any not existing route */}
            <Route  path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);
