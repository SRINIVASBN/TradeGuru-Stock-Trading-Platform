import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="container" style={{ color: '#424242', fontFamily: 'Inter, serif' }}>
      {/* Row 1 */}
      <div className="row   text-center  row-1 " style={{ margin: "0px 38px", padding: "100px 0px" }}>
        <div >
          <h2 style={{ lineHeight: "1.5",fontWeight:"600" }}>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row row-2 border-top border-2 " style={{ paddingTop: "80px",marginBottom: '3rem' ,marginLeft:"200px",marginRight:"200px",}}>
        {/* Column 1 */}
        <div className="col-6 " style={{ lineHeight: "2" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>
          <p> 
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-6" style={{ lineHeight: "2" }} >
          <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <br />
          <p  style={{ marginTop: "-30px"}} ><a href="https://rainmatter.com/" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold" style={{ color: "#387ED1" }}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
          <br />
          <p style={{ marginTop: "-30px"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="https://zerodha.com/z-connect" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold" style={{ color: "#387ED1" }}>blog</a> or see what the media is <a href="https://zerodha.com/media" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold" style={{ color: "#387ED1" }}>saying about us</a> or learn more about our business and product <a href="https://zerodha.com/about/philosophy/" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold" style={{ color: "#387ED1" }}>philosophies</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
