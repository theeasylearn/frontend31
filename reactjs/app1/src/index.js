import ReactDOM from 'react-dom/client';
//to store input in state inside functional component, we have to use Hook 
import React,{ useState } from 'react';
function AreaCalculator()
{
    //create 3 state variables (two state variables for length and width)
    let [length,setLength]  = useState(0);
    let [width,setWidth] = useState(0);

    //create one more variable to store result
    let [area,setArea] = useState(0);
    //create function inside function
    let calculateArea = function(e)
    {
        console.log(length,width);
        setArea(parseInt(length) * parseInt(width));
        e.preventDefault();
    } 

    return (<div className="container my-4">
      <div className="row">
        <div className="col-6 offset-3">
          <div className="card shadow">
            <div className="card-header text-bg-success">
              <h3>Area Calculator</h3>
            </div>
            <div className="card-body">
              <form action onSubmit={calculateArea}>
                <div className="mb-3">
                  <label htmlFor="length" className="form-label">Length</label>
                  <input type="number" name="length" id="length" className="form-control" required
                  value={length} onChange={(e) => setLength(e.target.value)} />

                </div>
                <div className="mb-3">
                  <label htmlFor="width" className="form-label">Width</label>
                  <input type="number" name="width" id="width" className="form-control" required
                  value={width} onChange={(e) => setWidth(e.target.value)} />

                </div>
                <div className="mb-3">
                  <input type="submit" value="Calculate Area" className="btn btn-success" />
                  <input type="reset" value="Clear all" className="btn btn-light" />
                </div>
                <div>
                    <h3>{area}</h3>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AreaCalculator />);