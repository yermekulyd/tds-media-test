import axios from "axios";
import { User } from "../types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  const users = response.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    skills: user.skills || [],
    registrationDate: user.registrationDate || new Date().toISOString(),
  }));
  return users;
};

export const addUser = (user: User) => axios.post(API_URL, user);
export const editUser = (user: User) =>
  axios.put(`${API_URL}/${user.id}`, user);
export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
