import { OurServeice } from "@/lib/ourService";
import Information from "../Information";

export default async function InformationgWrapper() {
  // Call API (uuid-based)
  const res = await OurServeice("d212e88f-d767-4c4b-b7e2-64b0fe625527");

  const sectionData = res?.pagedata;

  return <Information sectionData={sectionData} />;
}
