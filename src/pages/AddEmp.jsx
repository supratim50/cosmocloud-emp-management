import React, {useState} from 'react'
import TextInput from '../components/TextInput';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../utils/createEmployee';

const AddEmp = () => {

    const navigate = useNavigate();

    const [employeeDetails, setEmployeeDetails] = useState({});
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // this function is for update the form 
    const updateDetails = (updatedObject) => {
        setEmployeeDetails(preValue => ({...preValue, ...updatedObject}))
    }

    // create new employee 
    const onSubmit = async () => {
        setIsError(false);
        setIsLoading(true);
        
        const {success, data} = await createEmployee(employeeDetails);

        if(!success) {
            setIsError(true);
            setIsLoading(false);
            return;
        };
        
        navigate(`/employee-datails/${data.id}`);
        setIsLoading(false);
    }


  return (
    <div className='w-full lg:w-[60%]'>
        <TextInput 
            name="name"
            label={"Name"} 
            placeholder={"Please enter your name"} 
            classes={"mb-2 lg:mb-4"} 
            changeHandler={updateDetails}
            value={employeeDetails.name}
        />
        <TextInput 
            name="addressLine"
            label={"Address line1"} 
            type='textarea'
            placeholder={"Please enter your address"} 
            classes={"mb-2 lg:mb-4"} 
            changeHandler={updateDetails}
            value={employeeDetails.addressLine}
        />
        <div 
            className='flex justify-between flex-col md:flex-row items-center mb-2 lg:mb-4'
        >
            <TextInput 
                name="city"
                label={"City"} 
                placeholder={"Please enter your city"} 
                classes={"md:mr-1"} 
                changeHandler={updateDetails}
                value={employeeDetails.city}
            />
            <TextInput 
                name="country"
                label={"Country"} 
                placeholder={"Please enter your country"} 
                classes={"md:ml-1 mt-2 md:mt-0"} 
                changeHandler={updateDetails}
                value={employeeDetails.country}
            />
        </div>
        <div 
            className='flex justify-between flex-col md:flex-row items-center mb-2 lg:mb-4'
        >
            <TextInput 
                name="zipCode"
                label={"Zipcode"} 
                placeholder={"Please enter your zipcode"} 
                classes={"md:mr-1"} 
                changeHandler={updateDetails}
                value={employeeDetails.zipCode}
            />
            <TextInput 
                name="contactDetails"
                label={"Emial or Phone"} 
                placeholder={"Please enter your email or phone"} 
                classes={"md:ml-1 mt-2 md:mt-0"} 
                changeHandler={updateDetails}
                value={employeeDetails.contactDetails}
            />
        </div>
        <h3 className={`text-red-600 font-bold text-lg mb-2 lg:mb-4 ${isError ? "visible" : "invisible"}`}>* Please enter all the details.</h3>
        <button onClick={onSubmit} className='text-lg md:text-xl py-2 px-4 md:px-8 bg-orange-600 text-white rounded-md w-full cursor-pointer hover:opacity-90 transition'>
           {
            isLoading ? "Loading..." : "Create"
           } 
        </button>
    </div>
  )
}

export default AddEmp