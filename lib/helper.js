const BASE_URL = "http://localhost:3000";

//get all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();
  return json;
};

//get single user
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

//post user
export const addUser = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/users`, options);
  const json = await response.json();
  return json;
};

//update user
export const updateUser = async (userId, formData) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BASE_URL}/api/users/${userId}`, options);
  const json = await response.json();
  return json;
};

//delete user
export const deleteUser = async (userId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  return json;
};
