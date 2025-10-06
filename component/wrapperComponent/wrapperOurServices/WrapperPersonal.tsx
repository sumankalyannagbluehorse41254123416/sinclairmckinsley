import Personal from "@/component/OurServicesComponent/Personal/Personal";
import { OurServeice } from "@/lib/ourService";

export default async function PersonalWrapper() {
  const data = await OurServeice("246aa2ee-5d64-4885-af0d-c5f1fb5a42ec");

  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Personal service={service} />;
}
