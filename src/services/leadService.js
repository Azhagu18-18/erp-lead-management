/* eslint-disable */
import API from "../api/axios";

export const getLeads = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};