import API from "./api";

// USERS COUNT
export const getUsersCount = async () => {
  const res = await API.get("/users");
  return res.data.length;
};

// EVENTS COUNT
export const getEventsCount = async () => {
  const res = await API.get("/events");
  return res.data.length;
};

// REGISTRATIONS COUNT
export const getRegistrationsCount = async () => {
  const res = await API.get("/registrations");
  return res.data.length;
};