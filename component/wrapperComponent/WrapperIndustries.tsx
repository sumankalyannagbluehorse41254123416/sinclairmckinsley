import { Homepage } from "@/lib/fetchHome";
import Industries from "../Industries";
export default async function IndustriesWrapper() {
  const data = await Homepage("26b13f5d-5bab-474f-976c-32b436744b86");

  const industriesSection = data?.pageItemdataWithSubsection?.find(
    (item: any) => item.id === 272
  );

  if (!industriesSection) return null;

  return <Industries sectionData={industriesSection} />;
}
