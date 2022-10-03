import type { GetServerSidePropsContext, NextPage } from "next";
import Layout from "../components/Layout";
import HeroContent from "../components/HeroContent";
import { allWorkshops, Workshop } from "contentlayer/generated";
import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  workshops: Workshop[];
};

const Home: NextPage<Props> = ({ workshops }) => {
  return (
    <main>
      <div className="bg-hasolor-800 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <img
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {workshops.map((workshop) => (
              <li key={workshop.slug}>
                <Link
                  href={`/workshop/${workshop.slug}`}
                  className="block hover:bg-gray-50"
                >
                  <a>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-sm font-medium text-indigo-600">
                          {workshop.slug}
                        </p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {workshop.type}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UsersIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {workshop.flag}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <MapPinIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {workshop.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <p>
                            <time dateTime={workshop.date}>
                              {workshop.date}
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const workshops = allWorkshops;
  return {
    props: { workshops, isListing: true },
  };
}
