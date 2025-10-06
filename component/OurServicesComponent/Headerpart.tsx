"use client";

import React from "react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
}

interface ServiceHeadingProps {
  sectionData: ServiceData;
  className?: string;
}

export default function ServiceHeading({
  sectionData,
  className = "",
}: ServiceHeadingProps) {
  if (!sectionData) return null;

  return (
    <div className={`col-lg-12`}>
      <div>
        <h2>{sectionData.title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: sectionData.description || "" }}
        />
      </div>
    </div>
  );
}
