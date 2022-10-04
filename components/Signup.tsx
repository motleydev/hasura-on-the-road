import React from "react";
import { useStore } from "../store/store";

type Props = {};

export default function Signup({}: Props) {
  const setFormOpen = useStore((state) => state.setFormOpen);
  return (
    <div className="mt-10 sm:mt-12">
      <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
        <div className="sm:flex">
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              onClick={() => setFormOpen()}
              className="block w-full rounded-md bg-hasolor-500 py-3 px-4 font-medium text-white shadow hover:bg-hasolor-600 focus:outline-none focus:ring-2 focus:ring-hasolor-300 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {"Register for the workshop!"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
