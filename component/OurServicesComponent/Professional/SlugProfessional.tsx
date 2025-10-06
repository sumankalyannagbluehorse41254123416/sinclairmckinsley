"use client";

import { OurServeice } from "@/lib/ourService";
import React, { useEffect, useState } from "react";

interface Subsection {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface PageItem {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  subsections: Subsection[];
}

export const Professional = () => {
  const [pageItems, setPageItems] = useState<PageItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await OurServeice("daa127a4-4413-42f4-ba47-e942f648205f");

        console.log("data", data?.pagedata);
        console.log("data", data);

        if (!data?.pageItemdataWithSubsection) return;
        const mapped: PageItem[] =
          // data.pagedata.map(() => ({
          //   description: data.description,
          // }));
          data.pageItemdataWithSubsection.map((item: any) => ({
            id: item.id,
            title: item.title,
            // description: item.description,
            shortDescription: item.shortDescription,
            image: item.image,
            subsections:
              item.subsections?.map((sub: any) => ({
                id: sub.id,
                title: sub.title,
                description: sub.description,
                image: sub.image,
              })) || [],
          }));
        console.log("mapped *********", mapped);

        setPageItems(mapped);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };
    fetchData();
  }, []);
  if (!pageItems.length) return null;

  const heroSection = pageItems[0];
  const whyChooseUsSection = pageItems.find((p) =>
    p.title.toLowerCase().includes("why choose us")
  );
  const ctaSection = pageItems[pageItems.length - 1];

  return (
    <>
      {heroSection && (
        <section>
          <div
            className="servicea_details"
            style={{
              backgroundImage: `url(${heroSection.image})`,
              height: "565px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 all_heading">
                <h1
                  className="any_one"
                  dangerouslySetInnerHTML={{ __html: heroSection.title }}
                />
              </div>
              <div className="col-lg-12 main_pera">
                <p
                  className="pera"
                  dangerouslySetInnerHTML={{
                    __html: heroSection.shortDescription,
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div className="pera mt_same">
                  <p
                    className="pera"
                    dangerouslySetInnerHTML={{
                      __html: heroSection.shortDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WHY CHOOSE US Section */}
      {whyChooseUsSection && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center mb-4">
                <h1
                  className="any_one"
                  dangerouslySetInnerHTML={{
                    __html: whyChooseUsSection.title,
                  }}
                />
              </div>

              {whyChooseUsSection.subsections.map((sub) => (
                <div key={sub.id} className="col-lg-3 col-sm-12">
                  <div className="account_statement">
                    <div className="icon_img">
                      <img src={sub.image} alt={sub.title} />
                    </div>
                    <h4>{sub.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: sub.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p
                  className="mt-5 mb-5"
                  dangerouslySetInnerHTML={{
                    __html: ctaSection.shortDescription,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {ctaSection && (
        <section className="new_c">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="wpb_wrapper_1">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: ctaSection.title,
                    }}
                  />
                  {/* <div
                    className="pera"
                    dangerouslySetInnerHTML={{
                      __html: ctaSection.shortDescription,
                    }}
                  /> */}
                  <div className="contact_pay">
                    <a href="#contact-us">CONTACT US</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 contact_right">
                <img src={ctaSection.image} alt="Contact illustration" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Professional;
// "use client";

// import { OurServeice } from "@/lib/ourService";
// import React, { useEffect, useState } from "react";

// interface Subsection {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// interface PageItem {
//   id: number;
//   title: string;
//   description: string;
//   shortDescription: string;
//   image: string;
//   subsections: Subsection[];
// }

// interface ApiResponse {
//   pagedata: {
//     id: number;
//     title: string;
//     description: string;
//     cover_image_url: string;
//   };
//   pageItemdataWithSubsection: PageItem[];
// }

// export const Professional = () => {
//   const [pagedata, setPagedata] = useState<ApiResponse["pagedata"] | null>(
//     null
//   );
//   const [pageItems, setPageItems] = useState<PageItem[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await OurServeice("daa127a4-4413-42f4-ba47-e942f648205f");

//         console.log("API Response", data);

//         if (!data) return;

//         setPagedata(data.pagedata);
//         setPageItems(data.pageItemdataWithSubsection || []);
//       } catch (error) {
//         console.error("Error fetching service details:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!pagedata) return null;

//   const heroSection = pagedata;
//   const whyChooseUsSection = pageItems.find((p) =>
//     p.title.toLowerCase().includes(" ")
//   );
//   const ctaSection = pageItems[pageItems.length - 1];

//   return (
//     <>
//       {/* HERO SECTION */}
//       {heroSection && (
//         <section>
//           <div
//             className="servicea_details"
//             style={{
//               backgroundImage: `url(${heroSection})`,
//               height: "565px",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}></div>

//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12 all_heading">
//                 <h1
//                   className="any_one"
//                   dangerouslySetInnerHTML={{ __html: heroSection.title }}
//                 />
//               </div>
//               <div className="col-lg-12 main_pera">
//                 <div
//                   className="pera"
//                   dangerouslySetInnerHTML={{
//                     __html: heroSection.description,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* WHY CHOOSE US SECTION */}
//       {whyChooseUsSection && (
//         <section>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12 text-center mb-4">
//                 <h1
//                   className="any_one"
//                   dangerouslySetInnerHTML={{
//                     __html: whyChooseUsSection.title,
//                   }}
//                 />
//               </div>

//               {whyChooseUsSection.subsections.map((sub) => (
//                 <div key={sub.id} className="col-lg-3 col-sm-12">
//                   <div className="account_statement">
//                     <div className="icon_img">
//                       <img src={sub.image} alt={sub.title} />
//                     </div>
//                     <h4>{sub.title}</h4>
//                     <div
//                       dangerouslySetInnerHTML={{ __html: sub.description }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* CTA SECTION */}
//       {ctaSection && (
//         <>
//           <section>
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <p
//                     className="mt-5 mb-5"
//                     dangerouslySetInnerHTML={{
//                       __html: ctaSection.shortDescription,
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="new_c">
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="wpb_wrapper_1">
//                     <h2
//                       dangerouslySetInnerHTML={{
//                         __html: ctaSection.title,
//                       }}
//                     />
//                     <div className="contact_pay">
//                       <a href="#contact-us">CONTACT US</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 contact_right">
//                   <img src={ctaSection.image} alt="Contact illustration" />
//                 </div>
//               </div>
//             </div>
//           </section>
//         </>
//       )}
//     </>
//   );
// };

// export default Professional;
