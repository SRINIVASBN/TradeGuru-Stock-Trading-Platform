import React from "react";
import './LeftSection.css'; 
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  singleLink,
  googlePlay,
  appStore,
}) {
   // ✅ Conditional styles
    const containerStyle = imageURL === "media/images/varsity.png"
  ? { color: "#424242", fontFamily: "Inter, serif", margin: "120px 0px 0px 100px" }  // varsity-specific
  : imageURL === "media/images/coin.png"
    ? { color: "#424242", fontFamily: "Inter, serif", margin: "50px 0px 100px 80px" } // coin-specific
    : { color: "#424242", fontFamily: "Inter, serif", margin: "100px 0px 100px 100px" }; // kite-specific




  return (
    <div className="container" style={containerStyle}>
      <div className="row">
        <div className="col-6  zoom-img" style={{paddingLeft:"100px"}}>
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6" style={{ padding: "50px 100px 0 200px" }}>
          <h1 className="mb-4">{productName}</h1>
          <p style={{ lineHeight: "2" }}>{productDescription}</p>
           {tryDemo && learnMore ? (
                <div className="fw-semibold d-flex" style={{ gap: "60px", marginBottom: "30px" }}>
                  <a href={tryDemo} className="footer-div zoom-img">Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                  <a href={learnMore} className="footer-div zoom-img">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            ) : singleLink ? (
                <div className="fw-semibold " style={{marginBottom: "30px" }}>
                  <a href={singleLink} className="footer-div fw-semibold zoom-img">
                    Coin <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
            ) : null}

          <div className="fw-semibold d-flex" style={{ gap: "20px"}}>
          <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3" target="_blank"   rel="noopener noreferrer" className="zoom-img" >
            <img src={googlePlay} alt="Google Play" />
          </a>
          <a href="https://apps.apple.com/in/app/kite-zerodha/id1449453802" target="_blank"   rel="noopener noreferrer" className="zoom-img">
            <img src={appStore} alt="App Store" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
