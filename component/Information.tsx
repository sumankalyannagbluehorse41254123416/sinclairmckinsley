// // LatestInformation.tsx
// import React from "react";

// const LatestInformation = () => {
//   return (
//     <div className="header_information">
//       <h2>Latest Information</h2>
//       <p>
//         In today's rapidly changing world, staying up to date is essential. Our
//         commitment to providing you with the latest information ensures that you
//         are well-equipped to make informed decisions, navigate complexities, and
//         seize new opportunities. Discover the knowledge you need to stay ahead
//         in a dynamic and ever-evolving landscape.
//       </p>
//     </div>
//   );
// };

// export default LatestInformation;

// LatestInformation.tsx
// "use client";

// import { Homepage } from "@/lib/fetchHome";
// import React, { useEffect, useState } from "react";

// interface PageData {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
// }

// const LatestInformation = () => {
//   const [data, setData] = useState<PageData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await Homepage("d212e88f-d767-4c4b-b7e2-64b0fe625527");
//         if (res?.status && res?.pagedata) {
//           setData(res.pagedata);
//         }
//         // console.log("ressssssssssssss", res?.pagedata);
//         // console.log("status", res?.status);
//       } catch (err) {
//         console.error("Error fetching page data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log("data 22222222222222s", data);

//   if (loading) return <p>Loading...</p>;
//   if (!data) return <p>No data found</p>;

//   return (
//     <div className="header_information">
//       <h2>{data.title}</h2>
//       <div dangerouslySetInnerHTML={{ __html: data.description }} />
//     </div>
//   );
// };

// export default LatestInformation;

"use client";

import React from "react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
}

interface ServiceHeadingProps {
  sectionData: ServiceData;
  className?: string;
}

export default function Information({
  sectionData,
  className = "",
}: ServiceHeadingProps) {
  if (!sectionData) return null;

  return (
    <div className="header_information">
      <h2>{sectionData.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: sectionData.description || "" }} />
    </div>
  );
}
