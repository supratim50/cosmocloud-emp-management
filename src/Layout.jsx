import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <nav className='bg-white shadow-md px-3 lg:px-24 py-3 flex justify-between items-center fixed w-full'>
            <Link to={"/"}>
              <h2 className='text-xl md:text-2xl font-bold text-orange-600'>Employee Details</h2>
            </Link>
            <Link to={"/add-employee"}>
              <button className='text-lg md:text-xl py-2 px-4 bg-orange-600 text-white rounded-md flex items-center hover:opacity-90 transition'>
                Add&nbsp;<span className='hidden md:block'>Employee</span>
              </button>
            </Link>
        </nav>
        <main className='pt-20 px-3 lg:px-24 flex justify-center'>
            <Outlet />
        </main>
    </>
  )
}

export default Layout