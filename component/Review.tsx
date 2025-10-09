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
            {/* <div
              className="sk-ww-google-reviews"
              data-embed-id="25448665"></div> */}

            {/* Load widget script */}
            {/* <Script src="../widget/widget.js" strategy="lazyOnload" /> */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-67fe637b-d796-44f2-861d-750e7d061636 client_speak"
              data-elfsight-app-lazy></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ClientReview;

// "use client";

// import React from "react";
// import Script from "next/script";
// import Image from "next/image";

// const ClientReview: React.FC = () => {
//   return (
//     <section className="clients_wrap">
//       <div className="clients_container">
//         {/* Background Image */}
//         <Image
//           className="bg_img"
//           src="/asset/asdsadsad.png"
//           alt="Background"
//           fill
//           style={{ objectFit: "cover" }}
//           priority
//         />

//         <span className="cl_shape"></span>

//         <div className="cl_inner">
//           <div className="cl_left">
//             <h3>Client Speak</h3>
//           </div>

//           {/* Client Image */}
//           <Image
//             src="/asset/sinclar_mike.jpg"
//             alt="Client"
//             width={200}
//             height={200}
//             style={{ objectFit: "cover" }}
//           />

//           <section id="testim" className="testim">
//             <div className="wrap">
//               {/* Google Reviews widget container */}
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.12125177664!2d-0.3323235!3d51.584341099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761189b78f4999%3A0x392d9687c8afb9e9!2sSinclair%20McKinsley!5e0!3m2!1sen!2sin!4v1760003752382!5m2!1sen!2sin"
//                 width="600"
//                 height="390"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Maps Location"
//               />
//             </div>
//           </section>
//         </div>

//         {/* Google Maps Embed */}
//       </div>
//     </section>
//   );
// };

// export default ClientReview;
