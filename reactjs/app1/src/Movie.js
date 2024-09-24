import React from "react";
//create class components
//initilize state variables dynamically
export default class Movie extends React.Component {
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

    //updating phase
  shouldComponentUpdate(nextProp,nextState)
  {
      if(nextState.count<= -1)
        return false;
      else 
        return true;
  }

  componentDidUpdate(prevProp,PrevState)
  {
    console.log('componentDidUpdate called...');
    if(this.state.count != PrevState.count)
    {
      this.setState({
        total: this.state.count * this.state.price
      })
    }  
  }

  //non call-back function should be create as arrow function
  increaseCount = () => {
    //alert('plus');
    // this.state.count = this.state.count + 1; wrong way

    this.setState({
      count: this.state.count + 1,
    });

  }
  decreaseCount = () => {
    //alert('minus')
    // this.state.count = this.state.count - 1; wrong way
    this.setState({
      count: this.state.count - 1,
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