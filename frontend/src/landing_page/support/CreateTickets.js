import React from 'react';
import './CreateTickets.css';

function CreateTickets() {
  return (
    <div className="container" style={{ color: '#424242', fontFamily: 'Inter, serif', marginTop: '80px' }}>
      <div>
        <h2 style={{ color: '#666666', fontSize: '20px', margin: '0 0 40px 80px' }}>
          To create a ticket, select a relevant topic
        </h2>
      </div>

{/* Row 1 */}
      <div className="row" style={{margin:"0 0 50px 80px"}}>
    {/* Column 1 */}
        <div className="col-4" style={{ lineHeight:"2.2",textDecoration:"none" }}>
          
          <a href="#" className='main'>
            <i className="fa-solid fa-circle-plus" style={{ marginRight: '15px' }}></i>
            Account Opening
          </a><br />
          <a href="#" className="sub">Resident individual</a><br />
          <a href="#" className="sub">Minor</a><br />
          <a href="#" className="sub">Non Resident Indian (NRI)</a><br />
          <a href="#" className="sub">Company, Partnership, HUF and LLP</a><br />
          <a href="#" className="sub">Glossary</a>
        </div>

    {/* Column 2 */}
        <div className="col-4" style={{ lineHeight:"2" }}>
        
          <a href="#" className='main'>
            <i className="fa-solid fa-user" style={{ marginRight: '15px' }}></i>
            Your Zerodha Account
          </a><br />
          <a href="#" className="sub">Your Profile</a><br />
          <a href="#" className="sub">Account modification</a><br />
          <a href="#" className="sub">Client Master Report (CMR) and Depository Participant (DP)</a><br />
          <a href="#" className="sub">Nomination</a><br />
          <a href="#" className="sub">Transfer and conversion of securities</a>
        </div>

    {/* Column 3 */}
        <div className="col-4" style={{ lineHeight:"2.2" }}>
          
          <a href="#" className='main'>
            <i className="fa-solid fa-chart-line" style={{ marginRight: '15px' }}></i>
            Kite
          </a><br />
          <a href="#" className="sub">IPO</a><br />
          <a href="#" className="sub">Trading FAQs</a><br />
          <a href="#" className="sub">Margin Trading Facility (MTF) and Margins</a><br />
          <a href="#" className="sub">Charts and orders</a><br />
          <a href="#" className="sub">Alerts and Nudges</a><br />
          <a href="#" className="sub">General</a>
        </div>
      </div>

{/* Row 2 */}
      <div className="row" style={{margin:"0 0 100px 80px"}}>
    {/* Column 1 */}
        <div className="col-4" style={{ lineHeight:"2" }}>
         
          <a href="#" className='main'>
            <i className="fa-solid fa-briefcase" style={{ marginRight: '15px' }}></i>
            Funds
          </a><br />
          <a href="#" className="sub">Add money</a><br />
          <a href="#" className="sub">Withdraw money</a><br />
          <a href="#" className="sub">Add bank accounts</a><br />
          <a href="#" className="sub">eMandates</a>
        </div>

    {/* Column 2 */}
        <div className="col-4" style={{ lineHeight:"2" }}>
          
          <a href="#" className='main'>
            <i className="fa-solid fa-terminal" style={{ marginRight: '15px' }}></i>
            Console
          </a><br />
          <a href="#" className="sub">Portfolio</a><br />
          <a href="#" className="sub">Corporate actions</a><br />
          <a href="#" className="sub">Funds statement</a><br />
          <a href="#" className="sub">Reports</a><br />
          <a href="#" className="sub">Profile</a><br />
          <a href="#" className="sub">Segments</a>
        </div>

    {/* Column 3 */}
        <div className="col-4" style={{ lineHeight:"2" }}>
          
          <a href="#" className='main'>
            <i className="fa-solid fa-coins" style={{ marginRight: '15px' }}></i>
            Coin
          </a><br />
          <a href="#" className="sub">Mutual funds</a><br />
          <a href="#" className="sub">National Pension Scheme (NPS)</a><br />
          <a href="#" className="sub">Features on Coin</a><br />
          <a href="#" className="sub">Payments and Orders</a><br />
          <a href="#" className="sub">General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTickets;
