import React from 'react';

function Education() {
  return (
    <div className="container p-0" style={{ marginTop: '100px',color: '#424242',fontFamily: 'Inter, serif',}}>
      <div className="row">

        {/* Left Image */}
        <div className="col-6 d-block" style={{ paddingLeft: '80px'}}>
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        {/* Right Text Area */}
        <div className="col-6 mt-4">
          <h2 className="fw-bold mb-4">Free and open market education</h2>

          <p className="mb-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="https://zerodha.com/varsity" className="d-block mb-4 fw-semibold link">
            Varsity <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p className="mb-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="https://tradingqna.com" className='fw-semibold link' >
            TradingQ&A <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
