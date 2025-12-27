import React from 'react';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className="container p-3" style={{  color: "#424242",fontFamily: "Inter, serif"}}>
        
      <img
        src="media/images/homeHero.png"
        alt="Hero"
        className="img-fluid  w-75 mx-auto d-block"
      />

     <div className="text-center mt-3">
         <h1 className=" fw-semibold	">Invest in everything...</h1>
        <p className="mt-3 fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="custom-btn mt-1 fs-5">Sign up for free</button>
     </div>
    </div>
    
  );
}

export default HeroSection;
