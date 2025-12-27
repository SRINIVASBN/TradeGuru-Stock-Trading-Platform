import React from 'react';

function Awards() {
  return (
    <div className="container p-0" style={{ marginTop: "100px", color: "#424242",fontFamily: "Inter, serif" }}>
           { /* All text inside here will inherit #2c2c2c */} 
      <div className="row">
        
        {/* Left Image */}
        <div className="col-6 ">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards"
            className="img-fluid "
          />
        </div>

        {/* Right Text */}
        <div className="col-6 ml-5">
          <h2 style={{fontWeight:600}}>Largest stock broker in India</h2>

          <p className=" mt-4"style={{fontSize:"18px"}} >
            2+ million Zerodha clients contribute to over 15% of all retail order 
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            {/* Left half list */}
            <div className="col-6" style={{fontSize:"16px"}}>
              <ul className=" mt-3" >
                <li className="mb-3">Futures and Options</li>
                <li className="mb-3">Commodity derivatives</li>
                <li className="mb-3">Currency derivatives</li>
              </ul>
            </div>

            {/* Right half list */}
            <div className="col-6 " style={{fontSize:"16px"}}>
              <ul className=" mt-3">
                <li className="mb-3">Stocks & IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Government Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos Image */}
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid  p-4 "
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
