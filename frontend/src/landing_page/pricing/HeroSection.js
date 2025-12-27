import React from 'react';



function HeroSection() {
  return (
    <div className="container" style={{ color: '#424242', fontFamily: 'Inter, serif' }}>
      {/* Row 1 */}
      <div className="row   text-center  row-1 " style={{ margin: "100px" }}>
        <div >
          <h1 style={{ fontWeight:"600",fontSize:"44px" }} >
            Charges
          </h1>
          <p style={{fontSize:"20px",margin:"10px 0 15px",color:"#9B9B9B" }} >
            List of all charges and taxes
          </p>

        </div>
      </div>

      {/* Row 2 */}
      <div className="row" style={{ margin: "100px" }}>

        {/* Column 1 */}
        <div className="col-4 text-center" >
           <img src="media/images/pricing-eq.svg" alt="Awards"className="img-fluid w-75 mx-auto d-block"/>
          <h2 className='text-center' style={{margin:"30px 0 20px 0",fontSize:"28px",fontWeight:"500"}}>
            Free equity delivery
          </h2>
          <p style={{ lineHeight: "2",color:"#9B9B9B"}}> 
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Column 2 */}

        <div className="col-4 text-center" >
           <img src="media/images/other-trades.svg" alt="Awards"className="img-fluid w-75 mx-auto d-block "/>
          <h2 className='text-center' style={{margin:"30px 0 20px 0",fontSize:"28px",fontWeight:"500"}}>
            Intraday and F&O trades
          </h2>
          <p style={{ lineHeight: "2",color:"#9B9B9B"}}> 
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Column 3*/}
        <div className="col-4 text-center" >
           <img src="media/images/pricing-eq.svg" alt="Awards"className="img-fluid  w-75 mx-auto d-block"/>
          <h2  style={{margin:"30px 0 20px 0",fontSize:"28px",fontWeight:"500"}}>
            Free direct MF
          </h2>
          <p style={{ lineHeight: "2",color:"#9B9B9B"}}> 
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default HeroSection;
