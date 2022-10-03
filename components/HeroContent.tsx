import React from "react";
import HiringPill from "./HiringPill";
import Signup from "./Signup";

type Props = {
  flag: string;
  date: string;
  location: string;
};

export default function HeroContent({
  flag,
  date = "10/25/22",
  location = "Tomorrow in Stockholm",
}: Props) {
  return (
    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
      <div className="lg:py-24">
        <HiringPill />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Hasura on-the-Road!</span>
          <span className="block text-hasolor-400">Get ship done. {flag}</span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Hasura is an open-source tool that brings together all your data into
          a unified GraphQL API. It starts with an instant GraphQL API generated
          from your database, and extends with micro-services, REST APIs, and
          schema federation.
        </p>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          How instant? Less than 5 minutes. And it includes authorization,
          event-triggers, caching, and more. Come see why major brands are
          choosing Hasura in this whole-day, hands-on workshop.
        </p>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-xl xl:text-2xl">
          Free Workshop: {date} at {location}
        </p>

        <Signup />
      </div>
    </div>
  );
}
