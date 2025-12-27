import React from "react";
import "../home/HeroSection.css";    // for botton button
import "./Universe.css";            //for image zoom out and text 


function Universe() {
  return (
    <div className="container" style={{ color: "#424242", fontFamily: "Inter, serif", marginTop: "100px" }}>
      <div className="text-center mb-4">
        <p style={{ fontSize: "20px" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/" target="_blank" rel="noopener noreferrer" className="zerodha-tech-link">Zerodha.tech</a>{" "}blog.
        </p>
        <h2 style={{ marginTop: "100px", fontWeight: "600" }}>The Zerodha Universe</h2>
        <p className="mt-4">Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      <div className="row d-flex justify-content-center gap-4 text-center" style={{ marginTop: "100px" }}>
        <div className="col-md-3">
          <a href="https://zerodhafundhouse.com" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
            <img src="media/images/zerodhafundhouse.png" alt="Zerodha Fund House" className="img-fluid" style={{ width: "250px", height: "auto", marginBottom: "10px" }} />
            <p className="text-muted" style={{ fontSize: "12px", marginTop: "10px", paddingLeft: "30px", paddingRight: "30px" }}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://sensibull.com/" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
            <img src="media/images/sensibull-logo.svg" alt="Sensibull" className="img-fluid" style={{ width: "270px", height: "auto", marginTop: "10px" }} />
            <p className="text-muted" style={{ fontSize: "12px", marginTop: "30px", paddingLeft: "15px", paddingRight: "15px" }}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://tijorifinance.com/" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
            <img src="media/images/tijori.svg" alt="Tijori" className="img-fluid" style={{ width: "200px", height: "auto" }} />
            <p className="text-muted" style={{ fontSize: "12px", marginTop: "10px", paddingLeft: "55px", paddingRight: "55px" }}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
          </a>
        </div>
      </div>

      <div className="row d-flex justify-content-center gap-4 mb-4 text-center" style={{ marginTop: "70px" }}>
        <div className="col-md-3">
          <a href="https://streak.tech/" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
           <img src="media/images/streak-logo.png" alt="Streak" className="img-fluid" style={{ width: "220px", height: "auto", marginBottom: "10px" }} />
           <p className="text-muted" style={{ fontSize: "12px", marginTop: "15px", paddingLeft: "55px", paddingRight: "55px" }}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://www.smallcase.com/" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
            <img src="media/images/smallcase-logo.png" alt="Smallcase" className="img-fluid" style={{ width: "250px", height: "auto", marginBottom: "10px" }} />
            <p className="text-muted" style={{ fontSize: "12px", marginTop: "20px", paddingLeft: "55px", paddingRight: "55px" }}>Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.</p>
          </a>
        </div>
        <div className="col-md-3">
          <a href="https://joinditto.in/" target="_blank" rel="noopener noreferrer" className="universe-img-link ">
           <div>
              <img src="media/images/ditto-logo.png" alt="Ditto" className="img-fluid" style={{ width: "150px", height: "auto", marginBottom: "10px" }} />
              <p className="text-muted" style={{ fontSize: "12px", marginTop: "26px", paddingLeft: "55px", paddingRight: "55px" }}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="text-center" style={{ margin: "30px 0 100px 0" }}>
        <button className="custom-btn mt-4 fs-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
