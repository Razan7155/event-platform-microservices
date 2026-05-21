import API from "./api";

export const getEvents = async () => {

  const response =
    await API.get("/events");

  return response.data;
};

export const createEvent =
  async (data) => {

    const response =
      await API.post("/events", data);

      return response.data;
};