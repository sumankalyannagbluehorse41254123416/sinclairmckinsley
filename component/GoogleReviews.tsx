// components/GoogleReviews.tsx
"use client";

import Image from "next/image";

const GoogleReviews = () => {
  return (
    <div className="flex flex-wrap gap-4 p-6 bg-gray-100">
      {/* Left Side - Overall Rating */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold text-center">5.0</h2>
        <div className="flex justify-center text-yellow-500 my-2">
          {"★".repeat(5)}
        </div>
        <p className="text-center font-medium text-lg">
          Google Overall Rating <br /> Sinclair McKinsley
        </p>
        <p className="text-center text-gray-500 mt-2">2 Reviews</p>

        {/* First small review */}
        <div className="flex items-start gap-3 mt-6 border-t pt-4">
          <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center font-bold rounded-full">
            H
          </div>
          <div>
            <p className="text-blue-600 font-medium">Harrow Electronics</p>
            <p className="text-xs text-gray-500">August 12, 2014 06:52 PM</p>
            <div className="text-yellow-500 text-sm mt-1">{"★".repeat(4)}</div>
          </div>
        </div>
      </div>

      {/* Right Side - Individual Review */}
      <div className="bg-white shadow-md rounded-lg p-6 w-[500px] flex flex-col">
        <div className="flex items-center gap-3">
          <Image
            src="/profile.png" // replace with real image path
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-blue-600 font-medium">sandeep singh</p>
            <p className="text-xs text-gray-500">October 12, 2023 06:52 PM</p>
          </div>
        </div>

        <div className="text-yellow-500 mt-3">{"★".repeat(5)}</div>

        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
          Excellent team with staff that all are willing to help regardless of
          the matter. I have over 5 companies with them & the service is
          impeccable, Alina & Raj both are on point & provide a service that is
          second to none!
        </p>
      </div>
    </div>
  );
};

export default GoogleReviews;
