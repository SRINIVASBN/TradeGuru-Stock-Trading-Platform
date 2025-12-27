import React from 'react';
import HeroSection from './HeroSection';
import SegmentTabs from './SegmentTabs';
import  Charges from './Charges';
import OpenAccount from '../OpenAccount';

function PricingPage() {
  return (
    <>
      <HeroSection />
      <SegmentTabs/>
      <Charges/>
      <OpenAccount/>
      
    </>
  );
}

export default PricingPage;
