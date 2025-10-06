// // app/components/OverBannerWrapper.tsx

import HeaderContainer from "../HeaderContainer";

import { Homepage } from "@/lib/fetchHome";

export default async function HeaderWrapper() {
  const data = await Homepage("26b13f5d-5bab-474f-976c-32b436744b86");

  const headerSection = data?.pageItemdataWithSubsection?.find(
    (item: any) => item.title === "HeaderContainer"
  );

  if (!headerSection) return null;

  return <HeaderContainer subsections={headerSection.subsections} />;
}
