import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
function Product(props) {
    return (<div className="col-lg-3">
        <div className="card shadow">
            <img className="card-img-top" src={props.photo} />
            <div className="card-body">
                <h4>{props.name}</h4>
                <p>{props.detail}</p>
            </div>
            <div className="card-footer">
                <button className="btn w-100 btn-primary">{props.price}</button>
            </div>
        </div>
    </div>)
}
function Shop() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Products</h1>
                </div>
                <Product
                    name='iPhone 14 Pro Max'
                    price='$1099'
                    photo='https://picsum.photos/200/300?random=1' 
                    detail='The iPhone 14 Pro Max features a 6.7-inch display, A16 Bionic chip, triple-camera system, and Dynamic Island.'
                />
                <Product
                    name='MacBook Pro 16-inch'
                    price='$2499'
                    photo='https://picsum.photos/200/300?random=2' 
                    detail='The MacBook Pro 16-inch comes with M1 Pro/Max chip, 16-inch Liquid Retina XDR display, and up to 64GB unified memory.'
                />
                <Product
                    name='Apple Watch Series 8'
                    price='$399'
                    photo='https://picsum.photos/200/300?random=3' 
                    detail='Apple Watch Series 8 features advanced health tracking, 50m water resistance, always-on display, and up to 18 hours of battery life.'
                />
                <Product
                    name='AirPods Pro (2nd Generation)'
                    price='$249'
                    photo='https://picsum.photos/200/300?random=4' 
                    detail='The new AirPods Pro come with active noise cancellation, transparency mode, spatial audio, and a MagSafe charging case.'
                />


            </div>
        </div>
    )
}
root.render(<Shop />);