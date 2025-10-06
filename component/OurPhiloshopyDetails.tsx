// "use client";

// import React from "react";

// export default function PhilosophySection() {
//   return (
//     <section className="philoshopy_cl">
//       <div className="container">
//         <div className="row">
//           {/* Left Section */}
//           <div className="col-lg-6">
//             <div
//               className="Our_philoshopy_details"
//               style={{ position: "relative" }}>
//               <h2>Our philosophy is always to do our utmost to</h2>
//               <div className="right_mark">
//                 <ul>
//                   <li>Our mission ‘’ You grow, we grow ’’;</li>
//                   <li>Provide friendly, courteous and efficient service;</li>
//                   <li>Always exceed your expectations;</li>
//                   <li>Listen to what YOU are saying;</li>
//                   <li>Communicate with you quickly and fully;</li>
//                   <li>Never surprise you with bills you're not expecting;</li>
//                   <li>
//                     Be honest, truthful and upfront with you at all times;
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="col-lg-6 blue_back">
//             <div className="img_blue_section" style={{ position: "relative" }}>
//               <img
//                 src="https://wip.tezcommerce.com:3304/admin/module/70/1691673621038.JPG"
//                 alt="Experience"
//                 className="expr_img"
//               />
//               <img
//                 src="https://wip.tezcommerce.com:3304/admin/module/70/1691673621069.png"
//                 alt="Philosophy"
//                 className="philod"
//               />

//               <div className="new_li">
//                 <ul>
//                   <li>Stress free.</li>
//                   <li>Helpful informative.</li>
//                   <li>Saving you money.</li>
//                   <li>Making you money.</li>
//                 </ul>
//               </div>

//               <div className="expri_btn">
//                 <a href="javascript:void(0);">
//                   <i className="ri-award-fill"></i> 20 Years Experienced
//                 </a>
//               </div>
//             </div>
//           </div>
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

interface Section {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  subsections: Subsection[];
}

interface PhilosophySectionProps {
  sectionData: Section;
}

export default function PhilosophySection({
  sectionData,
}: PhilosophySectionProps) {
  const subsection = sectionData?.subsections?.[0];

  return (
    <section className="philoshopy_cl">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6">
            <div
              className="Our_philoshopy_details"
              style={{ position: "relative" }}>
              <h2>{sectionData.title}</h2>
              <div
                className="right_mark"
                dangerouslySetInnerHTML={{
                  __html: sectionData.shortDescription || "No more description",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 blue_back">
            <div className="img_blue_section" style={{ position: "relative" }}>
              {sectionData.image && (
                <img
                  src={sectionData.image}
                  alt={sectionData.title}
                  className="expr_img"
                />
              )}

              {subsection?.image && (
                <img
                  src={subsection.image}
                  alt={subsection.title}
                  className="philod"
                />
              )}

              {subsection?.description && (
                <div
                  className="new_li"
                  dangerouslySetInnerHTML={{
                    __html: subsection.description,
                  }}
                />
              )}

              {subsection?.title && (
                <div className="expri_btn">
                  <a href="javascript:void(0);">
                    <i className="ri-award-fill"></i> {subsection.title}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
