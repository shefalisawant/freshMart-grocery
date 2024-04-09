import { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../routes";
import { FRESHMART, NAV_LINKS, PARTNER_WITH_US } from "../constants";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleClick = () => setShowSideBar(!showSideBar);
  return (
    <nav
      className="flex items-center justify-between p-2 md:p-6 font-mont"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link
          to={PATHS.HOME}
          className="-m-1.5 p-1.5 flex justify-center items-center"
        >
          <img
            className="h-4 w-auto"
            src={"/assets/images/groceries.png"}
            alt=""
          />
          <div className="flex font-display text-dark-green ml-1">
            {FRESHMART}
          </div>
        </Link>
      </div>

      <div className="hidden lg:flex lg:gap-x-8">
        <Link
          to={PATHS.HOME}
          className="font-semibold leading-6 text-gray-900 hover:font-bold"
        >
          {NAV_LINKS.HOME}
        </Link>
        <Link
          to={PATHS.ABOUT}
          className="font-semibold leading-6 text-gray-900 hover:font-bold"
        >
          {NAV_LINKS.ABOUT}
        </Link>
        <Link
          to={PATHS.CATEGORIES}
          className="font-semibold leading-6 text-gray-900 hover:font-bold"
        >
          {NAV_LINKS.CATEGORIES}
        </Link>
        <Link
          to={PATHS.CONTACT}
          className="font-semibold leading-6 text-gray-900 hover:font-bold"
        >
          {NAV_LINKS.CONTACT}
        </Link>
      </div>
      <div className="flex flex-1 justify-end mr-1 md:mr-0">
        <button className="text-white text-xs md:text-sm font-semibold bg-dark-green px-2 py-2 rounded-full hover:font-bold">
          <Link to={PATHS.PARTNER}>{PARTNER_WITH_US}</Link>
        </button>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {showSideBar && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-pale-green px-2 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <Link
                  to={PATHS.HOME}
                  className="-m-1.5 p-1.5 flex justify-center items-center"
                >
                  <img
                    className="h-4 w-auto"
                    src={"/assets/images/groceries.png"}
                    alt=""
                  />
                  <div className="flex font-display text-dark-green ml-1">
                    {FRESHMART}
                  </div>
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleClick}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <div className="mt-2 py-2 px-4" id="disclosure-1">
                      <Link
                        to={PATHS.HOME}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {NAV_LINKS.HOME}
                      </Link>
                      <Link
                        to={PATHS.ABOUT}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {NAV_LINKS.ABOUT}
                      </Link>
                      <Link
                        to={PATHS.CATEGORIES}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {NAV_LINKS.CATEGORIES}
                      </Link>
                      <Link
                        to={PATHS.CONTACT}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {NAV_LINKS.CONTACT}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
