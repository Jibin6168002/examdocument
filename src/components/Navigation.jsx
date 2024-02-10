import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/real-estate-house.png";
import userLogo from "../assets/membership.jpg";
import "./Navigation.css";

const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div>
                      <img id="navimg" src={logo} alt="Your Company" />
                    </div>
                    <div className="heading">
                      <div className="" style={{ textAlign: "center" }}>
                        <h2 className="  ">XYZ SYSYTEMS LLP</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-white-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                   
                    <span className="sr-only">Open main menu</span>
                  
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white-900 text-black"
                              : "text-black-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                          
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-white-900 text-black"
                        : "text-black-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Navigation;
