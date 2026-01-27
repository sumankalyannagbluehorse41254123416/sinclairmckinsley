"use client";

import React from "react";
import GoogleReviews from "./GoogleReviews";

const ClientReview: React.FC = () => {
  return (
    <section className="clients_wrap">
      <img className="bg_img" src="../asset/asdsadsad.png" alt="Background" />
      <span className="cl_shape"></span>

      <div className="cl_inner">
        <div className="cl_left">
          <h3>Client Speak</h3>
        </div>

        <img src="../asset/sinclar_mike.jpg" alt="Client" />

        <section id="testim" className="testim">
          <div className="wrap">
            {/* Google Reviews Component */}
            <GoogleReviews />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ClientReview;
