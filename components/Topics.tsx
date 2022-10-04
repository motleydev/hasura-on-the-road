import React from "react";

import * as icons from "@heroicons/react/24/outline";

import { Topic } from "contentlayer/generated";

type Props = {
  topics: Topic[];
};

export default function Agenda({ topics }: Props) {
  return (
    <div id="agenda" className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-700 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {"What we'll learn"}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            The topics of the workshops will vary and follow a non-linear path
            as we connect different parts of the stack together, but at the end
            of the day, these are the concepts you should come away with.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          {"What we'll learn"}
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {topics.map((link) => {
            const Icon = icons[link.icon];
            return (
              <div
                key={link.title}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-hasolor-600 p-5 shadow-lg">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800">
                    {link.title}
                  </h3>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: link.body.html }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
