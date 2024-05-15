import React from "react";
import { User } from "../types/user";
import UserTable from "./UserTable";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../services/api";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const handleEdit = (user: User) => {
    navigate(`/edit/${user.id}`);
  };

  return (
    <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
  );
};

export default UserList;
