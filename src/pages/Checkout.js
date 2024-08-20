import React from "react";
/* import Navbar from "../components/Navbar";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../components/Redux/reducer";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";*/
import { useCart } from "react-use-cart"; 
import "../components/css/checkout.css";
/* import { LuCalendarDays } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { IoChatboxSharp } from "react-icons/io5";

 */
function Checkout(props) {
const {
    cartTotal,
  } = useCart();

  return (
    <div className="pay">
      <div className="paybox">
        <div className="paybox1">
          <div className="containpay">
            <h1 >$ {cartTotal}</h1>
          <div className="tot">
            <div>
              <p>Commission</p>
              <p>$1.99</p>
            </div>
            <div>
              <p>Total</p>
              <p>$ {cartTotal + 1.99}</p>
            </div>
          </div>
          <div className="linew"></div>
          <div>
            <div className="lineup">
              <p><span></span>Invoice ID</p>
              <p>SN656466884</p>
            </div>
            <div className="lineup">
            <p><span></span>Next Payment:</p>
              <p>22 july 2025</p>
            </div>
          </div>
          <div className="cust">
            <div>
              <p>Customer Service:</p>
            <p>online chat 24/7</p>
            </div>
            <div className="botchat">
              
            </div>
          </div>
          </div>
        </div>
        <div className="paybox2">
          

        </div>
      </div>
    </div>
  );
}

export default Checkout;
