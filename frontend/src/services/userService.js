import API from "./api";

export const getUsers = async () => {

  const response =
    await API.get("/users");

  return response.data;
};

export const createUser =
  async (data) => {

    const response =
      await API.post("/users", data);

    return response.data;
};