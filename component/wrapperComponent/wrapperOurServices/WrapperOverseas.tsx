// import Overseas from "@/component/OurServicesComponent/Overseas /Overseas ";
import Overseas from "@/component/OurServicesComponent/Overseas /Overseas ";
import { OurServeice } from "@/lib/ourService";

export default async function OverseasWrapper() {
  const data = await OurServeice("570a6961-cc7c-450d-92d9-75228e3db4e3");

  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Overseas service={service} />;
}
