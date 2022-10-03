import { Party } from "contentlayer/generated";
import React from "react";

type Props = {
  party: Party;
};

export default function AfterParty({ party }: Props) {
  return (
    <div id="afterparty" className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-hasolor-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span className="block">{party.title}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-hasolor-200">
                Join us afterwords for a social gathering with the local
                community!
              </p>
              <p className="mt-4 text-lg leading-6 text-hasolor-200">
                {party.description}
              </p>
              <a
                href={party.link}
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-hasolor-600 shadow hover:bg-hasolor-50"
              >
                Register!
              </a>
            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
            <img
              className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
