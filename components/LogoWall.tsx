import React from "react";

type Props = {};

export default function LogoWall({}: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-lg font-semibold text-gray-600">
          Who else uses Hasura? Rezognize some of these players?
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="max-h-12" src="/logos/walmart.png" alt="Walmart" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="max-h-12" src="/logos/netlify.png" alt="Netlify" />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img
              className="max-h-12"
              src="/logos/atlassian.png"
              alt="Atlassian"
            />
          </div>
          <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <img className="max-h-12" src="/logos/airbus.png" alt="Airbus" />
          </div>
        </div>
        <a
          className="block my-4 text-center text-hasolor-400 hover:text-hasolor-700 "
          href="https://hasura.io/case-studies/"
        >
          Read here for even more case studies
        </a>
      </div>
    </div>
  );
}
