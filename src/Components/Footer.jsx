import React, { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
import {
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`container-fluid ${
        theme == "light" ? "bg-light text- dark" : "bg-dark text-light"
      } `}
    >
      <div className="Footer" style={{ height: "350px", marginLeft: "200px", padding:'20px' }}>
        <div className="row">
          <div className="col ">
            <h4>India's #1</h4>
            <p>Largest Auto Portal</p>
            <h3>About Car Wale</h3>
            <p>
              About
              <br />
              Careers With Us
              <br />
              Terms & Conditions
              <br />
              Privacy Policy
              <br />
              Corporate Policies Investors <br />
              FAQs
            </p>
          </div>
          <div className="col">
            <h3>Car Sold</h3>
            <p>Every Four Minute</p>
            <h3>Connect With Us</h3>
            <p>
              Feedback
              <br />
              Contact Us
              <br />
              Advertise with Us
              <br />
              Become Partner Dealer
            </p>
            <h3>Connect:</h3>
            <FaInstagramSquare />
            <FaTwitter />
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedin />
          </div>
          <div className="col">
            <h3>Offer</h3>
            <p>Stay updated pay less</p>

            <h3>Others</h3>
            <p>
              TrucksDekho
              <br />
              TyreDekho
              <br />
              TractorsDekho
              <br />
              Girnar Vision Fund
              <br />
              Emergency Response
              <br />
              Car Sales Trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
