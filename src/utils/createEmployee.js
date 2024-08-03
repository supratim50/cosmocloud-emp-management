import axios from "axios";

export const createEmployee = async (employeeDetails) => {
    const {name, addressLine, city, country, zipCode, contactDetails} = employeeDetails;

        if(name === "" || addressLine === "" || city === "" || country === '' || zipCode === "" || contactDetails === "") {
            return {success: false};
        };

        try {
            const {data} = await axios
            .post("https://free-ap-south-1.cosmocloud.io/development/api/employees", employeeDetails, {
                headers: {
                    'projectId': import.meta.env.VITE_PROJECT_ID,
                    'environmentId': import.meta.env.VITE_ENVIRONMENT_ID
                }
            });
    
            return {success: true, data};
        } catch (error) {
            throw new Error("Failed to connection with Database. Please try later.", error)
        }
}