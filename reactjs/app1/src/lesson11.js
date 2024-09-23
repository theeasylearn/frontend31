import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class components
//initilize state variables dynamically
class Movie extends React.Component {
  // call-back function
  constructor(props) {
    super(props);
    console.log('constructor called');
    //create state object
    this.state = {
      name: this.props.name,
      starcast: this.props.starcast,
      duration: this.props.duration,
      price: this.props.price,
      photo: this.props.photo,
      count: 0,
      total: 0
    }
  }

  //mounting phase
  componentWillMount()
  {
      console.log('componentWillMount called...');
  }

  componentDidMount()
  {
    console.log('componentDidMount called...');
  }

  //updating phase
  shouldComponentUpdate(nextProp,nextState)
  {
      console.log('shouldComponentUpdate called...');
      return true;
  }

  componentWillUpdate(nextProp,nextState)
  {
    console.log('componentWillUpdate called...');
  }

  componentDidUpdate(nextProp,nextState)
  {
    console.log('componentDidUpdate called...');
  }

  componentWillUnmount()
  {
    console.log('componentWillUnmount called...');
  }
  //non call-back function should be create as arrow function
  increaseCount = () => {
    //alert('plus');
    // this.state.count = this.state.count + 1; wrong way

    this.setState({
      count: this.state.count + 1,
    }, () => {
      //annonymus arrow function which execute only after count variable gets updated
      this.setState({
        total: this.state.count * this.state.price
      });
    });

  }
  decreaseCount = () => {
    //alert('minus')
    // this.state.count = this.state.count - 1; wrong way
    this.setState({
      count: this.state.count - 1,
    }, () => {
      //annonymus arrow function which execute only after count variable gets updated
      this.setState({
        total: this.state.count * this.state.price

      })
    });
  }
  // call-back function
  render() {
    console.log('render method is called');
    return (<div className='col-lg-3'>
      <div className='card shadow'>
        <img className='card-img-top' src={this.state.photo} />
        <div className='card-body'>
          <h3>{this.state.name}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{this.state.starcast}</li>
            <li className='list-group-item'>{this.state.duration} Minutes</li>
            <li className='list-group-item'>
              <table>
                <tr>
                  <td width='33%'><button type='button' className='btn btn-danger w-100' onClick={this.decreaseCount}>-</button></td>
                  <td width='33%'><input type='text' value={this.state.count} className='form-control' /></td>
                  <td width='33%'><button type='button' className='btn btn-success w-100' onClick={this.increaseCount}>+</button></td>
                </tr>
              </table>
            </li>
            <li className='list-group-item'>{this.state.price} price</li>
            <li className='list-group-item'>{this.state.total} total amount</li>
          </ul>
        </div>
      </div>
    </div>);
  }
}

class Multiplex extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Maxus</h1>
          </div>
          <Movie name='Stree 2' starcast='Shradhha Kapoor' duration='180' price='250'
            photo='http://picsum.photos/300?random=2' />

          {/* <Movie name='RRR' starcast='Ram charan, Kali charan' duration='240' price='399'
            photo='http://picsum.photos/300?random=3' /> */}

        </div>
      </div>
    )
  }
}
root.render(<Multiplex />);