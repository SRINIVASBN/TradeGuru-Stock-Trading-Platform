import React from 'react';
import "../SegmentTabs.css"
function Equity() {
  return (
    <div className="charges-table equity-wrap">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&amp;O - Futures</th>
            <th>F&amp;O - Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='light'>Brokerage</td>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td className='light'>STT/CTT</td>
            <td>0.1% on buy &amp; sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td>
              • 0.125% of the intrinsic value on options that are bought and exercised<br />
              • 0.1% on sell side (on premium)
            </td>
          </tr>
          <tr>
            <td className='light'>Transaction charges</td>
            <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
            <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
            <td>NSE: 0.00173%<br />BSE: 0</td>
            <td>NSE: 0.03503% (on premium)<br />BSE: 0.0325% (on premium)</td>
          </tr>
          <tr>
            <td className='light'>GST</td>
            <td colSpan="4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td className='light'>SEBI charges</td>
            <td colSpan="4">₹10 / crore</td>
          </tr>
          <tr>
            <td className='light'>Stamp charges</td>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Equity;
