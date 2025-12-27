import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div style={{ borderTop: "1px solid #dee2e6", backgroundColor: "#F8F8FD", marginTop: "30px" }}>
      <div className="container w-95 pt-5" style={{ fontFamily: "Inter, serif", color: "#424242", width: '74%' }}>
        <div className="row">
          <div className="col-3" style={{ paddingRight: "100px" }}>
            <img src="media/images/logo.svg" alt="Logo" style={{ maxWidth: "80%" }} />
            <p className="mt-3" style={{ fontSize: "1rem" }}>
              © 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            <div className="d-flex flex-column ">
              <div className="d-flex mt-3 mb-3" style={{ fontSize: "23px", gap: "35px" }}>
                <a href="https://www.facebook.com/zerodha.social" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f footer-icon"></i>
                </a>
                <a href="https://twitter.com/zerodhaonline" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter footer-icon"></i>
                </a>
                <a href="https://instagram.com/zerodhaonline" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram footer-icon"></i>
                </a>
                <a href="https://linkedin.com/company/zerodha" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in footer-icon"></i>
                </a>
              </div>

              <hr className="my-1" style={{ width: "130%" }} />

              <div className="d-flex gap-4 mt-3" style={{ fontSize: "23px" }}>
                <a href="https://zerodha.com/static/images/youtube.svg">
                  <i className="fab fa-youtube footer-icon"></i>
                </a>
                <a href="https://zerodha.com/static/images/whatsapp-logo.svg">
                  <i className="fab fa-whatsapp footer-icon" style={{marginLeft:"5px"}}></i>
                </a>
                <a href="https://t.me/zerodhain">
                  <i className="fab fa-telegram-plane footer-icon" style={{marginLeft:"10px"}}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Account Links */}
          <div className="col">
            <h5 className="fw-semibold">Account</h5>
            <ul className="list-unstyled mt-3" style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#666666", fontSize: "15px" }}>
              <li><a href="#" className="footer-link">Open demat account</a></li>
              <li><a href="#" className="footer-link">Minor demat account</a></li>
              <li><a href="#" className="footer-link">NRI demat account</a></li>
              <li><a href="#" className="footer-link">Commodity</a></li>
              <li><a href="#" className="footer-link">Dematerialisation</a></li>
              <li><a href="#" className="footer-link">Fund transfer</a></li>
              <li><a href="#" className="footer-link">MTF</a></li>
              <li><a href="#" className="footer-link">Referral program</a></li>
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div className="col">
            <h5 className="fw-semibold">Support</h5>
            <ul className="list-unstyled mt-3" style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px" }}>
              <li><a href="#" className="footer-link">Contact us</a></li>
              <li><a href="#" className="footer-link">Support portal</a></li>
              <li><a href="#" className="footer-link">How to file a complaint?</a></li>
              <li><a href="#" className="footer-link">Status of your complaints</a></li>
              <li><a href="#" className="footer-link">Bulletin</a></li>
              <li><a href="#" className="footer-link">Circular</a></li>
              <li><a href="#" className="footer-link">Z-Connect blog</a></li>
              <li><a href="#" className="footer-link">Downloads</a></li>
            </ul>
          </div>

          {/* Column 4 - Company Links */}
          <div className="col">
            <h5 className="fw-semibold">Company</h5>
            <ul className="list-unstyled mt-3" style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px" }}>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Philosophy</a></li>
              <li><a href="#" className="footer-link">Press & media</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Zerodha Cares (CSR)</a></li>
              <li><a href="#" className="footer-link">Zerodha.tech</a></li>
              <li><a href="#" className="footer-link">Open source</a></li>
            </ul>
          </div>

          {/* Column 5 - Quick Links */}
          <div className="col">
            <h5 className="fw-semibold">Quick links</h5>
            <ul className="list-unstyled mt-3" style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px" }}>
              <li><a href="#" className="footer-link">Upcoming IPOs</a></li>
              <li><a href="#" className="footer-link">Brokerage charges</a></li>
              <li><a href="#" className="footer-link">Market holidays</a></li>
              <li><a href="#" className="footer-link">Economic calendar</a></li>
              <li><a href="#" className="footer-link">Calculators</a></li>
              <li><a href="#" className="footer-link">Markets</a></li>
              <li><a href="#" className="footer-link">Sectors</a></li>
            </ul>
          </div>

          <div className="text-muted mt-5" style={{ fontSize: "13px" }}>
            <div>
              <p>
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 
                CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 
                Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 
                Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
                J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking 
                please write to <a href="complaints@zerodha.com" className="footer-div fw-semibold">complaints@zerodha.com,</a> for DP related to 
                <a href="dp@zerodha.com" className="footer-div fw-semibold"> dp@zerodha.com</a>. Please ensure you carefully read the Risk 
                Disclosure Document as prescribed by SEBI | ICF
              </p>
            </div>
            <div>
              <p>
                Procedure to file a complaint on <a href="https://scores.sebi.gov.in/" className="footer-div fw-semibold">SEBI SCORES:</a> 
                Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, 
                E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
              </p>
            </div>
            <div>
              <p>
                <a href="https://smartodr.in/" className="footer-div fw-semibold">Smart Online Dispute Resolution </a> | 
                <a href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" className="footer-div fw-semibold"> Grievances Redressal Mechanism</a>
              </p>
            </div>
            <div>
              <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            </div>
            <div>
              <p>
                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the 
                depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / 
                depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 
                3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
              </p>
            </div>
            <div>
              <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. 
                Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. 
                Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is 
                done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process 
                again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need 
                to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank 
                to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. 
                As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find 
                anyone claiming to be part of Zerodha and offering such services, please 
                 {' '}<a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha" className="footer-div fw-semibold">create a ticket here.</a>
              </p>
            </div>
          </div>

          <ul className="list-unstyled d-flex flex-wrap gap-4 mt-3 mb-3" style={{ marginLeft: "50px", fontSize: "14px", fontWeight: "500" }}>
            <li><a href="https://nseindia.com/" className="footer-bottom text-muted">NSE</a></li>
            <li><a href="https://www.bseindia.com/" className="footer-bottom text-muted">BSE</a></li>
            <li><a href="https://www.mcxindia.com/" className="footer-bottom text-muted" target="_blank" rel="noopener noreferrer">MCX</a></li>
            <li><a href="https://zerodha.com/terms-and-conditions/" className="footer-bottom text-muted" target="_blank" rel="noopener noreferrer">Terms & conditions</a></li>
            <li><a href="https://zerodha.com/policies-and-procedures/" className="footer-bottom text-muted" target="_blank" rel="noopener noreferrer">Policies & procedures</a></li>
            <li><a href="https://zerodha.com/privacy-policy/" className="footer-bottom text-muted" target="_blank" rel="noopener noreferrer">Privacy policy</a></li>
            <li><a href="https://zerodha.com/disclosure/" className="footer-bottom text-muted">Disclosure</a></li>
            <li><a href="https://zerodha.com/investor-attention/" className="footer-bottom text-muted">For investor's attention</a></li>
            <li><a href="https://zerodha.com/tos/investor-charter/" className="footer-bottom text-muted" target="_blank" rel="noopener noreferrer">Investor charter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;