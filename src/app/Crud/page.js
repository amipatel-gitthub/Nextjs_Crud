'use client'
import React, { useState } from 'react'

export default function page() {

    // =========== ** crud operation ** =================

    const [formData, setFormData] = useState({})
    const [records, setRecords] = useState([])
    const [isEditing, setIsEditing] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("User Crud Data : ", formData);

        localStorage.setItem("Amisha", JSON.stringify(records))

        if (isEditing) {
            updateRecord(formData)
            setIsEditing(false)
        }
        else {
            createRecord(formData)
        }

        setFormData({})
    }

    const createRecord = (data) => {
        const id = Date.now().toString();
        const newRecord = { ...data, id }
        setRecords([...records, newRecord])
    }

    const updateRecord = (data) => {
        const up_data = records.map((value) => (
            value.id === data.id ? { ...value, ...data } : value
        ))
        setRecords(up_data)
    }

    const handleEdit = (record) => {
        setFormData(record)
        setIsEditing(true)
    }

    const deleteRecord = (id) => {
        const up_data = records.filter((value) => value.id !== id)

        setRecords(up_data)
    }

    const handleDelete = (id) => {
        deleteRecord(id)
    }


    // ========== ** pagination ** =================

    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(10)

    const totalItems = records.length
    const totalPages = Math.ceil(totalItems / itemPerPage);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const displayedItems = records.slice(startIndex, endIndex)

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleItemPerPageChange = (event) => {
        const abc = parseInt(event.target.value, 10);
        setItemPerPage(abc);
        setCurrentPage(1);
      };
    
      const renderPagination = () => {
        return (
          <select value={itemPerPage} onChange={handleItemPerPageChange}>
            <option value={1}>1 item</option>
            <option value={2}>2 items</option>
            <option value={5}>5 items</option>
            <option value={10}>10 items</option>
            <option value={20}>20 items</option>
          </select>
        );
      };


    // ============** search query **==============


    return (
        <>
            <div className=''>
                <form className="w-full max-w-lg mx-auto border mt-20 p-5" onSubmit={handleSubmit}>
                    <p className="text-center mt-3 " >Crud operation</p>
                    <hr className="h-px my-5 bg-gray-500 border-0" />

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Enter your name"
                                name='uname'
                                value={formData.uname || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="your surname"
                                name='sname'
                                value={formData.sname || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Please enter password"
                                name='pwd'
                                value={formData.pwd || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="City"
                                name='cty'
                                value={formData.cty || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                                    name='dr_down'
                                    value={formData.dr_down || ""}
                                    onChange={handleChange}
                                >
                                    <option >State</option>
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Zip code"
                                name='zipcode'
                                value={formData.zipcode || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className=' text-center mt-7'>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded-full ">
                            {isEditing ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>

                <div className='mt-10 flex  text-center relative mx-5'>
                    <div>
                        <button type='button' onClick={handlePreviousPage} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded me-2'
                          disabled={currentPage === 1}
                        >
                            Prev.
                        </button>
                    </div>
                    <div className='self-center'>
                        <b>Pagination</b> :  {renderPagination()}
                    </div>
                    <div>
                        <button type='button' onClick={handleNextPage} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                         disabled={currentPage === totalPages}
                        >
                            Next
                        </button>

                    </div>
                    <div className='absolute right-0 self-center '>
                        amisha
                    </div>
                </div>

                <table className="min-w-full  text-sm font-light mt-20 bg-white border text-center">
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" className="px-6 py-4">User Name</th>
                            <th scope="col" className="px-6 py-4">User Surname</th>
                            <th scope="col" className="px-6 py-4">Password</th>
                            <th scope="col" className="px-6 py-4">City</th>
                            <th scope="col" className="px-6 py-4">State</th>
                            <th scope="col" className="px-6 py-4">zip Code</th>
                            <th scope="col" className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedItems.map((value) => (
                            <tr
                                key={value.id}
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                            >
                                <td className="whitespace-nowrap px-6 py-4">{value.uname}</td>
                                <td className="whitespace-nowrap px-6 py-4">{value.sname}</td>
                                <td className="whitespace-nowrap px-6 py-4">{value.pwd}</td>
                                <td className="whitespace-nowrap px-6 py-4">{value.cty}</td>
                                <td className="whitespace-nowrap px-6 py-4">{value.dr_down}</td>
                                <td className="whitespace-nowrap px-6 py-4">{value.zipcode}</td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded me-3"
                                        onClick={() => handleEdit(value)}
                                    >
                                        Edit
                                    </button>
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                                        onClick={() => handleDelete(value.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
