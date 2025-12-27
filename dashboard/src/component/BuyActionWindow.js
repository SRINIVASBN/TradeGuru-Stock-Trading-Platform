// 📁 BuyActionWindow.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";        //this is named export 
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="containerClass" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend style={{color:"#402415ff",fontWeight:"500"}} >Qty</legend>
            <input type="number" name="qty" id="qty" />
          </fieldset>

          <fieldset>
            <legend style={{color:"#402415ff",fontWeight:"500"}}>Price</legend>
            <input type="number" name="price" id="price" step="0.05" />
          </fieldset>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <Link className="btn btn-blue" to="">
              Buy
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
