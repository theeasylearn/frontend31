import React from 'react';
import ReactDOM from 'react-dom/client';
class SimpleInterestCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simple_interest:0
        }; //empty object
    }

    //arrow function
    onInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state);
        //calculate simple interest
        // interest = (amount * rate * year) / 100
        let interest = (this.state.amount * this.state.rate * this.state.year) / 100;
        this.setState({
            simple_interest: interest
        });
    }
    render() {
        return (<div className="container mt-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card shadow">
                        <div className="card-header text-bg-primary">
                            <h2 className="mb-4">Simple Interest Calculator</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.submitForm}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Principal Amount (P)</label>
                                    <input type="number" className="form-control" id="amount" name="amount" placeholder="Enter principal amount" required
                                        value={this.state.amount} onChange={this.onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rate" className="form-label">Annual Interest Rate (R%)</label>
                                    <input type="number" className="form-control" id="rate" name='rate' placeholder="Enter interest rate" required
                                        value={this.state.rate} onChange={this.onInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="year" className="form-label">Time Period (T in years)</label>
                                    <input type="number" className="form-control" id="year" name='year' placeholder="Enter time in years" required
                                        value={this.state.year} onChange={this.onInputChange} />
                                </div>
                            <button type="submit" className="btn btn-primary">Calculate Interest</button>
                                <h2>{this.state.simple_interest}</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleInterestCalculator />);