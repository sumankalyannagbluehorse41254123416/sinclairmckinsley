// "use client";

import React from "react";
import ServiceHeadingWrapper from "./wrapperComponent/wrapperOurServices/WrapperHeader";
import ProfessionalWrapper from "./wrapperComponent/wrapperOurServices/Professional";
import InheritancelWrapper from "./wrapperComponent/wrapperOurServices/WrapperInheritance";
import CorporateWrapper from "./wrapperComponent/wrapperOurServices/WrapperCorporate";
import PersonalWrapper from "./wrapperComponent/wrapperOurServices/WrapperPersonal";
import OverseasWrapper from "./wrapperComponent/wrapperOurServices/WrapperOverseas";
import MakingWrapper from "./wrapperComponent/wrapperOurServices/WrapperMaking";
import EffortlessWrapper from "./wrapperComponent/wrapperOurServices/wrapperEffortless";
import PayrollWrapper from "./wrapperComponent/wrapperOurServices/WrapperPayroll";
import BookkeepingWrapper from "./wrapperComponent/wrapperOurServices/WrapperBookkeeping";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}
// export default function OurServices() {
//   return (
//     <section id="our_services">
//       <div className="container">
//         <div className="row">
//           {/* Heading */}
//           <div className="col-lg-12">
//             <div className="heading">
//               <ServiceHeadingWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <ProfessionalWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <InheritancelWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <CorporateWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <PersonalWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <OverseasWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <MakingWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <EffortlessWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <PayrollWrapper />
//             </div>
//           </div>
//           <div className="col-lg-4 col-sm-12 up_bottm">
//             <div className="servies_card">
//               <BookkeepingWrapper />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
const ServiceWrappers = [
  ProfessionalWrapper,
  InheritancelWrapper,
  CorporateWrapper,
  PersonalWrapper,
  OverseasWrapper,
  MakingWrapper,
  EffortlessWrapper,
  PayrollWrapper,
  BookkeepingWrapper,
];

export default function OurServices() {
  return (
    <section id="our_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <ServiceHeadingWrapper />
            </div>
          </div>

          {ServiceWrappers.map((WrapperComponent, index) => (
            <div className="col-lg-4 col-sm-12 up_bottm" key={index}>
              <div className="servies_card">
                <WrapperComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
