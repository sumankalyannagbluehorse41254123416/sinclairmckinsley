// "use client";

// import React from "react";

// interface Container {
//   icon: string;
//   alt: string;
//   title: string;
//   description: string;
// }

// const services: Container[] = [
//   {
//     icon: "https://wip.tezcommerce.com:3304/admin/module/70/1691672613032.png",
//     alt: "Stress free icon",
//     title: "Stress free",
//     description:
//       "We are friendly and approachable; you can talk to us about anything, stress will be a thing of the past",
//   },
//   {
//     icon: "https://wip.tezcommerce.com:3304/admin/module/70/1691672677362.png",
//     alt: "Helpful & informative icon",
//     title: "Helpful & informative",
//     description:
//       "We have a Customer Services Manager to help you every step of the way; jargon busting accountancy speak, helping you in meetings and keeping you informed",
//   },
//   {
//     icon: "https://wip.tezcommerce.com:3304/admin/module/70/1691672980378.png",
//     alt: "Saving you money icon",
//     title: "Saving you money",
//     description:
//       "We research all sorts of solutions to make sure every penny you can save, you do save",
//   },
//   {
//     icon: "https://wip.tezcommerce.com:3304/admin/module/70/1691673004043.png",
//     alt: "Making you money icon",
//     title: "Making you money",
//     description:
//       "We are growth focused and forward thinking. You set your personal and business goals and we will make sure everything is in place for you to achieve them",
//   },
// ];

// export default function HeaderContainer() {
//   return (
//     <section id="over_div">
//       <div className="container">
//         <div className="row">
//           {services.map((service, index) => (
//             <div className="col-lg-3 col-sm-12" key={index}>
//               <div className="services over_banner">
//                 <div className="icon">
//                   <img src={service.icon} alt={service.alt} />
//                 </div>
//                 <div className="details_read_more">
//                   <h6>{service.title}</h6>
//                   <p>{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface HeaderContainerProps {
  subsections: Subsection[];
}

export default function HeaderContainer({ subsections }: HeaderContainerProps) {
  return (
    <section id="over_div">
      <div className="container">
        <div className="row services_over_banner_responsive">
          {subsections.map((item) => (
            <div className="col-lg-3 col-sm-12" key={item.id}>
              <div className="services over_banner">
                <div className="icon">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="details_read_more">
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                {/* <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.description }} /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
