"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

function AdminNavbar() {
  const router = useRouter();

  return (
    <nav>
      <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
          <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
              <a
                href="/admin"
                className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl"
              >
                Admin Dashboard
              </a>
              <div className="flex items-center gap-4">
                <div className="hidden mr-4 lg:block">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                      <a href="/admin/contact" className="flex items-center">
                        Contact
                      </a>
                    </li>
                    <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      <a
                        href="/admin/about"
                        className="flex items-center text-blue-gray-900"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-x-1 text-black">
                  {/* Login and Sign In buttons */}
                </div>
                <button
                  className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                  type="button"
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
