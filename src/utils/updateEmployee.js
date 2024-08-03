import axios from "axios";

export const updateEmpoyee = async (employeeDetails, updatedEmployeeDetails, id) => {
    const {name, addressLine, city, country, zipCode, contactDetails} = employeeDetails;

        if(name === "" || addressLine === "" || city === "" || country === '' || zipCode === "" || contactDetails === "") {
            return {success: false};
        }

        try {
            await axios
            .patch(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${id}`, updatedEmployeeDetails, {
                headers: {
                    'projectId': import.meta.env.VITE_PROJECT_ID,
                    'environmentId': import.meta.env.VITE_ENVIRONMENT_ID
                }
            });

            return {success: true}
        } catch (error) {
            throw new Error("Failed to connection with Database. Please try later.", error)
        }
}