import API from "./api";

export const getUsers = async () => {

  const token = localStorage.getItem("token");

  const response = await API.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

export const createUser = async (data) => {

  const token = localStorage.getItem("token");
   
  const response = await API.post(
    "/users",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};
