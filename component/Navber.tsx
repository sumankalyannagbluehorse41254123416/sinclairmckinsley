// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FC, useEffect, useState } from "react";

// const Navbar: FC = () => {
//   const [isFixed, setIsFixed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsFixed(true);
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       id="mynav"
//       className={`header_area ${isFixed ? "fixed-top" : ""}`}
//       style={{ backgroundColor: "white" }}>
//       <div className="main_header_area animated">
//         <div className="container">
//           <nav id="navigation1" className="navigation">
//             <div className="nav-header">
//               <Link href="/">
//                 <Image
//                   src="https://www.sinclairmckinsley.co.uk/asset/img/sinkot_logo.jpg"
//                   alt="Sinclair McKinsley Logo"
//                   width={150}
//                   height={50}
//                 />
//               </Link>
//               <div className="nav-toggle"></div>
//             </div>

//             <div className="nav-menus-wrapper">
//               <ul className="nav-menu align-to-right menu menu-1">
//                 <li>
//                   <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link href="/about">About Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/#our_services">Services</Link>
//                 </li>
//                 <li>
//                   <Link href="/#contact-us">Contact Us</Link>
//                 </li>
//                 <li>
//                   <Link href="/blog">Blog</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
// ***********************
// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FC, useEffect, useState } from "react";
// import { fetchNavber } from "@/lib/fetchNavber";

// interface MenuItem {
//   id: number;
//   title: string;
//   href: string;
//   target: string;
//   cssClass?: string | null;
//   status: string;
// }

// const Navbar: FC = () => {
//   const [isFixed, setIsFixed] = useState(false);
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsFixed(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const loadMenu = async () => {
//       try {
//         const data = await fetchNavber(
//           {},
//           "ae6e7de7-b5f9-4734-bf53-81945e1abf9a"
//         );

//         if (data.success && data.menu?.items) {
//           const sortedItems = [...data.menu.items].sort(
//             (a, b) => (a.sequence ?? 0) - (b.sequence ?? 0)
//           );
//           setMenuItems(sortedItems);
//         }
//       } catch (error) {
//         console.error("Failed to load menu:", error);
//       }
//     };

//     loadMenu();
//   }, []);

//   return (
//     <header
//       id="mynav"
//       className={`header_area ${isFixed ? "fixed-top" : ""}`}
//       // className={`header_area`}
//       style={{ backgroundColor: "white" }}>
//       <div className="main_header_area animated">
//         <div className="container">
//           <nav id="navigation1" className="navigation">
//             <div className="nav-header">
//               <Link href="/">
//                 <Image
//                   src="/asset/sinkot_logo.webp"
//                   alt="Sinclair McKinsley Logo"
//                   width={150}
//                   height={50}
//                 />
//               </Link>
//               <div className="nav-toggle"></div>
//             </div>

//             <div className="nav-menus-wrapper">
//               <ul className="nav-menu align-to-right menu menu-1">
//                 {menuItems.map((item) => (
//                   <li key={item.id}>
//                     <Link
//                       href={item.href || "#"}
//                       target={item.target || "_self"}
//                       className={item.cssClass || ""}>
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { fetchNavber } from "@/lib/fetchNavber";

interface MenuItem {
  id: number;
  title: string;
  href: string;
  target: string;
  cssClass?: string | null;
  status: string;
}

const Navbar: FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
      // Close menu when resizing to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const data = await fetchNavber(
          {},
          "ae6e7de7-b5f9-4734-bf53-81945e1abf9a"
        );

        if (data.success && data.menu?.items) {
          const sortedItems = [...data.menu.items].sort(
            (a, b) => (a.sequence ?? 0) - (b.sequence ?? 0)
          );
          setMenuItems(sortedItems);
        }
      } catch (error) {
        console.error("Failed to load menu:", error);
      }
    };

    loadMenu();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationClass = isMobile
    ? "navigation-portrait"
    : "navigation-landscape";

  return (
    <header
      id="mynav"
      className={`header_area ${isFixed ? "fixed-top" : ""}`}
      style={{ backgroundColor: "white" }}>
      <div className="main_header_area animated">
        <div className="container">
          <nav id="navigation1" className={`navigation ${navigationClass}`}>
            <div className="nav-header">
              <Link href="/" className="nav-brand">
                <Image
                  src="/asset/sinkot_logo1.jpg"
                  alt="Sinclair McKinsley Logo"
                  width={150}
                  height={50}
                />
              </Link>
              <div
                className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}></div>
            </div>

            <div
              className={`nav-menus-wrapper ${
                isMenuOpen ? "nav-menus-wrapper-open" : ""
              }`}>
              {/* Close button - only visible when menu is open */}
              {isMenuOpen && (
                <span
                  className="nav-menus-wrapper-close-button"
                  onClick={closeMenu}>
                  ✕
                </span>
              )}

              <ul className="nav-menu align-to-right menu menu-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={
                        item.href.includes("#")
                          ? `/${item.href}`
                          : `/${item.href}` || "#"
                      }
                      target={item.target || "_self"}
                      className={item.cssClass || ""}
                      onClick={() => isMobile && setIsMenuOpen(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Overlay Panel */}
            <div
              className="nav-overlay-panel"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: isMenuOpen ? "block" : "none",
              }}
              onClick={() => isMobile && setIsMenuOpen(false)}></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
