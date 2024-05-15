import React from "react";
import { User } from "../types/user";
import { Button } from "./ui/button";

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            ID
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Name
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Username
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Email
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Skills
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Registration Date
          </th>
          <th className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-300">{user.id}</td>
            <td className="py-2 px-4 border-b border-gray-300">{user.name}</td>
            <td className="py-2 px-4 border-b border-gray-300">
              {user.username}
            </td>
            <td className="py-2 px-4 border-b border-gray-300">{user.email}</td>
            <td className="py-2 px-4 border-b border-gray-300">
              {Array.isArray(user.skills) ? user.skills.join(", ") : "N/A"}
            </td>
            <td className="py-2 px-4 border-b border-gray-300">
              {user.registrationDate}
            </td>
            <td className="py-2 px-4 border-b border-gray-300">
              <Button
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onEdit(user)}
              >
                Edit
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
