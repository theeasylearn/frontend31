import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (
    <div className='container'>
    /* start of container */
    <div className='row'>
        <div className='col-12'>
            <h1>Bootstrap in Reactjs</h1>
        </div>
        <div className='col-12'></div>
        {/* this is comments */}
    </div> 
    /* end of container */
</div>)
root.render(output);
