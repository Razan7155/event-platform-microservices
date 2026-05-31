import API from "./api";

export const getRegistrations = async () => {
  const response = await API.get("/registrations");
  return response.data;
};

export const createRegistration = async (data) => {

  const response = await API.post(
    "/registrations",
    data
  );

  console.log("STATUS =", response.status);
  console.log("DATA =", response.data);

  if (response.data?.status >= 400) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export const updateRegistration = async (id, data) => {
  const response = await API.put(
    `/registrations/${id}`,
    data
  );

  return response.data;
};

export const deleteRegistration = async (id) => {
  const response = await API.delete(
    `/registrations/${id}`
  );

  return response.data;
};