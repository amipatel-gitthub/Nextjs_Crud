"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);

  const [searchRecord, setSearchRecord] = useState('')

  const handleSearch = (e) => {
    setSearchRecord(e.target.value)
  }

  const filterSearchRecord = records.filter((record) => 
    record.uname.toLocaleLowerCase().includes(searchRecord.toLocaleLowerCase())
  )
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("UserData : ", formData);

    localStorage.setItem("next-Formik_userData", JSON.stringify(records));

    createRecord(formData);

    setFormData({});
  };

  const createRecord = (data) => {
    const id = Date.now().toString();
    const newRecord = { ...data, id };
    setRecords([...records, newRecord]);
  };

  // ========== ** search query **============

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-center mt-10 font-bold">
          Dummy project to learn Next-Formik
        </h1>
        <h2 className="text-center mt-10 underline font-semibold ">
          Property table
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto mt-20">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="enter your name"
              aria-label="Full name"
              name="uname"
              value={formData.uname || ""}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Add
            </button>
          </div>
        </form>

        <input type="text" placeholder="search..." className="mt-10"
        value={searchRecord}
        onChange={handleSearch}
        />

        <table className="min-w-full text-left text-sm font-light mt-20 bg-white border text-center">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                User Name
              </th>
              {/* <th scope="col" className="px-6 py-4">
                action
              </th> */}
            </tr>
          </thead>
          <tbody>
            {filterSearchRecord.map((value) => (
              <tr
                key={value.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="whitespace-nowrap px-6 py-4">{value.uname}</td>
                {/* <td className="whitespace-nowrap px-6 py-4">.....</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
