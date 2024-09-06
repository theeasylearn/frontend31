import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
function showDateTime()
{
    //function it should be return current date and time 
    //to get current date time, we need to create object of Date class
    var now = new Date();
    var hour = now.getHours();
    var ampm = '';
    if (hour>=12) 
    {
        ampm = " PM ";
        hour = hour - 12;
    }
    else 
        ampm = " AM ";
    var time = hour + ":" + now.getMinutes() + ":" + now.getSeconds();
    var today = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
    var output = time + ampm + today;
    return output;
}
root.render(showDateTime());
