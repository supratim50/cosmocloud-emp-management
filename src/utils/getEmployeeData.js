import axios from "axios"

export const getEmployeeData = async (empId) => {
    try {
        const res = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employees/${empId}`, {
            headers: {
                'projectId': import.meta.env.VITE_PROJECT_ID,
                'environmentId': import.meta.env.VITE_ENVIRONMENT_ID
            }
        });
        return res;
    } catch (error) {
        return {error: "Failed to connect with Database. Please try again later."}
    }
}