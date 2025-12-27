import React from 'react';
import "./Stats.css"   //for links hovering
function Pricing() {
  return (
    <div className="container" style={{ marginTop: '150px',color: '#424242',fontFamily: 'Inter, serif',}}>
      <div className="row align-items-center">

        {/* Left Text Area */}
        <div className="col-4" style={{ paddingLeft:"60px",marginLeft: "50px"}}>
          <h2 className="fw-bold mb-4">Unbeatable pricing</h2>
          <p className="mb-4" style={{ maxWidth: "380px" }}>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <a href="https://www.w3schools.com" className='fw-semibold link'>
            See pricing <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>
        <div className='col-1'></div>

        {/* Right Pricing Boxes */}
        <div className="col-6" style={{ marginTop: "-30px" }}>
          <div className="row">
            <div className="col-6 text-center p-4 border rounded">
              <h2 className="fw-bold" style={{ color: "#387ED1" }}>₹0</h2>
              <p>Free equity delivery<br />and direct mutual funds</p>
            </div>
            <div className="col-6 text-center p-4 border rounded">
              <h2 className="fw-bold" style={{ color: "#387ED1" }}>₹20</h2>
              <p>Intraday and F&O trades<br />across segments</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
