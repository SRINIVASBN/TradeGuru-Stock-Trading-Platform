import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './home/HeroSection.css'; 

function NotFound() {
  return (
    <>
      <Navbar />
      <div className="container " style={{ fontFamily: 'Inter, serif', color: '#424242',margin:"60px 0px 60px 200px" }}>
        <div className="row align-items-center">
          {/* Left side - error text */}
          <div className="col-6 text-center text-md-start " style={{paddingLeft:"1px"}}>
            <h1 className="fw-bold display-3">404</h1>
            <h3 className="mt-3">Sorry, the page you are looking for doesn't exist.</h3>
            <p className="fs-5 mt-3">Please check the URL or go back to the home page.</p>

            <Link
              to="/"
              className="custom-btn fs-5 mt-5"
              
            >
              Back to Home
            </Link>
          </div>

          {/* Right side - image */}
          <div className="col-6 text-center ">
            <img
              src="media/images/NotFound.png"
              alt="Not Found Illustration"
              className="img-fluid "
                style={{marginLeft:"-175px",paddingTop:"0px",width: "60%"}}
        
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
