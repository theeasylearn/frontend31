import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/*
    localhost:3000  --> home.js 
    localhost:3000/aboutus  --> aboutus.js 
    localhost:3000/product  --> product.js 
*/
let Home = () => <div><h1>Home</h1></div>
let AboutUs = () => <div><h1>About us</h1></div>
let Product = () => <div><h1>Product</h1></div>
let PageNotFound = () => <div><h1>No such page exist (404)</h1></div>
function App()
{
    return (<BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product" element={<Product />} />
          {/* create route which will run for non existing route */}
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
