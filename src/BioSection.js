import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export default function BioSection() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h1 className="headingIntro">India's Leading Creative Platform</h1>
          <p className="headingdisc">
            Experience hassle free bookings. Trusted by 2500+ Customers
          </p>
          <form class="subscribe_form">
            <div className="input-group">
              <input
                type="text"
                className="form-control inputField mt-1"
                name="email"
                placeholder="Search service, blog and many more..."
                style={{ paddingRight: "80px" }}
              />
              <span className="input-group-btn">
                <button className="searchbtn mt-1" type="button">
                  Search
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
