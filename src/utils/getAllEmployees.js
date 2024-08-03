import axios from "axios";

export const getAllEmployees = async () => {
    try {
        const {data: {data}} = await axios.get(`https://free-ap-south-1.cosmocloud.io/development/api/employees`, {
          headers: {
            'projectId': import.meta.env.VITE_PROJECT_ID,
            'environmentId': import.meta.env.VITE_ENVIRONMENT_ID
          },
          params: {
            limit: 50,
            offset:0
          }
        });
        return data;
      } catch (error) {
        return {error: "Failed to connect with Database. Please try again later."}
      }
}