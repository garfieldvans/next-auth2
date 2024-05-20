'use client'

import { getUsers, deleteUser, checkToken } from "@/app/api/api";
import React, { useEffect, useState } from "react";
import { MdDelete, MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkToken();
    }
  }, []);



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUsers();
        setUserData(userList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteUser(selectedUser.id);
      setUserData(userData.filter(user => user.id !== selectedUser.id));
      setShowModal(false);
      setSelectedUser(null);
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl md:px-8 md:mx-8 shadow-[0px_11px_11px_4px_#cbd5e0]">
      <h1 className="text-center my-3 font-bold text-2xl text-indigo-950 mb-10">Manage User</h1>
      <div>
        <div className="w-full flex flex-row justify-between my-4 md:my-2">
          <div className="flex flex-row md:grid md:grid-cols-8 border rounded-lg border-indigo-950 justify-between md:w-7/12 ">
            <input
              type="text"
              placeholder="Search data user.."
              className="placeholder:italic placeholder:text-sm md:col-span-7 md:mx-4 mx-2 focus:outline-none md:w-full w-40"
            />
            <button
              type="submit"
              className="bg-indigo-950 p-2 text-white justify-center flex items-center rounded-e-md border border-indigo-950 hover:bg-indigo-700 hover:border-indigo-700"
            >
              <MdSearch size={25} />
            </button>
          </div>
          <div className="">
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-gray-800 bg-gray-200 rounded-xl font-medium text-sm md:px-5 px-2 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Filter
              <MdKeyboardArrowDown size={20} />
            </button>
            <div
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700"
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
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3" />
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-indigo-950 whitespace-nowrap capitalize"
                  >
                    {user.fullname}
                  </th>
                  <td className="px-6 py-2">{user.userName}</td>
                  <td className="px-6 py-2">{user.email}</td>
                  <td className="px-6 py-2 flex flex-row gap-5 justify-center">
                    <button className="bg-green-600 hover:bg-green-700 rounded-lg flex justify-center items-center p-2 text-white font-bold">
                      <RiEdit2Fill size={20} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowModal(true);
                      }}
                      className="bg-red-600 hover:bg-red-700 rounded-lg flex justify-center items-center p-2 text-white font-bold"
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
