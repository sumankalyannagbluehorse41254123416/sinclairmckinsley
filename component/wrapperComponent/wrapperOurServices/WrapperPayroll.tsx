// import Overseas from "@/component/OurServicesComponent/Overseas /Overseas ";
import Payroll from "@/component/OurServicesComponent/Payroll/Payroll";
import { OurServeice } from "@/lib/ourService";

export default async function PayrollWrapper() {
  const data = await OurServeice("7f9bdcd4-c44b-4683-a4fe-9614fdeb4ee3");

  if (!data?.pagedata) return null;

  const service = {
    id: data.pagedata.id,
    title: data.pagedata.title,
    description: data.pagedata.description,
    slug: data.pagedata.slug,
    cover_image_url: data.pagedata.cover_image_url,
  };

  return <Payroll service={service} />;
}
