import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <nav
      className={`md:border-b-[1px] fixed top-0 w-full border-gray-700 bg-white  dark:bg-gray-900`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center justify-start">
          <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white font-mono">
            Movie App
          </span>
        </a>
        <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Bars3Icon className="w-[50px] h-[50px]" />
        </div>
        <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 ${
                  router.route === "/" ? "text-blue-500" : "text-gray-900"
                } md:active:text-blue-700 md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/on-air"
                className={`block py-2 pl-3 pr-4 ${
                  router.route === "/on-air" ? "text-blue-500" : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                On Airing
              </Link>
            </li>
            <li>
              <Link
                href="/coming-soon"
                className={`block py-2 pl-3 pr-4 ${
                  router.route === "/coming-soon"
                    ? "text-blue-500"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Coming Soon
              </Link>
            </li>
            <li>
              <Link
                href="/favorite"
                className={`block py-2 pl-3 pr-4 ${
                  router.route === "/favorite"
                    ? "text-blue-500"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                Favorite
              </Link>
            </li>
            {session ? (
              <li>
                <Link
                  href="/api/auth/signout"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Sign Out
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  href="/api/auth/signin"
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
