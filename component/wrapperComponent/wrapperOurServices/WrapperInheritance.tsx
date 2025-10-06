import Corporate from "@/component/OurServicesComponent/Corporate/Corporate";
import { OurServeice } from "@/lib/ourService";

export default async function InheritancelWrapper() {
  const data = await OurServeice("d1ac9b5c-7ef0-46eb-9d55-04e906b3944e");

  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Corporate service={service} />;
}
