import React from 'react';
import ReactDOM from 'react-dom/client';
import Movie from './Movie';
import Multiplex from './Multiplex'
//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Multiplex />);