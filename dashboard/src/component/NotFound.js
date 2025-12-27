import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <>
      
      <div className="container " style={{ fontFamily: 'Inter, serif', color: '#424242',margin:"60px 0 100px 200px" }}>
        <div className="row align-items-center">
          {/* Left side - error text */}
          <div style={{paddingLeft:"100px"}}>
            <h1 style={{fontSize:"45px",color:"#DF4949"}}>404</h1>
            <h3 style={{fontSize:"25px"}}>Sorry, the page you are looking for doesn't exist.</h3>
            <p style={{fontSize:"20px"}}>Please check the URL or go back to the home page.</p>

            <Link
              to="/"
              style={{fontSize:"25px",color:"#DF4949"}}
              
            >
              Back to Home
            </Link>
          </div>

          {/* Right side - image */}
          <div>
            <img
              src="media/images/NotFound.png"
              alt="Not Found Illustration"
              className="img-fluid "
                style={{marginLeft:"100px",paddingTop:"0px",width: "75%"}}
        
            />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default NotFound;
