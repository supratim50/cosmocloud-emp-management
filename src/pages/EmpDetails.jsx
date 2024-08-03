import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeData } from '../utils/getEmployeeData';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { updateEmpoyee } from '../utils/updateEmployee';

import { ToastContainer, toast } from 'react-toastify';

const EmpDetails = () => {
    const {id} = useParams();

    const [employeeDetails, setEmployeeDetails] = useState({});
    const [employeeTempDetails, setEmployeeTempDetails] = useState({});
    const [updatedEmployeeDetails, setUpdatedEmployeeDetails] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGetData, setIsGetData] = useState(false);
    const [isConnectionIssue, setIsConnectionIssue] = useState(false);
    

    // this function is for update the form 
    const onChangeHandler = (updatedObject) => {
        setEmployeeDetails(preValue => ({...preValue, ...updatedObject}));
        setUpdatedEmployeeDetails(preValue => ({...preValue, ...updatedObject}));
    }

    // update the employee details
    const onSave = async () => {
        setIsError(false);
        setIsLoading(true);

        if(!isEdit) {
            setIsLoading(false);
            return;
        };

        const {success} = await updateEmpoyee(employeeDetails, updatedEmployeeDetails, id);

        if(!success) {
            setIsError(true);
            setIsLoading(false);
            return;
        };

        setEmployeeTempDetails(prev => ({...prev, ...updatedEmployeeDetails}));

        setIsLoading(false);
        setIsEdit(false);
        
        toast("Employee Details Updated Successfully.");
    }

    const onEdit = () => {
        if(isEdit) {
            setEmployeeDetails(employeeTempDetails);
        }
        setIsEdit((prev) => !prev);
    }

    useEffect(() => {
        const getdata = async () => {
            setIsGetData(true);
            setIsConnectionIssue(false);
            const response = await getEmployeeData(id);

            if(response?.error) {
                setIsConnectionIssue(true);
                return;
            }
            
            setEmployeeDetails(response?.data);
            setEmployeeTempDetails(response?.data);
            setIsGetData(false);
        }

        getdata();
    }, []);

    if(isConnectionIssue) return <h1>Failed to connect with database. Try again later.</h1>

    if(isGetData) return <h1>Loading...</h1>

    return (
    <>
        <div className='w-full lg:w-[60%]'>
            <div className="flex flex-col">
                <h3 className='font-bold text-lg text-orange-600'>
                    Employee ID 
                </h3>
                <p className='font-bold text-md text-gray-400'>{id}</p>
            </div>
            <TextInput 
                name="name"
                label={"Name"} 
                placeholder={"Please enter your name"} 
                classes={"mb-2 lg:mb-4"} 
                changeHandler={onChangeHandler}
                disable={!isEdit}
                value={employeeDetails.name}
            />
            <TextInput 
                name="addressLine"
                label={"Address line1"} 
                type='textarea'
                placeholder={"Please enter your address"} 
                classes={"mb-2 lg:mb-4"} 
                changeHandler={onChangeHandler}
                disable={!isEdit}
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
                    changeHandler={onChangeHandler}
                    disable={!isEdit}
                    value={employeeDetails.city}
                />
                <TextInput 
                    name="country"
                    label={"Country"} 
                    placeholder={"Please enter your country"} 
                    classes={"md:ml-1 mt-2 md:mt-0"}
                    changeHandler={onChangeHandler} 
                    disable={!isEdit}
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
                    changeHandler={onChangeHandler}
                    disable={!isEdit}
                    value={employeeDetails.zipCode}
                />
                <TextInput 
                    name="contactDetails"
                    label={"Emial or Phone"} 
                    placeholder={"Please enter your email or phone"} 
                    classes={"md:ml-1 mt-2 md:mt-0"} 
                    changeHandler={onChangeHandler}
                    disable={!isEdit}
                    value={employeeDetails.contactDetails}
                />
            </div>
            <h3 className={`text-red-600 font-bold text-lg mb-2 lg:mb-4 ${isError ? "visible" : "invisible"}`}>* Please enter all the details.</h3>
            <div className="flex justify-between flex-col md:flex-row items-center">
                <Button 
                    clickHandler={onEdit}
                    classes={"mr-1 mb-2 md:mb-0"}
                >
                    {
                        isEdit ? "Cancle" : "Edit"
                    }
                </Button>
                <Button 
                    disable={!isEdit} 
                    clickHandler={onSave}
                    classes={"ml-1"}
                >
                    {isLoading ? "Loading..." : "Save"}
                </Button>
            </div>
        </div>
        <ToastContainer />
    </>
    )
}

export default EmpDetails