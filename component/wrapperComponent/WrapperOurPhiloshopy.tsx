import { Homepage } from "@/lib/fetchHome";
import PhilosophySection from "../OurPhiloshopyDetails";
export default async function PhilosophyWrapper() {
  const data = await Homepage("26b13f5d-5bab-474f-976c-32b436744b86");

  const philosophySection = data?.pageItemdataWithSubsection?.find(
    (item: any) => item.id === 270
  );

  if (!philosophySection) return null;

  return <PhilosophySection sectionData={philosophySection} />;
}
