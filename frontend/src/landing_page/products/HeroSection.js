import React from 'react';
import '../Footer.css';
function HeroSection() {
  return (
    <div className='container text-center border-bottom' style={{ color: '#424242', fontFamily: 'Inter, serif' ,marginTop:"100px", marginBottom:"100px", paddingBottom: "100px",}}>
      <h1 style={{fontWeight:"600"}}>Zerodha Products</h1>
      <p style={{fontSize:"20px"}}>Sleek, modern, and intuitive trading platforms</p>
      <p >Check out our <a href="https://www.w3schools.com" className='fw-semibold footer-div'> investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>

    
    </div>
  );
}

export default HeroSection;
