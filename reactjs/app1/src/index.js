import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
function Product()
{
    return (  <div className="col-lg-3">
        <div className="card shadow">
            <img className="card-img-top" src="http://picsum.photos/300" />
            <div className="card-body">
                <h4>IPhone -  16</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusantium vero voluptas, totam magnam sit tenetur dolorem maxime aut magni consequuntur ut ipsum non quam quo! Tenetur veniam adipisci, amet, laborum ducimus</p>
            </div>
            <div className="card-footer">
                <button className="btn w-100 btn-primary">165000</button>
            </div>
        </div>
    </div>)
}
function Shop()
{
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Products</h1>
            </div>
            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    </div>
    )
}
root.render(<Shop />);