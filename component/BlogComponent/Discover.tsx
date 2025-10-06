// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Discover = () => {
//   return (
//     <div>
//       <Link href="https://www.sinclairmckinsley.co.uk/blog-details/living-in-downtown-in-the-biggest-cities">
//         <div className="card-container">
//           <div className="card-image">
//             <Image
//               src="https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691992519667.jpg"
//               alt=""
//               width={400}
//               height={250}
//             />
//           </div>
//           <div className="card-body">
//             <span className="card-badge card-badge-blue">design</span>
//             <h1>Discover new adventures over the world</h1>
//             <p className="card-subtitle">
//               Adventure and baloons are trends these days these days
//             </p>
//             <div className="card-author">
//               <Image
//                 src="https://wip.tezcommerce.com:3304/admin/iUdyog/blog/70/1691745449848.jpeg"
//                 alt="author avatar"
//                 width={40}
//                 height={40}
//               />
//               <div className="author-info">
//                 <p className="author-name">Jhon Doe</p>
//                 <p className="post-timestamp">2023-08-11</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>

//   );
// };

// export default Discover;

"use client";
import { BlogPost, fetchBlogs } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Discover: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    loadBlogs();
  }, []);

  return (
    <div>
      <div className="container_new">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <div className="card-container">
              <div className="card-image">
                <Image
                  src={blog.featured_image_url}
                  alt={blog.title}
                  width={400}
                  height={250}
                />
              </div>
              <div className="card-body">
                <span className="card-badge card-badge-blue">design</span>
                {/* {Dynamic this desing part} */}
                <h1>{blog.title}</h1>
                <p
                  className="card-subtitle"
                  dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                />
                <div className="card-author">
                  <Image
                    src={blog.author_image_url}
                    alt="author avatar"
                    width={40}
                    height={40}
                  />
                  <div className="author-info">
                    <p className="author-name">{blog.author_name}</p>

                    <p className="post-timestamp">{blog.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
