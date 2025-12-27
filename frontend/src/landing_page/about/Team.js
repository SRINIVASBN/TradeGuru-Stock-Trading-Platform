
import React, { useState } from 'react';
import './HeroSection.css'; // Using About_Hero class from here
import './Team.css'; 

function Team() {
  const [showBio, setShowBio] = useState(false);
  const toggleBio = () => setShowBio(!showBio);
  return (
    <div className="container" style={{ marginTop: '100px',color: '#424242',fontFamily: 'Inter, serif',marginBottom: '100px',padding: "0px 100px 0px 100px"}}>
      {/* Row 1: Heading */}
      <div className="row text-center mb-5">
        <h2 className="fw-semibold">People</h2>
      </div>

      {/* Row 2: Image and Info */}
      <div className="row " style={{marginTop:"70px"}} >
        {/* Column 1: Image and name */}
        <div className="col-6 text-center img-link" style={{paddingLeft:"150px"}} >
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-3 " 
            style={{ width: '300px', height: '300px', objectFit: 'cover',border: '2.5px solid #387ED1' }}
          />
          <h5 className="fw-medium">SRINIVAS BN</h5>
          <p className="text-muted">Founder, CEO</p>
           {/* Dropdown toggle */}
          <button onClick={toggleBio} style={{ cursor: 'pointer', fontWeight: '600' }} className="bio-button">
            Bio&nbsp;
            {showBio ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </button>

          {/* Conditionally visible bio text */}
          {showBio && (
            <p className="text-center " style={{lineHeight: "1.6" }}>
              Nithin is a visionary entrepreneur who leads Zerodha. He enjoys simplifying finance and building strong, tech-driven platforms.
            </p>
          )}
        </div>

        {/* Column 2: Description */}
        <div className="col-6" style={{ lineHeight: "1.8"}}>
          <p className='pb-2'>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className='pb-2'>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className='pb-2'>Playing basketball is his zen.</p>
          <p className='pb-2'>
            Connect on{' '}
            <a href="https://nithinkamath.me/" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold">
              Homepage
            </a>{' '}
            /{' '}
            <a href="https://tradingqna.com/u/nithin/summary" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold">
              TradingQnA
            </a>{' '}
            /{' '}
            <a href="https://twitter.com/Nithin0dha" target="_blank" rel="noopener noreferrer" className="About_Hero fw-semibold">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
