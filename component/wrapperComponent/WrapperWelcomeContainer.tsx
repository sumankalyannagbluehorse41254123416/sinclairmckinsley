import { Homepage } from "@/lib/fetchHome";
import WelcomeContainer from "../WelcomeContainer";

export default async function WelcomeWrapper() {
  const data = await Homepage("26b13f5d-5bab-474f-976c-32b436744b86");

  const welcomeSection = data?.pageItemdataWithSubsection?.find(
    (item: any) => item.id === 269
  );

  if (!welcomeSection) return null;

  return <WelcomeContainer sectionData={welcomeSection} />;
}
