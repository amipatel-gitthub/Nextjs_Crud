"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>

      <div className="bg-gradient-to-r from-blue-400 to-purple-600 text-white min-h-screen flex flex-col justify-center items-center font-sans">
        <header className="text-6xl font-extrabold mb-8">
          Welcome to <span className="text-yellow-300">Creative<span className="text-yellow-500">Land</span></span>!
        </header>
        <section className="text-center">
          <p className="text-xl mb-10">
            Embark on a journey into the realm of imagination and creativity with us.
          </p>
        </section>
        <div className="overflow-hidden w-full max-w-3xl">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              <tr className="hover:bg-blue-300 transition-colors">
                <td className="px-6 py-4">
                  <Link href="/Crud" className="btn-link">
                    CRUD
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/Demo" className="btn-link">
                    Demo
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/Form" className="btn-link">
                    Form
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-blue-300 transition-colors">
                <td className="px-6 py-4">
                  <Link href="/Full_Form" className="btn-link">
                    Full Form
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/Last_Page" className="btn-link">
                    Last Page
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/Selfmade" className="btn-link">
                    Selfmade
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-blue-300 transition-colors">
                <td className="px-6 py-4">
                  <Link href="/Table" className="btn-link">
                    Table
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/U_Table" className="btn-link">
                    User Table
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/User" className="btn-link">
                    User
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-blue-300 transition-colors">
                <td className="px-6 py-4">
                  <Link href="/Code" className="btn-link">
                    Code
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link href="/react_Form" className="btn-link">
                    react_Form
                  </Link>
                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>





    </>
  );
}
