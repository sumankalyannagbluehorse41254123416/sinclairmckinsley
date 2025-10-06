import { fetchAllBanners } from "@/lib/homeSlider";
import ClientSlider, { Slide } from "../Slider";

export default async function HeroSliderDataFetch() {
  let slides: Slide[] = [];

  try {
    const res = await fetchAllBanners({});
    if (res?.bannerData && Array.isArray(res.bannerData)) {
      slides = res.bannerData;
    }
  } catch (err) {
    console.error("Error fetching banners:", err);
  }

  return <ClientSlider slides={slides} />;
}
