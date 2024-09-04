import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<>
    <h1>the easylearn academy</h1>
    <li>Andhra Pradesh</li>
        <li>Arunachal Pradesh</li>
        <li>Assam</li>
        <li>Bihar</li>
        <li>Chhattisgarh</li>
        <li>Goa</li>
        <li>Gujarat</li>
        <li>Haryana</li>
        <li>Himachal Pradesh</li>
        <li>Jharkhand</li>
        <li>Karnataka</li>
        <li>Kerala</li>
        <li>Madhya Pradesh</li>
        <li>Maharashtra</li>
        <li>Manipur</li>
        <li>Meghalaya</li>
        <li>Mizoram</li>
        <li>Nagaland</li>
        <li>Odisha</li>
        <li>Punjab</li>
        <li>Rajasthan</li>
        <li>Sikkim</li>
        <li>Tamil Nadu</li>
        <li>Telangana</li>
        <li>Tripura</li>
        <li>Uttar Pradesh</li>
        <li>Uttarakhand</li>
        <li>West Bengal</li>
</>)
root.render(output);
