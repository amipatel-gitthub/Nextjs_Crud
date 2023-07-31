"use client";
import { Ma_Shan_Zheng } from "next/font/google";
import React, { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({});
  const [records, setRecords] = useState([]);
  const [isEdit, setIsEdit] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Information", formData);
    
    localStorage.setItem("USEr_Information",JSON.stringify(records))

    if(isEdit)
    {
        updateRecord()
        setIsEdit(false)
    }
    else
    {
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
    const up_data = records.map((value) => (
        value.id === data.id ? {...value, ...data} : value
    ))

    setRecords(up_data)
  }

  const handleEdit = (record) => {
    updateRecord(record)
    setIsEdit(true)
  }

  return (
    <>
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
   

      <div className="mx-40">
        <table className="min-w-full  text-sm font-light mt-20 bg-white  text-center border-collapse border border-slate-800">
          <thead>
            <tr>
              <th className="border border-slate-300 ...">Name</th>
              <th className="border border-slate-300 ...">Change</th>
            </tr>
          </thead>
          
          <tbody>
            {records.map((value) => (
              <tr key={value.id}>
                <td className="mt-5 border border-slate-300 ">{value.uname}</td>
                <td className="border border-slate-300 ">
                  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 my-1 text-sm border-4 text-white py-0  px-2 rounded me-2"
                    onClick={() => handleEdit(value)}
                  >
                    Edit
                  </button>
                  <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 my-1 text-sm border-4 text-white py-0 px-2 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
