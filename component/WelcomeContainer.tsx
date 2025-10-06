// "use client";

// import React from "react";

// export default function WelcomeContainer() {
//   return (
//     <section className="paddy40" id="about_welcome">
//       <div className="container">
//         <div className="row">
//           {/* Left Side - Images */}
//           <div className="col-lg-6">
//             <div className="sinclair_img_side">
//               <img
//                 src="https://wip.tezcommerce.com:3304/admin/module/70/1691673387390.jpg"
//                 alt="Sinclair McKinsley image 1"
//                 className="img_1"
//               />
//               <img
//                 src="https://wip.tezcommerce.com:3304/admin/module/70/1691673387454.png"
//                 alt="Sinclair McKinsley image 2"
//                 className="img_2"
//               />
//             </div>
//           </div>

//           {/* Right Side - Text */}
//           <div className="col-lg-6">
//             <div className="sinclair_details">
//               <h6>Welcome to</h6>
//               <h2>Sinclair McKinsley</h2>
//               <p>
//                 Welcome to Sinclair McKinsley, a growing accountancy firm
//                 dedicated to helping you achieve your financial goals. With our
//                 team of experts, we offer comprehensive accounting, taxation,
//                 and financial planning solutions to businesses and individuals.
//                 Trust us to navigate the complexities of finance and secure a
//                 prosperous future for you.
//               </p>
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

interface WelcomeContainerProps {
  sectionData: Section;
}

export default function WelcomeContainer({
  sectionData,
}: WelcomeContainerProps) {
  // Get first subsection
  const subsection = sectionData?.subsections?.[0];

  return (
    <section className="paddy40" id="about_welcome">
      <div className="container">
        <div className="row">
          {/* Left Side - Images */}
          <div className="col-lg-6">
            <div className="sinclair_img_side">
              {sectionData?.image && (
                <img
                  src={sectionData.image}
                  alt={sectionData.title}
                  className="img_1"
                />
              )}
              {subsection?.image && (
                <img
                  src={subsection.image}
                  alt={subsection.title}
                  className="img_2"
                />
              )}
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="col-lg-6">
            <div className="sinclair_details">
              <h6>{sectionData?.title}</h6>
              <h2>{subsection?.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: subsection?.description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
