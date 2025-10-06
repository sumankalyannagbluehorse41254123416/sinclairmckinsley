import Peofessional from "@/component/OurServicesComponent/Professional/Professional";
import { Homepage } from "@/lib/fetchHome"; // your axios+crypto wrapper

export default async function ProfessionalWrapper() {
  // call API with the UUID of your page
  const data = await Homepage("daa127a4-4413-42f4-ba47-e942f648205f");
  // const service = data?.pageItemdataWithSubsection?.find(
  //   (item: any) => item.id === 91
  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Peofessional service={service} />;
}
