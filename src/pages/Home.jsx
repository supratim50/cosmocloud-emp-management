import React, { useEffect, useState } from 'react'
import ListCard from '../components/ListCard'
import { deleteEmployeeById } from '../utils/deleteEmployee';
import { getAllEmployees } from '../utils/getAllEmployees';

import { ToastContainer, toast } from 'react-toastify'; 

const Home = () => {

  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = async (id) => {
    await deleteEmployeeById(id);
    // to delete the employee by ID
    setEmployees((prev) => prev.filter((emp) => emp._id !== id));
    toast("Employee Deleted.");
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const allEmployees = await getAllEmployees();
      setEmployees(allEmployees);
      setIsLoading(false);
    }

    getData();
  }, [])

  if(isLoading) return <h1>Loading...</h1>

  if(employees.length === 0) return <h1>No Employees in the system</h1>
  
  return (
    <>
      <div className='w-full lg:w-[60%]'>
        {
          employees.map((employee) => (
            <ListCard 
              key={employee._id}
              name={employee.name}
              id={employee._id}
              classes="mb-2"
              clickHandler={onDelete}
            />
          ))
        }         
      </div>
      <ToastContainer />
    </>
  )
}

export default Home