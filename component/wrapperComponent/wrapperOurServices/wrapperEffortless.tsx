import Effortless from "@/component/OurServicesComponent/Effortless/Effortless";
import { OurServeice } from "@/lib/ourService";

export default async function EffortlessWrapper() {
  const data = await OurServeice("baeb4a33-8db9-4405-8d21-da210ac77f6b");

  // );
  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Effortless service={service} />;
}
