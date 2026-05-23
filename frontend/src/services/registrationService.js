import API from "./api";

export const getRegistrations = async () => {

  const response =
    await API.get("/registrations");

  return response.data;
};

export const createRegistration =
  async (data) => {

    const response =
      await API.post(
        "/registrations",
        data
      );

    return response.data;
};

export const deleteRegistration =
  async (id) => {

    const response =
      await API.delete(
        `/registrations/${id}`
      );

    return response.data;
};