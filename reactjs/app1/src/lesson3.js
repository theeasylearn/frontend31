import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//create variables
var num1 = 100;
var num2 = 3;
var result = (<div>
    <ul className='my-list'>
        <li>Addition = {num1 + num2}</li>
        <li>Subtraction = {num1 - num2}</li>
        <li>Multiplication = {num1 * num2}</li>
        <li>Division = {num1 / num2}</li>
    </ul>
</div>)
root.render(result);
