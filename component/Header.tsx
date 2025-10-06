// components/Header.tsx
// import Link from "next/link";
// import { FC } from "react";
// // import "@/style/style.css";
// import "../public/style/style.css";
// import "../public/style/navbar.css";
// // import "@/style/navbar.css";
// // import "../app/style/navbar.css";
// // import "../app/style/style.css";
// import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// // import { FaLinkedin } from "react-icons/fa";
// const Header: FC = () => {
//   return (
//     <div className="top_header">
//       <div className="container">
//         <div className="contact_header">
//           <ul>
//             <li className="mr" style={{ fontSize: "14px" }}>
//               <Link href="mailto:info@sinclairmckinsley.co.uk">
//                 {/* <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "} */}
//                 <AiOutlineMail /> info@sinclairmckinsley.co.uk
//               </Link>
//             </li>
//             <li style={{ fontSize: "14px" }}>
//               <Link href="tel:02084278787">
//                 {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
//                 <FaPhoneAlt /> 0208 427 8787
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="header_social">
//           <ul>
//             <li>
//               <Link
//                 href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
//                 target="_blank">
//                 {/* <i className="fa fa-linkedin" aria-hidden="true"></i> */}
//                 <FaLinkedinIn />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";
import { FC } from "react";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "@/public/style/style.css";
import "@/public/style/navbar.css";

const Header: FC = () => {
  return (
    <div className="top_header">
      <div className="container">
        <div className="contact_header">
          <ul>
            <li className="mr" style={{ fontSize: "14px" }}>
              <Link href="mailto:info@sinclairmckinsley.co.uk">
                <AiOutlineMail /> info@sinclairmckinsley.co.uk
              </Link>
            </li>
            <li style={{ fontSize: "14px" }}>
              <Link href="tel:02084278787">
                <FaPhoneAlt /> 0208 427 8787
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_social">
          <ul>
            <li>
              <Link
                href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
                target="_blank">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
