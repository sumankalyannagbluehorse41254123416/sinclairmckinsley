// import Footer from "@/component/Footer";
// import Header from "@/component/Header";
// import Navbar from "@/component/Navber";
// "use client";
import BlogSlider from "@/component/BlogSlider";
import LatestInformation from "@/component/Information";
import OurServices from "@/component/OurServices";
import ClientReview from "@/component/Review";
// import Industries from "@/component/Industries";
// import HeaderContainer from "@/component/HeaderContainer"
// import PhilosophySection from "@/component/OurPhiloshopyDetails";
// import WelcomeContainer from "@/component/welcomeContainer";
import HeaderWrapper from "@/component/wrapperComponent/WrapperHeaderContainer";
// import WelcomeWrapper from "@/component/wrapperComponent/WrapperHeaderContainer";
// import OverBannerWrapper from "@/component/wrapperComponent/WrapperHeaderContainer";
// import HeaderContainer from "@/component/HeaderContainer";
import HeroSliderDataFetch from "@/component/wrapperComponent/WrapperHomeSlider";
import IndustriesWrapper from "@/component/wrapperComponent/WrapperIndustries";
import InformationgWrapper from "@/component/wrapperComponent/wrapperinformation";
import PhilosophyWrapper from "@/component/wrapperComponent/WrapperOurPhiloshopy";
import WelcomeWrapper from "@/component/wrapperComponent/WrapperWelcomeContainer";
import React from "react";
// import "../../style/style.css";
const Page = () => {
  return (
    <React.Fragment>
      {/* <Header />
      <Navbar /> */}
      {/* <Slider /> */}
      {/* <ClientSlider/> */}
      <HeroSliderDataFetch />
      <HeaderWrapper />
      {/* <OverBannerWrapper /> */}
      <WelcomeWrapper />
      {/* <PhilosophySection /> */}
      <PhilosophyWrapper />
      {/* <HeaderContainer /> */}
      {/* <section id="over_div">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="services over_banner">
                <div className="icon">
                  <img
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1691672613032.png"
                    alt="Stress free icon"
                  />
                </div>
                <div className="details_read_more">
                  <h6>Stress free</h6>
                  <p>
                    We are friendly and approachable; you can talk to us about
                    anything, stress will be a thing of the past
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="services over_banner">
                <div className="icon">
                  <img
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1691672677362.png"
                    alt="Helpful & informative icon"
                  />
                </div>
                <div className="details_read_more">
                  <h6>Helpful &amp; informative</h6>
                  <p>
                    We have a Customer Services Manager to help you every step
                    of the way; jargon busting accountancy speak, helping you in
                    meetings and keeping you informed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="services over_banner">
                <div className="icon">
                  <img
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1691672980378.png"
                    alt="Saving you money icon"
                  />
                </div>
                <div className="details_read_more">
                  <h6>Saving you money</h6>
                  <p>
                    We research all sorts of solutions to make sure every penny
                    you can save, you do save
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="services over_banner">
                <div className="icon">
                  <img
                    src="https://wip.tezcommerce.com:3304/admin/module/70/1691673004043.png"
                    alt="Making you money icon"
                  />
                </div>
                <div className="details_read_more">
                  <h6>Making you money</h6>
                  <p>
                    We are growth focused and forward thinking. You set your
                    personal and business goals and we will make sure everything
                    is in place for you to achieve them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="paddy40" id="about_welcome">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sinclair_img_side">
                <img
                  src="https://wip.tezcommerce.com:3304/admin/module/70/1691673387390.jpg"
                  alt="Sinclair McKinsley image 1"
                  className="img_1"
                />
                <img
                  src="https://wip.tezcommerce.com:3304/admin/module/70/1691673387454.png"
                  alt="Sinclair McKinsley image 2"
                  className="img_2"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sinclair_details">
                <h6>Welcome to</h6>
                <h2>Sinclair McKinsley</h2>
                <p>
                  Welcome to Sinclair McKinsley, a growing accountancy firm
                  dedicated to helping you achieve your financial goals. With
                  our team of experts, we offer comprehensive accounting,
                  taxation, and financial planning solutions to businesses and
                  individuals. Trust us to navigate the complexities of finance
                  and secure a prosperous future for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="philoshopy_cl">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="Our_philoshopy_details"
                style={{ position: "relative" }}>
                <h2>Our philosophy is always to do our utmost to</h2>
                <div className="right_mark">
                  <ul>
                    <li>Our mission ‘’ You grow, we grow ’’;</li>
                    <li>Provide friendly, courteous and efficient service;</li>
                    <li>Always exceed your expectations;</li>
                    <li>Listen to what YOU are saying;</li>
                    <li>Communicate with you quickly and fully;</li>
                    <li>Never surprise you with bills you're not expecting;</li>
                    <li>
                      Be honest, truthful and upfront with you at all times;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 blue_back">
              <div
                className="img_blue_section"
                style={{ position: "relative" }}>
                <img
                  src="https://wip.tezcommerce.com:3304/admin/module/70/1691673621038.JPG"
                  alt="Experience image"
                  className="expr_img"
                />
                <img
                  src="https://wip.tezcommerce.com:3304/admin/module/70/1691673621069.png"
                  alt="Philosophy image"
                  className="philod"
                />
                <div className="new_li">
                  <ul>
                    <li>Stress free.</li>
                    <li>Helpful informative.</li>
                    <li>Saving you money.</li>
                    <li>Making you money.</li>
                  </ul>
                </div>
                <div className="expri_btn">
                  <a href="javascript:void(0);">
                    <i className="ri-award-fill"></i> 20 Years Experienced
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <OurServices />

      <section id="Latest_information">
        <InformationgWrapper />
        <div className="bg_information">
          <div className="container">
            <div className="customer-logos">
              <BlogSlider />
            </div>
          </div>
          <div className="view_more mt-5 text-center">
            <a href="https://www.sinclairmckinsley.co.uk/blog">
              VIEW MORE <i className="fa fa-plus" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <Industries /> */}
      <IndustriesWrapper />
      <ClientReview />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Page;
