import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Product(props) {
  //object desctructring 
  let { name, price, photo, rating, os, memory } = props;
  let articleStyle = { border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', maxWidth: '350px', fontFamily: "'Roboto','sans-serif'" };
  let headerStyle = {
    textAlign: 'center',
    marginBottom: '10px'
  };
  const h2Style = {
    fontFamily: "'Merriweather', serif",
    color: '#333',
    fontSize: '24px',
    margin: 0
  };
  const imgStyle = {
    display: 'block',
    margin: '0 auto',
    borderRadius: '10px',
    width: '100%'
  };
  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    marginTop: '15px'
  };
  const liStyle = {
    marginBottom: '8px',
    fontSize: '16px',
    color: '#666'
  };

  return (<article style={articleStyle}>
    <header style={headerStyle}>
      <h2 style={h2Style}>{props.name}</h2>
    </header>
    <img src={photo} style={imgStyle} />
    <ul style={ulStyle}>
      <li style={liStyle}>Price: <strong>₹{price}</strong></li>
      <li style={liStyle}>Rating: <strong className="gold">{rating} star rating</strong></li>
      <li style={liStyle}>OS: <strong>{os}</strong></li>
      <li style={liStyle}>Memory: <strong>{memory}</strong></li>
    </ul>
  </article>)
}
function Shop() {
  //create object
  let sectionStyle = { display: 'flex', gap: '20px' };
  return (
    <div>
      <h1>My Shop</h1>
      <hr />
      <section style={sectionStyle}>
        <Product name='IPhone 16' price='125000' photo="https://picsum.photos/300?random=1" rating='5' os='Ios 16' memory='1TB' />
        <Product name='IPhone 15' price='96000' photo="https://picsum.photos/300?random=2" rating='4.5' os='Ios 15' memory='512gb' />
        <Product name='IPhone 14' price='48000' photo="https://picsum.photos/300?random=3" rating='4' os='Ios 14' memory='256gb' />
      </section>
    </div>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shop />);
