// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { FC, useEffect, useState } from "react";
// import { fetchBlogData } from "@/app/action/fetchBlogData";
// import { fetchBlogs, BlogPost } from "@/lib/blog";

// // Types
// interface EditReview {
//   id: number;
//   website_id: number;
//   page_id: number;
//   author_name: string;
//   rating: string;
//   comment: string;
//   date: string;
//   created_by: string | null;
//   updated_by: string | null;
//   created_at: string;
//   updated_at: string;
// }

// interface Subsection {
//   id: number;
//   title: string;
//   shortDescription: string;
//   longDescription: string;
//   image: string | null;
// }

// interface ApiBlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   uuid: string;
//   description: string;
//   cover_image_url: string;
//   created_at: string;
//   author_id: string | null;
//   editReviedata?: EditReview[];
//   pageItemdataWithSubsection?: Subsection[];
// }

// const BlogDetailPage: FC<{ params: { slug: string } }> = ({ params }) => {
//   const [blogData, setBlogData] = useState<ApiBlogPost | null>(null);
//   const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const blogSlug = params.slug;

//   // Fetch main blog data
//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetchBlogData(blogSlug);

//         if (response?.status && response?.pagedata) {
//           setBlogData({
//             ...response.pagedata,
//             editReviedata: response.editReviedata || [],
//             pageItemdataWithSubsection:
//               response.pageItemdataWithSubsection || [],
//           });
//         } else {
//           setError("Failed to load blog data");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("An error occurred while fetching the blog data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetch recent posts dynamically
//   useEffect(() => {
//     const loadRecentPosts = async () => {
//       try {
//         const posts = await fetchBlogs();
//         const filtered = posts.filter((p) => p.id !== blogData?.id);
//         setRecentPosts(filtered.slice(0, 5));
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     if (blogData) loadRecentPosts();
//   }, [blogData]);

//   if (loading) return <div>Loading...</div>;
//   if (error || !blogData) return <div>{error || "Blog post not found"}</div>;

//   const authorName =
//     blogData.editReviedata?.[0]?.author_name || "Unknown Author";

//   const formattedDate =
//     blogData.editReviedata?.[0]?.date ||
//     new Date(blogData.created_at).toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });

//   return (
//     <>
//       <div className="cs-main-post">
//         <figure>
//           <Image
//             className="blgs_img"
//             src={blogData.cover_image_url}
//             alt={blogData.title}
//             width={1200}
//             height={600}
//             style={{ width: "100%", height: "auto" }}
//             priority
//           />
//         </figure>
//       </div>

//       <div className="container">
//         <div className="cs-blog-detail">
//           <div className="blog-details_heading text-center mt-4 mb-4">
//             <h2>{blogData.title}</h2>
//           </div>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <section className="blogWrapper">
//         <div className="container">
//           <div className="blog_inner">
//             <article className="mainBlog">
//               <div className="cs-post-title">
//                 <div className="post-option">
//                   <span className="post-date ani">
//                     <p>{formattedDate}</p>
//                   </span>
//                 </div>
//                 <div className="cs-author">
//                   <div className="cs-text ani">
//                     <p>{authorName}</p>
//                   </div>
//                 </div>
//               </div>

//               <div dangerouslySetInnerHTML={{ __html: blogData.description }} />
//             </article>

//             {/* Sidebar */}
//             <aside className="sidebar-widget latest-news">
//               <div className="sidebar-title">
//                 <h3>Recent Posts</h3>
//               </div>
//               <div className="widget-content">
//                 {recentPosts.map((post) => (
//                   <Link
//                     key={post.id}
//                     href={`/blog/${post.slug}`}
//                     className="block mb-4">
//                     <article className="post flex items-center gap-3">
//                       <figure className="thumb">
//                         <Image
//                           src={post.featured_image_url || "/default-blog.jpg"}
//                           alt={post.title}
//                           width={80}
//                           height={80}
//                           className="object-cover rounded"
//                         />
//                       </figure>
//                       <div>
//                         <h5>{post.title}</h5>
//                         <div className="post-info text-sm text-gray-500">
//                           {new Date(post.tag).toLocaleDateString("en-US", {
//                             month: "short",
//                             day: "numeric",
//                             year: "numeric",
//                           })}
//                         </div>
//                       </div>
//                     </article>
//                   </Link>
//                 ))}
//               </div>
//               <Link href="/blog" className="view_blog">
//                 View More
//               </Link>
//             </aside>
//           </div>
//         </div>
//       </section>

//       {/* Subsections */}
//       {(blogData.pageItemdataWithSubsection || []).map((cta) => (
//         <section className="new_c" key={cta.id}>
//           <div className="container">
//             <div className="row mb-5">
//               <div className="col-lg-6">
//                 <div
//                   className="wpb_wrapper_1"
//                   dangerouslySetInnerHTML={{ __html: cta.shortDescription }}
//                 />
//                 <div className="contact_pay">
//                   <a href="#contact-us"> CONTACT US</a>
//                 </div>
//               </div>

//               {cta.image && (
//                 <div className="col-lg-6">
//                   <div className="contact_right">
//                     <Image
//                       src={cta.image}
//                       alt={cta.title}
//                       width={600}
//                       height={400}
//                       className="img-fluid rounded"
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>
//       ))}
//     </>
//   );
// };

// export default BlogDetailPage;

"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { fetchBlogData } from "@/app/action/fetchBlogData";
import { fetchBlogs, BlogPost } from "@/lib/blog";

// Types
interface EditReview {
  id: number;
  website_id: number;
  page_id: number;
  author_name: string;
  rating: string;
  comment: string;
  date: string;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
}

interface Subsection {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string | null;
}

interface ApiBlogPost {
  id: number;
  title: string;
  slug: string;
  uuid: string;
  description: string;
  cover_image_url: string;
  created_at: string;
  author_id: string | null;
  editReviedata?: EditReview[];
  pageItemdataWithSubsection?: Subsection[];
}

const BlogDetailPage: FC<{ params: { slug: string } }> = ({ params }) => {
  const [blogData, setBlogData] = useState<ApiBlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const blogSlug = params.slug;

  // Fetch main blog data
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogData(blogSlug);

        if (response?.status && response?.pagedata) {
          setBlogData({
            ...response.pagedata,
            editReviedata: response.editReviedata || [],
            pageItemdataWithSubsection:
              response.pageItemdataWithSubsection || [],
          });
        } else {
          setError("Failed to load blog data");
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching the blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [blogSlug]);

  // Fetch recent posts dynamically
  useEffect(() => {
    const loadRecentPosts = async () => {
      try {
        const posts = await fetchBlogs();
        const filtered = posts.filter((p) => p.id !== blogData?.id);
        setRecentPosts(filtered.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };

    if (blogData) loadRecentPosts();
  }, [blogData]);

  if (loading) return <div>Loading...</div>;
  if (error || !blogData) return <div>{error || "Blog post not found"}</div>;

  const authorName =
    blogData.editReviedata?.[0]?.author_name || "Unknown Author";

  const formattedDate =
    blogData.editReviedata?.[0]?.date ||
    new Date(blogData.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <>
      {/* Blog Header */}
      <div className="cs-main-post">
        <figure>
          <Image
            className="blgs_img"
            src={blogData.cover_image_url || "/default-blog.jpg"}
            alt={blogData.title}
            width={1200}
            height={600}
            style={{ width: "100%" }}
            priority
          />
        </figure>
      </div>

      <div className="container">
        <div className="cs-blog-detail">
          <div className="blog-details_heading text-center mt-4 mb-4">
            <h2>{blogData.title}</h2>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="blogWrapper">
        <div className="container">
          <div className="blog_inner">
            <article className="mainBlog">
              <div className="cs-post-title">
                <div className="post-option">
                  <span className="post-date ani">
                    <p>{formattedDate}</p>
                  </span>
                </div>
                <div className="cs-author">
                  <div className="cs-text ani">
                    <p>{authorName}</p>
                  </div>
                </div>
              </div>

              <div dangerouslySetInnerHTML={{ __html: blogData.description }} />
            </article>

            {/* Sidebar */}
            <aside className="sidebar-widget latest-news">
              <div className="sidebar-title">
                <h3>Recent Posts</h3>
              </div>
              <div className="widget-content">
                {recentPosts.map((post, index) => (
                  <Link
                    key={`${post.id || index}-${post.slug || "no-slug"}`}
                    href={`/blog/${post.slug}`}
                    className="block mb-4">
                    <article className="post flex items-center gap-3">
                      <figure className="thumb">
                        <Image
                          src={post.featured_image_url || "/default-blog.jpg"}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="object-cover rounded"
                        />
                      </figure>
                      <div>
                        <h5>{post.title}</h5>
                        <div className="post-info text-sm text-gray-500">
                          {new Date(post.tag).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="view_blog">
                View More
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Subsections */}
      {(blogData.pageItemdataWithSubsection || []).map((cta, index) => (
        <section
          className="new_c"
          key={`${cta.id || index}-${cta.title || "subsection"}`}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <div
                  className="wpb_wrapper_1"
                  dangerouslySetInnerHTML={{ __html: cta.shortDescription }}
                />
                <div className="contact_pay">
                  <a href="#contact-us"> CONTACT US</a>
                </div>
              </div>

              {cta.image && (
                <div className="col-lg-6">
                  <div className="contact_right">
                    <Image
                      src={cta.image}
                      alt={cta.title}
                      width={600}
                      height={400}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default BlogDetailPage;
