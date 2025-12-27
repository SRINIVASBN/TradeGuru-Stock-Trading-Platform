import React from 'react';
import './Charges.css';

function Charges() {
  return (
    <div className="container" style={{ fontFamily: 'Inter, sans-serif', color: '#424242', marginTop: '100px' }}>
      
      {/* Row 1: Charges for account opening */}
      <div className="row table-light" style={{margin:"0 100px 100px 100px"}}>
        <div>
          <h3 style={{ marginBottom: '40px',fontWeight:"600" }}>Charges for account opening</h3>
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th className='first-table-1' >Type of account</th>
                <th className='first-table'>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='first-table-1'>Online account</td>
                <td className='first-table-2'><span className="badge rounded-pill" style={{ backgroundColor: "#4CAF50", color: "#F5F5F5" }}>FREE</span></td>
              </tr>
              <tr>
                <td className='first-table-1'>Offline account</td>
                <td className='first-table-2'><span className="badge rounded-pill" style={{backgroundColor: "#4CAF50", color: "#F5F5F5" }}>FREE</span></td>
              </tr>
              <tr>
                <td className='first-table-1'>NRI account (offline only)</td>
                <td className='first-table-2'>₹ 500</td>
              </tr>
              <tr>
                <td className='first-table-1'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td className='first-table-2'>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Row 2: Charges for optional services */}
      <div className="row " style={{margin:"0 100px 0 100px"}}>
        <div>
          <h3 style={{ marginBottom: '40px',fontWeight:"600" }}>Charges for optional value added services</h3>
          <table className="table table-bordered second-table" >
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Charges;
