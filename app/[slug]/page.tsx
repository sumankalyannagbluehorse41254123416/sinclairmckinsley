import React from "react";
import { fetchOurServeiceData } from "../action/fetchOurServiceData";
import Image from "next/image";

// Helper to safely render HTML content
const RenderHTML = ({ html }: { html: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const serviceSlug = params.slug;

  let data = null;

  try {
    const res = await fetchOurServeiceData(serviceSlug);
    if (res.status) {
      data = res;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Failed to load page.</div>;
  }

  if (!data || !data.pagedata) {
    return <div>Page not found.</div>;
  }

  const { pagedata, pageItemdataWithSubsection } = data;

  // Extract sections
  const mainSection = pageItemdataWithSubsection.find(
    (item: any) => item.section_sequence === 1
  );
  console.log("mainSection", mainSection);
  const benefitsSection = pageItemdataWithSubsection.find(
    (item: any) => item.section_sequence === 2
  );
  const ctaSection = pageItemdataWithSubsection.find(
    (item: any) => item.section_sequence === 3
  );

  const mainSubsections = pageItemdataWithSubsection.find(
    (item: any) => item.section_sequence === 1
  );
  return (
    <>
      <section>
        {mainSection?.image && (
          <div
            className="servicea_details"
            style={{
              backgroundImage: `url(${mainSection.image})`,
              height: "565px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="all_heading">
                <h1 className="any_one">
                  <strong>{mainSection.title}</strong>
                </h1>
              </div>
            </div>
            {pagedata?.description && (
              <div className="col-lg-12 main_pera ">
                <div className="pera">
                  <RenderHTML html={pagedata.description} />
                </div>
              </div>
            )}

            {mainSubsections?.subsections?.find((sub: any) => sub?.id === 887)
              ?.title ? (
              <div className="col-span-1 lg:col-span-7">
                <div className="pera">
                  <div className="wpb_wrapper all_heading">
                    <h1
                      className="any_one mx-auto leading-tight "
                      style={{
                        fontSize: 42,
                        maxWidth: 1000,
                        margin: "0 auto",
                      }}>
                      <strong>
                        {
                          mainSubsections?.subsections?.find(
                            (sub: any) => sub?.id === 887
                          )?.title
                        }
                      </strong>
                    </h1>
                  </div>
                </div>
              </div>
            ) : null}

            {mainSection?.shortDescription && (
              <div className="col-lg-7">
                <div className="pera">
                  <RenderHTML html={mainSection.shortDescription} />
                </div>
              </div>
            )}

            {benefitsSection?.image && (
              <div className="col-lg-5">
                <div className="right_img">
                  <Image
                    src={benefitsSection.image}
                    height={400}
                    width={400}
                    alt={benefitsSection.title || "Service image"}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {mainSubsections?.subsections?.find((sub: any) => sub?.id === 888)
        ?.title ? (
        <div className="wpb_wrapper all_heading">
          <h1
            className="any_one mx-auto leading-tight"
            style={{
              textAlign: "center",
              margin: "0 auto",
              fontSize: 42,
              maxWidth: 1000,
            }}>
            <strong>
              {
                mainSubsections?.subsections?.find(
                  (sub: any) => sub?.id === 888
                )?.title
              }
            </strong>
          </h1>
        </div>
      ) : null}
      {mainSubsections?.subsections?.find((sub: any) => sub?.id === 888)
        ?.description ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <RenderHTML
                html={
                  mainSection?.subsections?.find((sub: any) => sub?.id === 888)
                    ?.description
                }
              />
            </div>
          </div>
        </div>
      ) : null}
      {benefitsSection && (
        <section className="my-5">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h1 className="any_one" style={{ fontSize: "42px" }}>
                  <strong>{benefitsSection.title}</strong>
                </h1>
              </div>
            </div>

            <div className="row">
              {benefitsSection.subsections.map((item: any) => (
                <div className="col-lg-3 col-sm-12 mb-4" key={item.id}>
                  <div className="account_statement">
                    <div className="icon_img">
                      <Image
                        src={item.image}
                        height={400}
                        width={400}
                        alt={item.title}
                        style={{ maxWidth: "60px", height: "auto" }}
                      />
                    </div>
                    <h4>{item.title}</h4>
                    <RenderHTML html={item.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {ctaSection && (
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <RenderHTML html={ctaSection.shortDescription} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}

      <section className="new_c ">
        <div className="container">
          <div className="row mb-5">
            {ctaSection.title && (
              <div className="col-lg-6">
                <div className="wpb_wrapper_1">
                  <h2>{ctaSection.title}</h2>
                  <div className="contact_pay">
                    <a href="#contact-us">CONTACT US</a>
                  </div>
                </div>
              </div>
            )}

            {ctaSection?.image && (
              <div className="col-lg-6">
                <div className="contact_right">
                  <Image
                    src={ctaSection.image}
                    height={400}
                    width={400}
                    alt="Contact"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
