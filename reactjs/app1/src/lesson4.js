import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div className='container'>
    <div className='row'>
        <div className='col-12'>
            <h1>Bootstrap in Reactjs</h1>
        </div>
    </div>
</div>)
root.render(output);
