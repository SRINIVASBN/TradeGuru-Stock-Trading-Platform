import React from "react";
import './LeftSection.css';

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  singleLink
}) {
  // ✅ Define it before return
  const imgBoxStyle = imageURL?.includes("kiteconnect.svg")
    ? { marginLeft: "-30px", marginTop: "90px" }         //this is for Kpi connect
    : { marginLeft: "-50px" ,marginTop: "-20px" };      //this is for console

  return (
    <div className="container" style={{ color: "#424242", fontFamily: "Inter, serif", marginRight: "100px" }}>
      <div className="row">
        <div className="col-6" style={{ paddingLeft: "100px", paddingRight: "100px", paddingTop: "150px" }}>
          <h1 className="mb-4">{productName}</h1>
          <p style={{ lineHeight: "2" }}>{productDescription}</p>

          {learnMore ? (
            <div className="fw-semibold d-flex" style={{ gap: "60px", marginBottom: "30px" }}>
              <a href={learnMore} className="footer-div zoom-img">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ) : singleLink ? (
            <div className="fw-semibold" style={{ marginBottom: "30px" }}>
              <a href={singleLink} className="footer-div zoom-img">
                Kite Connect <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ) : null}
        </div>

        {/* ✅ image block with conditional styling */}
        {imageURL && (
          <div className="col-6 zoom-img" style={imgBoxStyle}>
            <img src={imageURL} alt={productName} />
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSection;
