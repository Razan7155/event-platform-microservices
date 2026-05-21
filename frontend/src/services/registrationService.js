import API from "./api";

export const createRegistration = async (data) => {

  const response =
    await API.post("/registrations", data);

  return response.data;
};