// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import ContactForm from "./ContactForm";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaBlenderPhone, FaLocationPin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FooterNavMenu } from "./FooterNavMenu";
import Copyright from "./copyright";

<CgMail />;
const Footer: FC = () => {
  return (
    <div className="pt-5 pb-5 footer">
      <div className="container footer_icon_box">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <ul className="footer_contact">
              <li>
                <FaLocationPin /> SincKot House, 211, Station Road, Harrow, HA1
                2TP
              </li>
              <li>
                <Link href="mailto:raj@sinclairmckinsley.co.uk">
                  <CgMail /> raj@sinclairmckinsley.co.uk
                </Link>
              </li>
              <li>
                <Link href="tel:+442084278787">
                  <FaPhoneAlt /> +44 (0) 208 427 8787
                </Link>
              </li>
              <li>
                <Link href="fax:+442038139687">
                  <FaBlenderPhone /> +44 (0) 203 813 9687
                </Link>
              </li>
            </ul>
            <Link href="/">
              <Image
                src="/asset/sinkot_logo.webp"
                className="fottr_logo"
                alt="Sinclair McKinsley Logo"
                width={150}
                height={50}
              />
            </Link>
            <p className="pr-5 text-white-50">
              Sinckot Group, founded in 2006, started with a core focus on
              Healthcare, Property, Accounting, Online Healthcare Solutions,
              Financial Consultancy, and Business Advisory services.
            </p>
            <ul className="form_social">
              <li>
                <Link
                  href="https://www.linkedin.com/company/sinclair-mckinsley-limited/?viewAsMember=true"
                  target="_blank">
                  {/* <i className="fa fa-linkedin" aria-hidden="true"></i> */}
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">QUICK Links</h4>
            <FooterNavMenu />
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="row mt-5">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
