import Bookkeeping from "@/component/OurServicesComponent/Bookkeeping/Bookkeeping";
import { OurServeice } from "@/lib/ourService";

export default async function BookkeepingWrapper() {
  // const data = await OurServeice("7f9bdcd4-c44b-4683-a4fe-9614fdeb4ee3");
  const data = await OurServeice("c8ae693f-6d87-4434-b5a5-7f365c0b8248");

  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Bookkeeping service={service} />;
}
