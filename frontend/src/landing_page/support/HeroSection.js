import React from "react";
import "./HeroSection.css";

function CreateTickets() {
  return (
    <div style={{ backgroundColor: "#387ED1", color: "#ffffff " }}>
      <div
        className="container"
        style={{
          fontSize: "16px",
          fontFamily: "Inter, serif",
          padding: "30px 0 70px 0 ",
        }}
      >
        <div className="row pt-5">
          <div
            className="col-3"
            style={{
              paddingLeft: "100px",
              fontSize: "20.4px",
              color: "#ffffff !important",
            }}
          >
            <a className="a-1" href="/support">
              Support Portal
            </a>
          </div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-3" style={{ paddingLeft: "120px" }}>
            <a className="a-2" href="#">
              Track tickets
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-7"
            style={{ paddingLeft: "100px", paddingRight: "30px" }}
          >
            <h4>
              Search for an answer or browse help topics to create a ticket
            </h4>

            <div
              className="input-group"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "150px",
                marginTop: "30px",
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                style={{
                  padding: "14px 18px",
                  border: "none",
                  fontSize: "16px",
                  borderRadius: "150px 0 0 150px",
                }}
              />

              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#ffffff",
                  paddingRight: "30px",

                  borderRadius: "0 150px 150px 0",
                }}
              >
                <i
                  className="fas fa-search"
                  style={{ color: "#387ED1", fontSize: "22px" }}
                ></i>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: "45px",
                marginTop: "20px",
                flexWrap: "wrap",
                marginTop: "40px",
              }}
            >
              <a href="#" className="a-2">
                Track account opening
              </a>
              <a href="#" className="a-2">
                Track segment activation
              </a>
              <a href="#" className="a-2">
                Intraday margins
              </a>
              <a href="#" className="a-2" style={{ marginTop: "-20px" }}>
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-5">
            <p style={{ fontSize: "20.4px" }}>Featured</p>

            <div style={{ marginLeft: "20px" }}>
              {/* Only this pair zooms when hovered */}
              <div className="hover-pair" style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    display: "inline-block",
                    color: "white",
                    marginRight: "6px",
                  }}
                >
                  1.
                </p>
                <a href="#" className="a-3">
                  Surveillance measure on scrips - June 2025
                </a>
              </div>

              {/* Only this pair zooms when hovered */}
              <div className="hover-pair">
                <p
                  style={{
                    display: "inline-block",
                    color: "white",
                    marginRight: "6px",
                  }}
                >
                  2.
                </p>
                <a href="#" className="a-3">
                  Latest Intraday leverages and Square-off timings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTickets;
