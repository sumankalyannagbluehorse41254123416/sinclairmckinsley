// "use client";

// import React, { useEffect, useState } from "react";
// import parse from "html-react-parser";
// import { OurServeice } from "@/lib/ourService";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface PageItem {
//   id: number;
//   title: string;
//   shortDescription: string;
//   image: string;
//   subsections: Subsection[];
// }

// interface ApiResponse {
//   status: boolean;
//   pagedata: {
//     id: number;
//     title: string;
//     description: string;
//     cover_image_url: string;
//   };
//   pageItemdataWithSubsection: PageItem[];
// }

// const InheritanceTaxPlanning: React.FC = () => {
//   const [data, setData] = useState<ApiResponse | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await OurServeice("d1ac9b5c-7ef0-46eb-9d55-04e906b3944e");
//         setData(res as ApiResponse);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <section>
//         <div
//           className="servicea_details"
//           style={{
//             backgroundImage: `url(${
//               data.pageItemdataWithSubsection[0]?.image || ""
//             })`,
//             height: "565px",
//           }}
//         />
//         <div className="container">
//           {/* <h1 className="any_one text-center mt-4">{data.pagedata.title}</h1> */}
//           {/* <h1 className="any_one text-center mt-4">{data.pagedata.title}</h1> */}
//         </div>
//       </section>
//       <section className="mt-5">
//         <div className="container">
//           <h1 className="text-center mb-4">
//             {data.pageItemdataWithSubsection[0]?.title || ""}
//           </h1>
//         </div>
//       </section>
//       <section>
//         <div className="container">
//           <div
//             className="pera mt-3"
//             dangerouslySetInnerHTML={{ __html: data.pagedata.description }}
//           />
//         </div>
//       </section>

//       {/* Dynamic Sections */}
//       {data.pageItemdataWithSubsection.map((item) => (
//         <section key={item.id} className="mt-5">
//           <div className="container">
//             {/* Section Title */}
//             <h1 className="text-center mb-4">{}</h1>

//             {/* Short Description */}
//             {/* {item.shortDescription && (
//               <div className="pera mb-4">{parse(item.shortDescription)}</div>
//             )} */}
//             <div className="col-lg-7">
//               <div className="pera mt_same">
//                 <p
//                   className="pera"
//                   dangerouslySetInnerHTML={{
//                     __html: item.shortDescription,
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Subsections (like BENEFITS cards) */}
//             {item.subsections?.length > 0 && (
//               <div className="row">
//                 {item.subsections.map((sub) => (
//                   <div className="col-lg-3 col-sm-12 mb-4" key={sub.id}>
//                     <div className="account_statement text-center">
//                       {sub.image && (
//                         <div className="icon_img mb-3">
//                           <img src={sub.image} alt={sub.title} />
//                         </div>
//                       )}
//                       <h4>{sub.title}</h4>
//                       <div>{parse(sub.description)}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Special CTA Section */}
//             {item.id === 302 && (
//               <div className="row mb-5 mt-5">
//                 <div className="col-lg-6">
//                   <div className="wpb_wrapper_1">
//                     <h2>{item.title}</h2>
//                     <div className="contact_pay">
//                       <a href="#contact-us"> CONTACT US</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   {item.image && (
//                     <div className="contact_right">
//                       <img src={item.image} alt="meeting" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       ))}
//     </>
//   );
// };

// export default InheritanceTaxPlanning;
// // ***********************************************************
// // import React from "react";

// // const SlugInheritance: React.FC = () => {
// //   return (
// //     <>
// //       <section>
// //         <div
// //           className="servicea_details"
// //           style={{
// //             backgroundImage: "url(asset/img/serv_2.jpg)",
// //             height: "565px",
// //           }}>
// //           {/* <div className="All_services_heading">
// //               <h2>Accounting Services</h2>
// //             </div> */}
// //         </div>

// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="all_heading">
// //                 <h1 className="any_one">
// //                   <strong>Inheritance Tax </strong>Planning and Trust Formation
// //                 </h1>
// //                 {/* <h1 className="any_one">
// //                   <strong>Effortless VAT Return</strong> Preparation and Filing with HMRC
// //                 </h1> */}
// //               </div>
// //             </div>

// //             <div className="col-lg-12 main_pera">
// //               <div className="pera">
// //                 <p>
// //                   We specialize in empowering you to manage your financial
// //                   legacy effectively. Our comprehensive services cover
// //                   inheritance tax planning and trust formation, ensuring your
// //                   assets are preserved, your wishes honoured, and your loved
// //                   ones' financial futures secured.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col-lg-7">
// //               <div className="pera">
// //                 <p>
// //                   <strong>Tailored Inheritance Tax Strategies:</strong> Our
// //                   seasoned experts create personalized inheritance tax plans
// //                   that maximize your wealth's preservation and minimize tax
// //                   liabilities, allowing you to pass on your assets with a
// //                   lasting impact.
// //                 </p>
// //                 <p>
// //                   <strong>Efficient Trust Formation:</strong> Trusts are
// //                   powerful tools for wealth management and distribution. We
// //                   guide you through the intricate process of forming trusts that
// //                   safeguard your assets and provide for your beneficiaries'
// //                   needs.
// //                 </p>
// //                 <p>
// //                   <strong>Tax Optimization:</strong> Our specialists identify
// //                   legal avenues to optimize your inheritance tax obligations,
// //                   ensuring that you retain more of your hard-earned assets for
// //                   the benefit of your loved ones.
// //                 </p>
// //                 <p>
// //                   <strong>Estate Structuring:</strong> We assist you in
// //                   structuring your estate in a manner that reflects your wishes,
// //                   avoids complications, and minimizes potential disputes among
// //                   beneficiaries.
// //                 </p>
// //                 <p>
// //                   <strong>Compliance Assurance:</strong> Navigating inheritance
// //                   tax regulations can be complex. Our experts ensure your plans
// //                   and trusts adhere to the latest legal requirements, preventing
// //                   unintended consequences.
// //                 </p>
// //                 <p>
// //                   <strong>Long-Term Wealth Preservation:</strong> Our services
// //                   are designed to help you create a lasting financial legacy. By
// //                   strategically managing inheritance taxes and forming trusts,
// //                   we help secure your family's financial well-being for
// //                   generations to come.
// //                 </p>
// //                 <p>
// //                   <strong>Transparent Communication:</strong> We prioritize
// //                   clear communication, ensuring you're fully informed about the
// //                   implications of various strategies and decisions every step of
// //                   the way.
// //                 </p>
// //                 <p>
// //                   <strong>Personalized Guidance:</strong> Your financial
// //                   situation is unique, and so are our services. We craft
// //                   customized solutions that cater to your specific needs, goals,
// //                   and values.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col-lg-5">
// //               <div className="right_img">
// //                 <img
// //                   src="https://wip.tezcommerce.com:3304/admin/module/70/1693552739998.png"
// //                   alt=""
// //                 />
// //                 {/* <img
// //                   src="https://www.sinclairmckinsley.co.uk/asset/img/tax1.jpg"
// //                   alt="..."
// //                 /> */}
// //               </div>
// //             </div>

// //             <div className="wpb_wrapper">
// //               <div className="wpb_text_column wpb_content_element vc_custom_1684907875863">
// //                 <div className="wpb_wrapper all_heading">
// //                   <h1
// //                     className="any_one"
// //                     style={{
// //                       textAlign: "center",
// //                       margin: "0 auto",
// //                       fontSize: "42px",
// //                       maxWidth: "1000px",
// //                     }}>
// //                     <strong>BENEFITS</strong>
// //                   </h1>
// //                 </div>
// //               </div>
// //               {/* <div className="wpb_text_column wpb_content_element vc_custom_1684907820871">
// //                 <div className="wpb_wrapper">
// //                   <p style={{ lineHeight: "30px", textAlign: "center" }}>
// //                     Sinclair, operating as a specialized accounting firm for
// //                     GST, ensures that its clients are thoroughly informed about
// //                     all GST prerequisites and maintain full compliance with
// //                     these obligations.
// //                   </p>
// //                 </div>
// //               </div> */}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* BENEFITS GRID */}
// //       <section>
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-3 col-sm-12">
// //               <div className="account_statement">
// //                 <div className="icon_img">
// //                   <img
// //                     src="https://wip.tezcommerce.com:3304/admin/module/70/1693552918405.png"
// //                     alt="loading..."
// //                   />
// //                 </div>
// //                 <h4>Expertise</h4>
// //                 <p>
// //                   Our team boasts deep knowledge of inheritance tax laws, estate
// //                   planning, and trust formation, ensuring that your financial
// //                   affairs are managed with the highest level of competence.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col-lg-3 col-sm-12">
// //               <div className="account_statement">
// //                 <div className="icon_img">
// //                   <img
// //                     src="https://wip.tezcommerce.com:3304/admin/module/70/1693552981277.png"
// //                     alt="loading..."
// //                   />
// //                 </div>
// //                 <h4>Customized Approach</h4>
// //                 <p>
// //                   We understand the significance of individual circumstances.
// //                   Our services are tailored to reflect your preferences,
// //                   securing your assets according to your vision.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col-lg-3 col-sm-12">
// //               <div className="account_statement">
// //                 <div className="icon_img">
// //                   <img
// //                     src="https://wip.tezcommerce.com:3304/admin/module/70/1693553017066.png"
// //                     alt="loading..."
// //                   />
// //                 </div>
// //                 <h4>Legacy Preservation</h4>
// //                 <p>
// //                   We help you leave a lasting legacy by preserving and
// //                   optimizing your wealth for the benefit of your heirs and
// //                   causes close to your heart.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="col-lg-3 col-sm-12">
// //               <div className="account_statement">
// //                 <div className="icon_img">
// //                   <img
// //                     src="https://wip.tezcommerce.com:3304/admin/module/70/1693553050546.png"
// //                     alt="loading..."
// //                   />
// //                 </div>
// //                 <h4>Ethical Practices</h4>
// //                 <p>
// //                   We uphold the highest ethical standards, ensuring your
// //                   financial matters are managed with integrity and transparency.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final Section */}
// //       <section>
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <p className="mt-5 mb-5">
// //                 Secure your financial legacy with precision and care. Join us to
// //                 navigate inheritance tax planning and trust formation, creating
// //                 a future that reflects your values and benefits your loved ones.
// //                 Contact us today to embark on a journey of financial security
// //                 and legacy preservation.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       {/* Contact Section */}
// //       <section className="new_c">
// //         <div className="container">
// //           <div className="row mb-5">
// //             <div className="col-lg-6">
// //               <div className="wpb_wrapper_1">
// //                 <h2>
// //                   <strong>Schedule a meeting</strong> to explore how we enhance
// //                   your value. <strong>Contact us today.</strong>
// //                 </h2>
// //                 <div className="contact_pay">
// //                   <a href="#contact-us">CONTACT US</a>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="col-lg-6">
// //               <div className="contact_right">
// //                 <img
// //                   src="https://wip.tezcommerce.com:3304/admin/module/70/1693553106205.jpeg"
// //                   alt="contact"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default SlugInheritance;
