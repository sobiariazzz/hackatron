import React from "react";

import "./index.scss";
import UnderlinedButton from "../underlined-button.dart";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="main-content">
          <div className="location">
            <div>400 University Drive Suite 200</div>
            <div>Gables,</div>
            <div>FL 33134 USA</div>
          </div>
          <div className="links">
            <li style={{ color: "#9f9f9f" }}>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <div className="links">
            <li style={{ color: "#9f9f9f" }}>Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </div>
          <div className="email-info">
            <li style={{ color: "#9f9f9f" }}>News Letter</li>
            <div className="email">
              <div>
                <UnderlinedButton
                  name="Enter Your Email Address"
                  color="#9f9f9f"
                  fontsize="14px"
                  lineWidth="170px"
                  lineHeight="1px"
                />
              </div>

              <div className="subscribe">
                <UnderlinedButton
                  name="SUBSCRIBE"
                  fontsize="14px"
                  lineHeight="1px"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="dashed"></hr>
        <div className="credits">
          <h4>2022 Meubel House. All rights reverved</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
