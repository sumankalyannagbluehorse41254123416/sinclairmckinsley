// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import "../style/slick.css";
// // import "style/slick-theme.css";
// const BlogSlider = () => {
//   const blogs = [
//     {
//       href: "https://www.sinclairmckinsley.co.uk/blog-details/living-in-downtown-in-the-biggest-cities",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Discover new adventures over the world",
//     },
//     {
//       href: "https://example.com/blog-2",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Exploring hidden gems around the world",
//     },
//     {
//       href: "https://example.com/blog-3",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Living in the biggest cities of the world",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     speed: 800,
//     slidesToShow: 3, // how many blog cards visible
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="container my-10">
//       <Slider {...settings} className="customer-logos">
//         {blogs.map((blog, index) => (
//           <div key={index} className="slide_new p-4 text-center">
//             <a href={blog.href}>
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="rounded-lg shadow-md w-full h-[200px] object-cover"
//               />
//             </a>
//             {/* <a
//               className="icome block mt-3 text-blue-600 hover:underline"
//               href={blog.href}>
//               {blog.title}
//             </a> */}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default BlogSlider;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const BlogSlider = () => {
//   const blogs = [
//     {
//       href: "https://www.sinclairmckinsley.co.uk/blog-details/living-in-downtown-in-the-biggest-cities",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Discover new adventures over the world",
//     },
//     {
//       href: "https://example.com/blog-2",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Exploring hidden gems around the world",
//     },
//     {
//       href: "https://example.com/blog-3",
//       : "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Living in the biggest cities of the world",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//   ];

//   return (
//     <div className="container my-10">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={20}
//         slidesPerView={3}
//         autoplay={{
//           delay: 20002,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           1024: {
//             slidesPerView: 2,
//           },
//           600: {
//             slidesPerView: 1,
//           },
//         }}
//         className="customer-logos">
//         {blogs.map((blog, index) => (
//           <SwiperSlide key={index} className="p-4 text-center">
//             <a href={blog.href}>
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="rounded-lg shadow-md w-full h-[200px] object-cover"
//               />
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BlogSlider;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// // import "swiper/css/pagination";
// import "swiper/css";
// const BlogSlider = () => {
//   const blogs = [
//     {
//       href: "https://www.sinclairmckinsley.co.uk/blog-details/living-in-downtown-in-the-biggest-cities",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Discover new adventures over the world",
//     },
//     {
//       href: "https://example.com/blog-2",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Exploring hidden gems around the world",
//     },
//     {
//       href: "https://example.com/blog-3",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Living in the biggest cities of the world",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//     {
//       href: "https://example.com/blog-4",
//       img: "https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg",
//       title: "Top 10 travel destinations for 2025",
//     },
//   ];

//   return (
//     <div className="container my-10">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={30}
//         slidesPerView={3}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         speed={800}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           1024: { slidesPerView: 2 },
//           600: { slidesPerView: 1 },
//         }}
//         className="customer-logos">
//         {blogs.map((blog, index) => (
//           <SwiperSlide key={index} className="p-4 text-center">
//             <a href={blog.href}>
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="rounded-lg shadow-md w-full h-[200px] object-cover"
//               />
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BlogSlider;
// "use client";

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import { BlogPost, fetchBlogs } from "@/lib/blog";

// const BlogSlider = () => {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getBlogs = async () => {
//       try {
//         const data = await fetchBlogs();
//         setBlogs(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getBlogs();
//   }, []);

//   if (loading) return <p className="text-center">Loading blogs...</p>;
//   if (!blogs.length) return <p className="text-center">No blogs available</p>;

//   return (
//     <div className="container">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={20}
//         slidesPerView={3}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           1024: { slidesPerView: 3 },
//           768: { slidesPerView: 2 },
//           600: { slidesPerView: 1 },
//           0: { slidesPerView: 1 },
//         }}
//         className="customer-logos">
//         {blogs.map((blog) => (
//           <SwiperSlide key={blog.id} className="slide_new">
//             <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer">
//               <img src={blog.featured_image_url} alt={blog.title} />
//             </a>
//             <a
//               className="icome"
//               href={`/blog/${blog.slug}`}
//               target="_blank"
//               rel="noreferrer">
//               {blog.title}
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BlogSlider;

"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { BlogPost, fetchBlogs } from "@/lib/blog";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;
  if (!blogs.length) return <p className="text-center">No blogs available</p>;

  return (
    <div className="container">
      <div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 30000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            600: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="customer-logos">
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="slide_new">
              <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer">
                <img src={blog.featured_image_url} alt={blog.title} />
              </a>
              <a
                className="icome"
                href={`/blog/${blog.slug}`}
                target="_blank"
                rel="noreferrer">
                {blog.title}
              </a>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
