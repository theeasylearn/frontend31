import React from 'react';
import ReactDOM from 'react-dom/client';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.state = {
            message:''
        }
    }

    verifyLogin = (event) => {
        console.log(this.email.current.value);
        console.log(this.password.current.value);
        if(this.email.current.value === 'admin@gmail.com' && this.password.current.value === "123123")
        {
            this.setState({
                message:'login successfull'
            })
        }    
        else 
        {
            this.setState({
                message:'login failed'
            })
        }
        event.preventDefault(); 
    }
    render() {
        return (<div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-header text-center text-bg-primary">
                    <h4>Login</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.verifyLogin}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required ref={this.email} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" required ref={this.password} />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Sign in</button>
                      <p align='center'>
                        {this.state.message}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);