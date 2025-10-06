import Making from "@/component/OurServicesComponent/Making/Making";
import { OurServeice } from "@/lib/ourService";

export default async function MakingWrapper() {
  const data = await OurServeice("8e705a24-d000-41ef-9887-da3ff93a325a");

  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Making service={service} />;
}
