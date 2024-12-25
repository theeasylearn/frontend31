import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminAddCategory from './AdminAddCategory';
import AdminAddProduct from './AdminAddProduct';
import AdminCategory from './AdminCategory';
import AdminChangePassword from './AdminChangePassword';
import AdminDashBoard from './AdminDashBoard';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminOrder from './AdminOrder';
import AdminOrderPrint from './AdminOrderPrint';
import AdminProduct from './AdminProduct';
import AdminSendMessage from './AdminSendMessage';
import AdminViewProduct from './AdminViewProduct';
import AdminUser from './AdminUser';
import AdminViewOrderDetail from './AdminViewOrderDetail';
import PageNotFound from './PageNotFound';
function App()
{
    return (<BrowserRouter>
      <Routes>
          <Route index path="/" element={<AdminLogin />} />
          <Route path="/category" element={<AdminCategory />} /> 
          <Route path="/product" element={<AdminProduct />} />  
          <Route path="/orders" element={<AdminOrder />} />  
          <Route path="/users" element={<AdminUser />} />  
          <Route path="/orders/detail/:orderid" element={<AdminViewOrderDetail />} /> 
          <Route path="/dashboard" element={<AdminDashBoard />} />  
          
          <Route path="/category/add" element={<AdminAddCategory />} /> 
          <Route path="/category/edit" element={<AdminEditCategory />} /> 
          <Route path="/product/add" element={<AdminAddProduct />} /> 
          <Route path="/product/edit" element={<AdminEditProduct />} /> 
          <Route path="/product/detail" element={<AdminViewProduct />} /> 
          <Route path="/orders/print" element={<AdminOrderPrint />} /> 
          <Route path="/forgot-password" element={<AdminForgotPassword />} />  
          <Route path="/change-password" element={<AdminChangePassword />} />  
          <Route path="/send-message" element={<AdminSendMessage />} />  
          {/* create route which will run for non existing route */}
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
