import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

export default function HiringPill({}: Props) {
  return (
    <a
      href="https://hasura.io/careers/"
      className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
    >
      <span className="rounded-full bg-hasolor-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
        {"We're hiring"}
      </span>
      <span className="ml-4 text-sm">Visit our careers page</span>
      <ChevronRightIcon
        className="ml-2 h-5 w-5 text-gray-500"
        aria-hidden="true"
      />
    </a>
  );
}
