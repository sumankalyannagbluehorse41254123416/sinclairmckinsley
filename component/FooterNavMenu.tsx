// // components/QuickLinks.tsx
// import Link from "next/link";
// import { FC } from "react";

// export const FooterNavMenu: FC = () => {
//   return (
//     <div className="col-lg-3 col-xs-12 links">
//       {/* <h4 className="mt-lg-0 mt-sm-3">QUICK Links</h4> */}
//       <ul className="m-0 p-0 ul_link menu menu-1">
//         <li>
//           <Link href="/">Home</Link>
//         </li>
//         <li>
//           <Link href="/about">About Us</Link>
//         </li>
//         <li>
//           <Link href="/services">Services</Link>
//         </li>
//         <li>
//           <Link href="/contact-us">Contact Us</Link>
//         </li>
//         <li>
//           <Link href="/blog">Blog</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

"use client";

import { fetchNavber } from "@/lib/fetchFooterNavMenu";
import Link from "next/link";
import { useEffect, useState } from "react";

export const FooterNavMenu = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);

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
          console.log("sortedItems", sortedItems);
          setMenuItems(sortedItems);
        }
      } catch (error) {
        console.error("Failed to load menu:", error);
      }
    };

    loadMenu();
  }, []);

  return (
    <ul className="m-0 p-0 ul_link menu menu-1">
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            href={
              item.href.includes("#")
                ? `/${item.href}`
                : item.href === "/"
                ? "/"
                : `/${item.href} ` || "#"
            }>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
