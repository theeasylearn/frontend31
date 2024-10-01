import React from 'react';
import ReactDOM from 'react-dom/client';
class EMICalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1000,
            rate: 10,
            years: 1,
            emi_amount: 0
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.calculateEMI();
        });
    }
    calculateEMI = () => {
        console.log(this.state);
        //here i will calculate emi and store into state variable emi_amount
        const { amount, rate, year } = this.state;
        const principal = parseFloat(amount);
        const annualRate = parseFloat(rate);
        const timeInYears = parseInt(year);

        // Convert annual interest rate to monthly and time in years to months
        const monthlyRate = annualRate / (12 * 100);
        const numberOfMonths = timeInYears * 12;

        // EMI calculation formula
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
                    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

        // Update state with EMI value (rounded to 2 decimal places)
        this.setState({
            emi_amount: emi.toFixed(2)
        });

    }
    render() {
        return (<div className="container mt-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="card shadow">
                        <div className="card-header text-bg-primary">
                            <h2 className="mb-4">EMI Calculator</h2>
                        </div>
                        <div className="card-body">

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

                            <h2>{this.state.emi_amount}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EMICalculator />);