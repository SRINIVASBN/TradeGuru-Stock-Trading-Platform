import React from 'react';
import "./Stats.css"
function Stats() {
  return (
    <div className="container p-0" style={{ marginTop: "150px", color: "#424242", fontFamily: "Inter, serif" }} >
      {/* All text inside here will inherit #424242 */}
      <div className="row">

        {/* Left Text */}
        <div className="col-6" style={{ padding: "0 120px" }}>
          <h2 className="fw-bold mb-5">Trust with confidence</h2>

          <div className="mb-5">
            <h5 className="fw-semibold mb-2">Customer-first always</h5>
            <p className='text-muted'>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
              investments and contribute to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold mb-2">No spam or gimmicks</h5>
            <p className='text-muted'>
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
              that you use at your pace, the way you like.{" "}
              <a href="https://www.w3schools.com" className='fw-semibold link'>Our philosophies.</a>
            </p>
          </div>

          <div className="mb-5">
            <h5 className="fw-semibold mb-2">The Zerodha universe</h5>
            <p className='text-muted'>
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
              you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h5 className="fw-semibold mb-2">Do better with money</h5>
            <p className='text-muted'>
              With initiatives like 
              {" "}<a href="https://www.w3schools.com" className='fw-semibold link'>Nudge</a> and{" "}
              <a href="https://www.w3schools.com" className='fw-semibold link'>Kill Switch</a>, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid"
          />
          <div>
            <a href="https://www.w3schools.com" className='fw-semibold link' style={{ marginRight: "50px",marginLeft: "150px" }}>
              Explore our products <i className="fa-solid fa-arrow-right-long "></i>
            </a>
            <a href="https://www.w3schools.com" className='fw-semibold link'> 
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
