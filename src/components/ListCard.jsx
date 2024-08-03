import React from 'react'
import { Link } from 'react-router-dom'

const ListCard = ({name, id, classes, clickHandler}) => {
  return (
    <div className={`flex justify-between items-center w-full bg-gray-200 p-2 rounded-md ${classes && classes}`}>
        <Link className='flex-1' to={`/employee-datails/${id}`}>
            <div>
                <h1 className='text-lg md:text-xl font-bold'>{name}</h1>
                <p className='text-sm md:text-md text-gray-600'>
                    <span className='font-bold'>ID -</span>
                    {id}
                </p>
            </div>
        </Link>
        <button 
            className="py-1 px-2 text-lg md:text-xl w-uto bg-orange-600 text-white rounded-md cursor-pointer transition hover:opacity-90"
            onClick={() => clickHandler(id)}
        >
            Delete
        </button>
    </div>
  )
}

export default ListCard