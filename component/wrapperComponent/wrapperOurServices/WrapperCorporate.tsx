import Inheritance from "@/component/OurServicesComponent/Inheritance/Inheritance";
import { OurServeice } from "@/lib/ourService";

export default async function CorporateWrapper() {
  const data = await OurServeice("5681ca44-b8ab-4ceb-9f87-5a98917a17fa");

  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Inheritance service={service} />;
}
