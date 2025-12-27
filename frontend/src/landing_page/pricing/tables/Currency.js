import React from 'react';
import "../SegmentTabs.css"
function Currency() {
  return (
    <div className="charges-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Currency futures</th>
            <th>Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='light'>Brokerage</td>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>₹20/executed order</td>
          </tr>
          <tr>
            <td className='light'>STT/CTT</td>
            <td>No STT</td>
            <td>No STT</td>
          </tr>
          <tr>
            <td className='light'>Transaction charges</td>
            <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
            <td>NSE: 0.0311%<br />BSE: 0.001%</td>
          </tr>
          <tr>
            <td className='light'>GST</td>
            <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>
          <tr>
            <td className='light'>SEBI charges</td>
            <td colSpan="2">₹10 / crore</td>
          </tr>
          <tr>
            <td className='light'>Stamp charges</td>
            <td colSpan="2">0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Currency;
