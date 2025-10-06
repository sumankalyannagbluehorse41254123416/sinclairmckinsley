// "use client";

// import React from "react";

// const Industries: React.FC = () => {
//   return (
//     <section>
//       <div className="header_information">
//         <h2>Industries</h2>
//         <p>
//           At Sinclair McKinsley, we understand that each industry possesses its
//           unique financial intricacies and challenges. Our comprehensive
//           accounting solutions are tailored to address the specific needs of
//           diverse sectors. Whether you're in healthcare, technology,
//           manufacturing, or any other industry, our expertise goes beyond
//           numbers – we empower your business with insights and strategies that
//           drive success. Explore how our industry-focused approach can elevate
//           your financial management to new heights.
//         </p>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <a
//                 data-bs-toggle="modal"
//                 href="#exampleModalToggle0"
//                 role="button">
//                 <div className="services_icon">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/70/1691675207218.png"
//                     alt="Manufacturing icon"
//                   />
//                 </div>
//                 <h6>Manufacturing and distribution</h6>
//                 <p>
//                   Manufacturing remains one of the key industries for the UK. In
//                   its various guises the UK manufacturing industry employs
//                   almost three million people, contributes approximately half of
//                   UK exports, two thirds of business research and development -
//                   and the UK is currently the eleventh largest manufacturing
//                   location in the world.
//                 </p>
//               </a>
//             </div>
//           </div>

//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <a
//                 data-bs-toggle="modal"
//                 href="#exampleModalToggle0"
//                 role="button">
//                 <div className="services_icon">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/70/1691675207218.png"
//                     alt="Manufacturing icon"
//                   />
//                 </div>
//                 <h6>Manufacturing and distribution</h6>
//                 <p>
//                   Manufacturing remains one of the key industries for the UK. In
//                   its various guises the UK manufacturing industry employs
//                   almost three million people, contributes approximately half of
//                   UK exports, two thirds of business research and development -
//                   and the UK is currently the eleventh largest manufacturing
//                   location in the world.
//                 </p>
//               </a>
//             </div>
//           </div>

//           {/* Modal */}
//           <div
//             className="modal popup_all fade"
//             id="exampleModalToggle0"
//             aria-labelledby="exampleModalLabel"
//             aria-hidden="true">
//             <div className="modal-dialog">
//               <div className="modal-content popup_main">
//                 <div className="modal_head">
//                   <h5
//                     className="modal-title text-center"
//                     id="exampleModalLabel">
//                     Manufacturing and distribution
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close cross"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body details_body">
//                   <div className="services_icon back_color">
//                     <img
//                       src="https://wip.tezcommerce.com:3304/admin/module/70/1691675207218.png"
//                       alt="Manufacturing and distribution"
//                       width="80px"
//                       height="60px"
//                     />
//                   </div>
//                   <p>
//                     Manufacturing remains one of the key industries for the UK.
//                     In its various guises the UK manufacturing industry employs
//                     almost three million people, contributes approximately half
//                     of UK exports, two thirds of business research and
//                     development - and the UK is currently the eleventh largest
//                     manufacturing location in the world.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;
// "use client";

// import React from "react";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   slug: string;
// }

// interface IndustriesSection {
//   id: number;
//   title: string;
//   shortDescription: string;
//   subsections: Subsection[];
// }

// interface IndustriesProps {
//   sectionData: IndustriesSection;
// }

// const Industries: React.FC<IndustriesProps> = ({ sectionData }) => {
//   return (
//     <section>
//       <div className="header_information">
//         <h2>{sectionData?.title}</h2>
//         <div
//           dangerouslySetInnerHTML={{ __html: sectionData?.shortDescription }}
//         />
//       </div>

//       <div className="container">
//         <div className="row">
//           {sectionData?.subsections?.map((item, index) => (
//             <div key={item.id} className="col-lg-4 col-sm-12 up_bottm">
//               <div className="servies_card">
//                 <a
//                   data-bs-toggle="modal"
//                   href={`#exampleModalToggle${index}`}
//                   role="button">
//                   <div className="services_icon">
//                     <img src={item.image} alt={item.title} />
//                   </div>
//                   <h6>{item.title}</h6>
//                   <div dangerouslySetInnerHTML={{ __html: item.description }} />
//                 </a>
//               </div>

//               {/* Modal */}
//               <div
//                 className="modal popup_all fade"
//                 id={`exampleModalToggle${index}`}
//                 aria-labelledby={`exampleModalLabel${index}`}
//                 aria-hidden="true">
//                 <div className="modal-dialog">
//                   <div className="modal-content popup_main">
//                     <div className="modal_head">
//                       <h5
//                         className="modal-title text-center"
//                         id={`exampleModalLabel${index}`}>
//                         {item.title}
//                       </h5>
//                       <button
//                         type="button"
//                         className="btn-close cross"
//                         data-bs-dismiss="modal"
//                         aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body details_body">
//                       <div className="services_icon back_color">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           width="80px"
//                           height="60px"
//                         />
//                       </div>
//                       <div
//                         dangerouslySetInnerHTML={{ __html: item.description }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;

"use client";

import React, { useEffect } from "react";

// Import Bootstrap CSS (required for styles)
import "../public/style/bootstrp.min.css";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface IndustriesSection {
  id: number;
  title: string;
  shortDescription: string;
  subsections: Subsection[];
}

interface IndustriesProps {
  sectionData: IndustriesSection;
}

const Industries: React.FC<IndustriesProps> = ({ sectionData }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap").catch((err) =>
      console.error("Bootstrap JS failed to load", err)
    );
  }, []);

  return (
    <section>
      <div className="header_information">
        <h2>{sectionData?.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: sectionData?.shortDescription }}
        />
      </div>

      <div className="container">
        <div className="row">
          {sectionData?.subsections?.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-sm-12 up_bottm">
              <div className="servies_card">
                <a
                  data-bs-toggle="modal"
                  href={`#exampleModalToggle${index}`}
                  role="button">
                  <div className="services_icon">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h6>{item.title}</h6>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </a>
              </div>

              <div
                className="modal popup_all fade"
                id={`exampleModalToggle${index}`}
                aria-labelledby={`exampleModalLabel${index}`}
                aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content popup_main">
                    <div className="modal_head">
                      <h5
                        className="modal-title text-center"
                        id={`exampleModalLabel${index}`}>
                        {item.title}
                      </h5>
                      <button
                        type="button"
                        className="btn-close cross"
                        data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div className="modal-body details_body">
                      <div className="services_icon back_color">
                        <img
                          src={item.image}
                          alt={item.title}
                          width="80px"
                          height="60px"
                        />
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
