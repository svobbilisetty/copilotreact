import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome locally
import 'bootstrap/dist/css/bootstrap.min.css';

const StockRow = (props) => {
  return (
    <div className="col-md-4 py-2">
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" align='center'>{props.ticker}</h5>
            <p className="card-text">Day High: {props.dayHigh}</p>
            <p className="card-text">Day Low: {props.dayLow}</p>
            <p>
              Change: 
              <span className={`badge ${props.perChange > 0 ? "bg-success" : "bg-danger"}`}>
                {props.perChange}%   {props.perChange > 0 ? <i style={{ color: 'white' }} className="fas fa-arrow-up"></i> : <i style={{ color: 'white' }} className="fas fa-arrow-down"></i>}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockRow;
