import React, { useEffect, useState } from 'react';
import StockRow from './StockRow/StockRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getStocks } from './ApiCall'; // Import getStocks directly, assuming it's a named export

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStocks();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 align="center">Welcome to Stock Tracker App</h1>
      {/* <table className="table">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Current Price</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody> */}

      {/* Map over the data array to render StockRow components dynamically */}
      <div class="row row-cols-3 row-cols-md-2 g-2">
        {data.map((stock) => (
          <StockRow
            key={stock.ticker}
            ticker={stock.symbol}
            dayHigh={stock.dayHigh}
            dayLow={stock.dayLow}
            perChange={stock.pChange}
          />
        ))}
      </div>
      {/* </tbody>
      </table> */}
    </div>
  );
}

export default App;
