// import React from "react";

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   // link: string;
//   slug: string;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     title: "Professional Accounting Services for Your Financial Success",
//     description:
//       "Are you seeking accurate and reliable accounting solutions to streamline your financial management and drive your business towards success? Look no further. Our dedicated team of seasoned accounting experts is here to provide you with comprehensive accounting services tailored to meet your unique needs.",
//     image: "https://wip.tezcommerce.com:3304/admin/module/70/1691674051617.png",
//     // link: "https://www.sinclairmckinsley.co.uk/personal-tax-services",
//     slug : "personal-tax-services"
//   },
// ];

// export default function OurServices() {
//   return (
//     <section id="our_services">
//       <div className="container">
//         <div className="row">
//           {services.map((service) => (
//             <div key={service.id} className="col-lg-4 col-sm-12 up_bottm">
//               <div className="servies_card">
//                 <div className="services_icon">
//                   <img src={service.image} alt={service.title} />
//                 </div>
//                 <h6>{service.title}</h6>
//                 <p>{service.description}</p>
//                 <div className="learn_more">
//                   <a href={service.slug}>
//                     Learn More{" "}
//                     <i
//                       className="fa fa-long-arrow-right"
//                       aria-hidden="true"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div></div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import React from "react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image_url: string;
}

interface OurServicesProps {
  service: ServiceData;
}

const Peofessional: React.FC<OurServicesProps> = ({ service }) => {
  return (
    <div>
      <div className="services_icon">
        <img src={service.cover_image_url} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: service.description }} />
      <div className="learn_more">
        <Link href={`/service/${service.slug}`}>
          Learn More{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default Peofessional;
