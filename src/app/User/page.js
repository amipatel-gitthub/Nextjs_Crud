"use client";
import React, { useState } from "react";

export default function Page() {
  // =========== ** Crud operation ** ===============

  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User_Data : ", formData);

    localStorage.setItem("User_Info", JSON.stringify(records));
    sessionStorage.setItem("User_Info", JSON.stringify(records));

    if (isEditing) {
      updateRecord(formData);
      setIsEditing(false);
    } else {
      createRecord(formData);
    }

    setFormData({});
  };

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { ...data, id };
    setRecords([...records, newRecord]);
  };

  const updateRecord = (data) => {
    const up_data = records.map((value) =>
      data.id === value.id ? { ...data, value } : value
    );
    setRecords(up_data);
  };

  const deleteRecord = (id) => {
    const up_data = records.filter((value) => value.id !== id);
    setRecords(up_data);
  };

  const handleEdit = (record) => {
    setFormData(record);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    deleteRecord(id);
  };

  // ============ ** Pagination ** ===============

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);

  const [totalItems] = useState(100);
  const totalPages = Math.ceil(totalItems / itemPerPage);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const displayedItem = records.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageRender = (event) => {
    const abc = parseInt(event.target.value, 10);
    setItemPerPage(abc);
    setCurrentPage(1);
  };

  const handleDropDown = () => {
    return (
      <select
        value={itemPerPage}
        onChange={handlePageRender}
        className="py-1.5  border"
      >
        <option value={1}>1 Item</option>
        <option value={2}>2 Items</option>
        <option value={5}>5 Items</option>
        <option value={10}>10 Items</option>
        <option value={20}>20 Items</option>
      </select>
    );
  };

  // ============== ** filter search ** ==========================

  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchItem(value);

    if (value === "") {
      setRecords(JSON.parse(localStorage.getItem("User_Info")) || []);
    } else {
      const filteredRecords = records.filter((record) =>
        record.uname.toLowerCase().includes(value.toLowerCase())
      );
      setRecords(filteredRecords);
    }
  };

  return (

    
    <div className="container mx-auto mt-36 p-4">
      <div className="mx-auto  lg:w-4/12 bg-white my-5 shadow-md rounded-lg p-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center py-2"
        >
          <input
            className="border-purple-700 mb-2 sm:mb-0 sm:mr-3 pl-4 leading-tight block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            type="text"
            placeholder="Enter your name"
            aria-label="Full name"
            name="uname"
            value={formData.uname || ""}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="flex-shrink-0 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto sm:px-3 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <div className="mx-auto lg:w-6/12 p-3 mt-5">
        <div className="flex flex-col px-5 bg-zinc-100">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle ">
              <div className="flow-root ">
                <div className="float-left divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div className="py-3 ">
                    <div className="relative max-w-xs">
                      <label className="sr-only">Search</label>
                      <input
                        type="text"
                        name="hs-table-with-pagination-search"
                        id="hs-table-with-pagination-search"
                        className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search for items"
                        value={searchItem}
                        onChange={handleSearch}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg
                          className="h-3.5 w-3.5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" float-right divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700 mt-2">
                  <div className="flex items-center space-x-2 py-3">
                    <button
                      type="submit"
                      className=" flex-shrink-0  font-medium border-slate-500 text-sm w-full sm:w-auto sm:px-3 py-1.5 text-center bg-gray-100 border  px-2 shadow-md"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>

                    <p>{handleDropDown()}</p>
                    <button
                      type="submit"
                      className="flex-shrink-0  font-medium border-slate-500 text-sm w-full sm:w-auto sm:px-3 py-1.5 text-center bg-gray-100 border  px-2 shadow-md"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden mb-10">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-200 dark:bg-gray-700 ">
                    <tr className="hover:bg-gray-50">
                      <th className="px-4 py-2 border font-semibold text-gray-700 bg-gray-200">
                        Name
                      </th>
                      <th className="px-4 py-2 border font-semibold text-gray-700 bg-gray-200">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {displayedItem.map((value) => (
                      <tr
                        key={value.id}
                        className="hover:bg-gray-50 text-center"
                      >
                        <td className="border px-4 py-2">{value.uname}</td>
                        <td className="border px-4 py-2">
                          <div className="flex space-x-4 justify-center">
                            <div>
                              {/* Edit button */}
                              <button onClick={() => handleEdit(value)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div>
                              {/* Delete button */}
                              <button onClick={() => handleDelete(value.id)}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
