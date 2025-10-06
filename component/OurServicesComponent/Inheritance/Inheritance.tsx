"use client";

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

const Inheritance: React.FC<OurServicesProps> = ({ service }) => {
  // console.log(service, "&&&&&&&&&&&&&&&&&&&&&&&&&");
  return (
    <div>
      <div className="services_icon">
        <img src={service.cover_image_url} alt={service.title} />
      </div>
      <h6>{service.title}</h6>
      <div dangerouslySetInnerHTML={{ __html: service.description }} />
      <div className="learn_more">
        <a href={`/${service.slug}`}>
          Learn More{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Inheritance;
