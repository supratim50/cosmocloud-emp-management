import axios from "axios";

export const deleteEmployeeById = async (empId) => {
    console.log(empId);
    try {
        await axios.delete(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${empId}`, {
            data: {},
            headers: {
                'projectId': import.meta.env.VITE_PROJECT_ID,
                'environmentId': import.meta.env.VITE_ENVIRONMENT_ID
            }
        });
    } catch (error) {
        return {message: "Failed to connect with Database. Please try again later.", error: error}
    }
}