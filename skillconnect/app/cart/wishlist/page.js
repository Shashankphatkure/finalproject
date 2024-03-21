import Blogcard from "@/components/Important-cards/Blogcard";
import Coursecard from "@/components/Important-cards/Coursecard";
import Coursecardenrolled from "@/components/Important-cards/Coursecardenrolled";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarDaysIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Favourite Courses",
    stat: "10",
    icon: RectangleStackIcon,
  },
  {
    id: 2,
    name: "Favourite Events",
    stat: "10",
    icon: CalendarDaysIcon,
  },
  {
    id: 3,
    name: "Favourite Blogs",
    stat: "12",
    icon: NewspaperIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Favourites
        </h1>

        <div>
          <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-gray-100 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6  "
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    {item.stat}
                  </p>
                  <p
                    className={classNames(
                      item.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600",
                      "ml-2 flex items-baseline text-sm font-semibold"
                    )}
                  >
                    <span className="sr-only">
                      {" "}
                      {item.changeType === "increase"
                        ? "Increased"
                        : "Decreased"}{" "}
                      by{" "}
                    </span>
                  </p>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        My Favourite - View all
                        <span className="sr-only"> {item.name} stats</span>
                      </a>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className="mt-6 text-sm font-bold tracking-tight text-gray-400 sm:text-4xl  mx-auto max-w-7xl px-6 lg:px-8">
          Courses_
        </h3>

        <section className="mt-12 ">
          <Coursecard />
        </section>

        <h3 className="mt-12 text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl mx-auto max-w-7xl px-6 lg:px-8">
          Events_
        </h3>

        <section className="mt-12">
          <Coursecardenrolled />
        </section>

        <h3 className="mt-12 text-2xl font-bold tracking-tight text-gray-400 sm:text-4xl mx-auto max-w-7xl px-6 lg:px-8">
          Blogs_
        </h3>

        <section className="mt-12">
          <Blogcard />
        </section>
      </div>
    </div>
  );
}
