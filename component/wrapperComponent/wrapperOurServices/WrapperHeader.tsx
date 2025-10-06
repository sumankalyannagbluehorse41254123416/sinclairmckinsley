// import { ServiceHeading } from "@/component/OurServicesComponent/Headerpart";
// import { OurServeice } from "@/lib/ourService";

// export default async function ServiceHeadingWrapper() {
//   const data = await OurServeice("71d039b2-d6d1-454d-b3b5-6a2e38c3851f");

//   if (!data?.pagedata) return null;

//   return (
//     <ServiceHeading
//       title={data.pagedata.title}
//       // Strip HTML tags if you only want plain text
//       // subtitle={data.pagedata.description.replace(/<[^>]+>/g, "")}
//       // OR render HTML safely inside ServiceHeading
//       subtitle={data.pagedata.description}
//     />
//   );
// }
import ServiceHeading from "@/component/OurServicesComponent/Headerpart";
import { OurServeice } from "@/lib/ourService";

export default async function ServiceHeadingWrapper() {
  // Call API (uuid-based)
  const res = await OurServeice("71d039b2-d6d1-454d-b3b5-6a2e38c3851f");

  const sectionData = res?.pagedata;

  return (
    <section>
      <div className="container">
        <div className="row">
          <ServiceHeading sectionData={sectionData} />
        </div>
      </div>
    </section>
  );
}
