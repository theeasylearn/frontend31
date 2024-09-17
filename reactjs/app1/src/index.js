import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class components
class Movie extends React.Component
{
    constructor(props)
    {
      super(props);
      //create state object
      this.state = {
          name: 'James Bond',
          starcast: 'ABC XYZ BCD',
          duration:150,
          price:300,
          photo: 'http://picsum.photos/300?random=1'
      }
    }
    render()
    {
        return ( <div className='col-lg-3'>
          <div className='card shadow'>
              <img className='card-img-top' src={this.state.photo} />
              <div className='card-body'>
                  <h3>{this.state.name}</h3>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>{this.state.starcast}</li>
                    <li className='list-group-item'>{this.state.duration}</li>
                    <li className='list-group-item'>{this.state.price}</li>
                  </ul>
              </div>
          </div>
      </div>);
    }
}

class Multiplex extends React.Component
{
    render()
    {
        return (
          <div className='container'>
              <div className='row'>
                <div className='col-12'>
                    <h1>Maxus</h1>
                </div>
              <Movie />
              </div>
          </div>
        )
    }
}
root.render(<Multiplex />);