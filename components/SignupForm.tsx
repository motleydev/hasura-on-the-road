import React from "react";

type Props = {
  slug?: string;
};

export default function SignupForm({ slug }: Props) {
  return (
    <>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium leading-6 text-gray-800">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive email.
            </p>
          </div>
          <div className="mt-5 md:col-span-3 md:mt-0">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hasolor-500 focus:ring-hasolor-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hasolor-500 focus:ring-hasolor-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hasolor-500 focus:ring-hasolor-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hasolor-500 focus:ring-hasolor-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Workshop
                </label>
                <input
                  type="text"
                  name="workshop"
                  id="workshop"
                  disabled={true}
                  value={slug}
                  autoComplete="workshop"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-hasolor-500 focus:ring-hasolor-500 sm:text-sm disabled:border-gray-300 disabled:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium leading-6 text-gray-800">
              Approval
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {
                "Times being what they are, we need you to check the follolwing box."
              }
            </p>
          </div>
          <div className="mt-5 space-y-6 md:col-span-3 md:mt-0">
            <fieldset>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="comments"
                      name="comments"
                      required={true}
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-hasolor-600 focus:ring-hasolor-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-700"
                    >
                      Permission to be emailed
                    </label>
                    <p className="text-gray-500">
                      By registering for the workshop I understand that my
                      information is being shared with Hasura and they may
                      contact me following the event to promote their business
                      and services. I may unsubscribe from this list at any
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}
