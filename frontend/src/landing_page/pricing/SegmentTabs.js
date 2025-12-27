import React, { useState } from 'react';
import Equity from './tables/Equity';
import Currency from './tables/Currency';
import Commodity from './tables/Commodity';
import './SegmentTabs.css'; // for tab-btn and active styles

function SegmentTabs() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("equity")}
          className={`tab-btn ${activeTab === 'equity' ? 'active' : ''}`}
        >
          Equity
        </button>

        <button
          onClick={() => setActiveTab("currency")}
          className={`tab-btn ${activeTab === 'currency' ? 'active' : ''}`}
        >
          Currency
        </button>

        <button
          onClick={() => setActiveTab("commodity")}
          className={`tab-btn ${activeTab === 'commodity' ? 'active' : ''}`}
        >
          Commodity
        </button>
      </div>

      {/* Conditionally render the table */}
      <div className="table-section">
        {activeTab === "equity" && <Equity />}
        {activeTab === "currency" && <Currency />}
        {activeTab === "commodity" && <Commodity />}
      </div>
    </div>
  );
}

export default SegmentTabs;
