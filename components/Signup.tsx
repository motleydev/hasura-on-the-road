import React from "react";
import { useStore } from "../store/store";

type Props = {};

export default function Signup({}: Props) {
  const setFormOpen = useStore((state) => state.setFormOpen);
  return (
    <div className="mt-10 sm:mt-12">
      <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
        <div className="sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hasolor-300 focus:ring-offset-2 focus:ring-offset-gray-800"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              onClick={() => setFormOpen()}
              className="block w-full rounded-md bg-hasolor-500 py-3 px-4 font-medium text-white shadow hover:bg-hasolor-600 focus:outline-none focus:ring-2 focus:ring-hasolor-300 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Start free trial
            </button>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
          Start your free 14-day trial, no credit card necessary. By providing
          your email, you agree to our{" "}
          <a href="#" className="font-medium text-white">
            terms of service
          </a>
          .
        </p>
      </form>
    </div>
  );
}
