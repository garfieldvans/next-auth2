import React from "react";
import {
  MdDelete,
  MdEdit,
  MdKeyboardArrowDown,
  MdSearch,
} from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const Users = () => {
  return (
    <div className="bg-white p-4 rounded-xl md:px-8 md:mx-8">
      <h1 className="text-center my-3 font-bold text-2xl">Manage User</h1>
      <div>
        <div className="w-full flex flex-row justify-between my-4">
          <div className="grid grid-cols-8 border rounded-lg border-indigo-950 w-6/12 ">
            <input
              type="text"
              placeholder="Search user, username, or email"
              className="placeholder:italic placeholder:text-sm col-span-7 mx-4 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-indigo-950 p-2 text-white justify-center flex items-center rounded-e-md border border-indigo-950 hover:bg-indigo-700 hover:border-indigo-700"
            >
              <MdSearch size={25} />
            </button>
          </div>
          <div className="w-4/12">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-gray-800 bg-gray-200 rounded-full font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Select status
              <MdKeyboardArrowDown size={20} />
            </button>
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg drop-shadow-lg border">
          <table className="w-full text-sm text-left rtl:text-right text-indigo-950 ">
            <thead className="text-sm text-indigo-950 uppercase bg-gray-200 border-b">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-indigo-950 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-2">Silver</td>
                <td className="px-6 py-2">Laptop</td>
                <td className="px-6 py-2">$2999</td>
                <td className="px-6 py-2 flex flex-row gap-5 justify-center">
                  <button className="bg-green-600 hover:bg-green-700 rounded-lg flex justify-center items-center p-2 text-white font-bold">
                    <RiEdit2Fill size={20} />
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 rounded-lg flex justify-center items-center p-2 text-white font-bold">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-indigo-950 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-2">Silver</td>
                <td className="px-6 py-2">Laptop</td>
                <td className="px-6 py-2">$2999</td>
                <td className="px-6 py-2 flex flex-row gap-5 justify-center">
                  <button className="bg-green-600 hover:bg-green-700 rounded-lg flex justify-center items-center p-2 text-white font-bold">
                    <RiEdit2Fill size={20} />
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 rounded-lg flex justify-center items-center p-2 text-white font-bold">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
