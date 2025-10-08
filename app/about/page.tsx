// import React from "react";

// export default function AboutPage() {
//   return (
//     <main>
//       {/* Hero Section */}
//       <div
//         className="about"
//         style={{
//           backgroundImage:
//             "url(https://www.sinclairmckinsley.co.uk/asset/img/about.jpeg)",
//           height: "650px",
//           backgroundSize: "cover",
//           marginBottom: "32px",
//         }}>
//         <div className="container">
//           <div className="about_text text-white">
//             <h1>About Us</h1>
//             <p>Sinclair McKinsley Ltd - Nurturing Growth, Ensuring Success</p>
//           </div>
//         </div>
//       </div>

//       {/* Commitment Section */}
//       <div className="container mb-10">
//         <div className="row">
//           <div className="our">
//             <h3>Our Commitment</h3>
//             <p>
//               At Sinclair McKinsley Ltd, we believe that every business has the
//               potential to flourish. Our mission is to guide and support our
//               clients on their journey towards sustainable success. With a focus
//               on promptness, quality, innovation, continuous learning, and
//               unwavering adherence to the law, we are committed to delivering
//               excellence in every aspect of our services.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="container">
//           <div className="row">
//             {/* Image Column */}
//             <div className="image-column col-lg-5 col-md-12 col-sm-12">
//               <div className="inner-column">
//                 <figure className="image-1">
//                   <img
//                     src="https://wip.tezcommerce.com:3304/admin/module/70/1693376475087.jpg"
//                     alt="Founder"
//                     className="img-fluid rounded"
//                   />
//                 </figure>
//               </div>
//             </div>

//             {/* Content Column */}
//             <div className="content-column col-lg-7 col-md-12 col-sm-12 order-2">
//               <div className="inner-column">
//                 <div className="sec-title">
//                   <h3 className="title">Meet Our Visionary Founder</h3>
//                 </div>
//                 <div className="text">
//                   <p>
//                     Our story begins with Mr. Rajesh Chechani (managing
//                     partner), a dynamic and visionary entrepreneur. As one of
//                     the youngest Chartered Accountant in India and as qualified
//                     ACCA accountant, Mr. Chechani laid the foundation of
//                     Sinclair McKinsley Ltd. His passion for excellence, coupled
//                     with his deep understanding of financial strategies, has
//                     been instrumental in shaping our company's principles and
//                     driving its success.
//                   </p>
//                   <p>
//                     Introducing Alina Ciorba (partner), a newly ACCA qualified
//                     accountant, she brings a fresh perspective and a wealth of
//                     competence to our organization. Her unwavering dedication,
//                     loyalty, and trustworthiness make her a key member of our
//                     team, embodying the values that Sinclair McKinsley Ltd holds
//                     dear.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="row mt-6">
//             <div className="col-md-12">
//               <div className="about_us_box">
//                 <p>
//                   Sinclair McKinsley Ltd offers a comprehensive range of
//                   services, including Accountancy, Taxation, and Business
//                   Advisory. What sets us apart is our commitment to tailor our
//                   services to the specific needs of each client. Whether you're
//                   a budding startup or an established enterprise, we work
//                   closely with you to develop personalized strategies that drive
//                   growth and prosperity.
//                 </p>
//                 <p>
//                   Based in the UK, our reach extends far beyond borders. Our
//                   clients benefit from our global perspective and insights,
//                   while still enjoying the advantages of our local expertise.
//                   With Sinclair McKinsley Ltd by your side, you can navigate the
//                   complex world of finance with confidence and make informed
//                   decisions that propel your business forward.
//                 </p>
//                 <p>
//                   Discover the Sinclair McKinsley Ltd difference today. Join us
//                   in achieving your business goals with unwavering support,
//                   innovative strategies, and a dedication to excellence. Contact
//                   us to embark on a journey of growth, success, and financial
//                   empowerment.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Join Section */}
//       <div className="about_join py-12 bg-gray-100">
//         <div className="container">
//           <div className="row text-center">
//             <div className="join_text">
//               <h4 className="text-xl font-semibold mb-4">
//                 Let us be your partners in progress.
//               </h4>
//               <a href="#">Join Us</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// // export default page;
import { aboutFetchData } from "@/lib/about";
import Image from "next/image";
import React from "react";

export default async function AboutPage() {
  // Fetch API data
  const data = await aboutFetchData("42a9d0b6-fb3b-473a-9342-c622d75db5ec");
  const sections = data?.pageItemdataWithSubsection || [];
  return (
    <main>
      {sections.map((section: Record<string, string>, index: number) => {
        // Hero section
        if (index === 0) {
          return (
            <div
              key={section.id}
              className="about"
              style={{
                backgroundImage: `url(${section.image || ""})`,
                height: "650px",
                backgroundSize: "cover",
                marginBottom: "32px",
              }}>
              <div className="container">
                <div className="about_text text-white">
                  <h1>{section.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.shortDescription || "",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        }
        // Commitment / Text sections
        if (section.slug?.includes("commitment")) {
          return (
            <div key={section.id} className="container mb-10">
              <div className="row">
                <div className="our">
                  <h3>{section.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.shortDescription || "",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        }
        // Founder section
        if (section.slug?.includes("founder")) {
          return (
            <section key={section.id} className="about-section">
              <div className="container">
                <div className="row">
                  {/* Image Column */}
                  <div className="image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <figure className="image-1">
                        <Image
                          src={
                            section.image ||
                            "https://via.placeholder.com/400x400"
                          }
                          alt={section.title}
                          width={400}
                          height={400}
                          className="img-fluid rounded"
                        />
                      </figure>
                    </div>
                  </div>
                  {/* Content Column */}
                  <div className="content-column col-lg-7 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                      <div className="sec-title">
                        <h3 className="title">{section.title}</h3>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: section.shortDescription || "",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <div key={section.id} className="row">
                  <div className="col-md-12">
                    <div className="about_us_box">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: section.shortDescription || "",
                        }}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
          );
        }
        return (
          <div key={section.id} className="about-section">
            <div className="container">
              <div className="col-md-12">
                <div className="about_us_box">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section.shortDescription || "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="about_join py-12 bg-gray-100">
        <div className="container">
          <div className="row text-center">
            <div className="join_text">
              <h4 className="text-xl font-semibold mb-4">
                Let us be your partners in progress.
              </h4>
              <a href="#">Join Us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
