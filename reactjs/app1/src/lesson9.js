import React from 'react';
import ReactDOM from 'react-dom/client';

//create virtual DOM using root from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class components
class Player extends React.Component
{
    constructor(props)
    {
        super(props); //calling parent class constuctor (required)
        //create property (instance variable)
        this.name = props.name;
        this.runs = props.runs;
        this.match = props.match;
        this.century = props.century;
        this.fifties = props.fifties;
        this.average = this.run / this.match;
        this.photo = props.photo;
    }
    //must override below method
    render()
    {
        return (  <div className="col-lg-6">
            <div className="card shadow">
              <div className="row">
                <div className="col-8">
                  <div className="card-body">
                    <h3 className="card-title">{this.name}</h3>   
                    <hr />
                    Runs : {this.runs} <br />
                    Match : {this.match} <br />
                    100s: {this.century} <br />
                    50s: {this.fifties} <br />
                  </div>
                </div>
                <div className="col-4">
                  <img src={this.photo} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>);
    }
}
class Cricket extends React.Component
{
    // must Override below method 
    render()
    {
        return (<div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Players</h1>
              </div>
              {/* it will automatically call render function of Player class  */}
             <Player name='KL Rahul' runs='12000' match='100' century='20' fifties='20' photo='http://picsum.photos/300?random=1' />    
             <Player name='Pant' runs='15000' match='111' century='15' fifties='11' photo='http://picsum.photos/300?random=2' />    
            
            </div>
          </div>
          );
    }
}
root.render(<Cricket />);