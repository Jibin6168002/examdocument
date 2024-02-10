import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import banner from "../assets/celeb.png";
import logo from "../assets/real-estate-house.png";
const people = [
  {
    id: 1,
    name: "+91 India",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "+91 jappan",
    avatar:
      "",
  },
  {
    id: 3,
    name: "",
    avatar:
      "",
  },
  {
    id: 4,
    name: "",
    avatar:
      "",
  },
  {
    id: 5,
    name: "",
    avatar:
      "",
  },
  {
    id: 6,
    name: "",
    avatar:
      "",
  },
  {
    id: 7,
    name: "",
    avatar:
      "",
  },
  {
    id: 8,
    name: "",
    avatar:
      "",
  },
  {
    id: 9,
    name: "",
    avatar:
      "",
  },
  {
    id: 10,
    name: "",
    avatar:
      "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Form() {
  const [selected, setSelected] = useState(people[3]);

  return (
    <div>
      <div
        className="flex flex-shrink-0 items-center mt-3"
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-around"
          ,backgroundColor:"#AB9EAA"
        }}
      >
        <div>
          <img id="navimg" src={logo} alt="Your Company" />
        </div>

        <h2 className="  ">XYZ SYSYTEMS LLP</h2>
      </div>
      <div id="formcontainer" style={{display:'flex'}}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-medium leading-9 tracking-tight " style={{color:'#4B96FB'}}> 
              Unlock Exclusive Benefits
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div className="container-div">
                <div className="first div">

              

                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                          Phone Number
                        </Listbox.Label>
                        <div className="relative mt-2">
                        
                          <Listbox.Button className="relative w-50% cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              <span className="ml-3 block truncate">
                                {selected.name}
                              </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Listbox.Button> <input
                 placeholder="54654654654"
                    className="block w-50% rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  ghdhfg"
                  /></Listbox.Button> 
                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                           
                              {people.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "ml-3 block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                  
                </div>

                <div className="second div">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    name
                  </label>
                  <div className="">
                    <input
                      id="number"
                      name="Phone Number"
                      type=""
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email [optional]
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm "
                >
                  Continue
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
     
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Get ready to recive a secret code (OTP) on your phone
              </a>
            </p>
          </div>
        </div>
        <div >
          <img width={900} src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Form;
