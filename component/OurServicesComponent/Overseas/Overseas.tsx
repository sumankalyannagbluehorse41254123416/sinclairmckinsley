"use client";

import Link from "next/link";
import React from "react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image_url: string;
}

interface OurServicesProps {
  service: ServiceData;
}

const Overseas: React.FC<OurServicesProps> = ({ service }) => {
  return (
    <div>
      <div className="services_icon">
        <img src={service.cover_image_url} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: service.description }} />
      <div className="learn_more">
        <Link href={`/service/${service.slug}`}>
          Learn More{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
};

export default Overseas;
