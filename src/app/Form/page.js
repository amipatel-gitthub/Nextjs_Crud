"use client";
import React, { useEffect, useState } from "react";

export default function page() {
    // ============ ** Crud Operation ** ==============

    const [formData, setFormData] = useState({});
    const [records, setRecords] = useState([]);
    const [isEditing, setIsEditing] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Information : ", formData);

        localStorage.setItem("amisha", JSON.stringify(formData));

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
        const up_data = records.map((record) =>
            record.id === data.id ? { ...record, ...data } : record
        );
        setRecords(up_data);
    };

    const deleteRecord = (data) => {
        const up_data = records.filter((value) => value.id !== data);

        setRecords(up_data);
    };

    const handleEdit = (record) => {
        setFormData(record);
        setIsEditing(true);
    };

    const handleDelete = (data) => {
        deleteRecord(data);
    };


    return (
        <>
            <div className="mx-auto mt-4 border p-3 " style={{ width: "800px" }}>
                <div className="mt-5 md:mt-0 md:col-span-2 ">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md ">
                            <div className="px-4 py-5 bg-zinc-200 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block  font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="fname"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.fname || ""}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label className="block  font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lname"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.lname || ""}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                        <label className="block  font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.email || ""}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                        <label className="block  font-medium text-gray-700">
                                            Country / Region
                                        </label>
                                        <select
                                            name="country"
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                                            value={formData.country || ""}
                                            onChange={handleChange}
                                        >
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label className="block  font-medium text-gray-700">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.city || ""}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label className="block  font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.state || ""}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label className="block  font-medium text-gray-700">
                                            ZIP / Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="zip"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm: border-gray-300 rounded-md"
                                            value={formData.zip || ""}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-zinc-100 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {isEditing ? "Update" : "Save"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mx-auto p-3 mt-10" style={{ width: "1500px" }}>
                <div className="flex flex-col bg-zinc-200">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">

                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    First Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    Last Name{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    Email{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    Country{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    City{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    State{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    Zip Code{" "}
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    {" "}
                                                    Action{" "}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {records.map((value) => (
                                                <tr key={value.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                        {value.fname}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                        {value.lname}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {value.email}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {value.country}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {value.city}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {value.state}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                        {value.zip}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex space-x-4">
                                                            <div>
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
        </>
    );
}
