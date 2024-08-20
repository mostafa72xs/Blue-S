import React from "react";
import "./css/footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h2 className="icon">BLUE S</h2>
        <p>Email:info@domain.com</p>
        <p>Phone: +1-012-3456-789</p>
      </div>
      <div>
        <h1>Products</h1>
        <ul>
          <li>
            <a href="/">Prices drop</a>
          </li>
          <li>
            <a href="/">Best Sales</a>
          </li>
          <li>
            <a href="/">New Products</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>OUR COMPANY</h1>
        <ul>
          <li>
            <a href="/">Delivery</a>
          </li>
          <li>
            <a href="/">Legal Notice</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Secure Payment</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
        </ul>
      </div>
      <div className="sal">
        <h1>GET IN TOUCH</h1>
        <p>Subscribe to our newsletter to get exclusive discounts</p>
        <input
          type="email"
          className="inputemail"
          placeholder="your email address"
        />
        <br />
        <span>
          You may unsubscribe at any moment. For that purpose, please find our
          contact info in the legal notice.
        </span>
      </div>
    </div>
  );
}

export default footer;
