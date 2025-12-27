import React, { useState, useEffect } from "react";
//earlier
// //import { holdings } from "../data/data";  // static local data
const Holdings = () => {
  const [holdings, setHoldings] = useState([]); // step 3

  useEffect(() => {   // step 4
    fetch("http://localhost:5000/DisplayHoldings") // your backend API
      .then((res) => res.json())
      .then((data) => setHoldings(data))  // step 5
      .catch((err) => console.error("Error fetching holdings:", err));
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead >
            <tr>  {/* Always good to wrap headers in <thead> */}
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p style={{color:"#a715b8ff" ,fontSize:"20px",fontWeight:"300"}}>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p style={{color:"#00e1ffff" ,fontSize:"20px"}}>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p style={{color:"#166ce5ff" ,fontSize:"20px"}}>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
