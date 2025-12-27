import React from 'react';
import HeroSection from './HeroSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
  return (
    <>
      <HeroSection />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com/demo"
        learnMore="https://kite.zerodha.com/learn-more"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo={null}
        learnMore={null}
        singleLink="https://coin.zerodha.com"
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
        imageURL="media/images/kiteconnect.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        singleLink="https://kite.trade"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo={null}
        learnMore={null}
        singleLink={null}
        googlePlay="media/images/googlePlayBadge.svg"
        appStore="media/images/appstoreBadge.svg"
      />



      <Universe />
    </>
  );
}

export default ProductPage;
