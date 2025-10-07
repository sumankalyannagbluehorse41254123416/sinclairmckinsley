"use client";

import React from "react";
import Script from "next/script";

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
            {/* Google Reviews widget container */}
            <div
              className="sk-ww-google-reviews"
              data-embed-id="25448665"></div>

            {/* Load widget script */}
            <Script src="../widget.js" strategy="lazyOnload" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ClientReview;
