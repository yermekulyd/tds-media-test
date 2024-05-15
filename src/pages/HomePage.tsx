import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserList from "../components/UserList";
import { fetchUsers } from "../services/api";
import { User } from "../types/user";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchUsers().then((response) => {
      if (location.state?.updatedUser) {
        const updatedUsers = response.map((user: User) =>
          user.id === (location.state as any).updatedUser.id
            ? (location.state as any).updatedUser
            : user
        );
        setUsers(updatedUsers);
      } else {
        setUsers(response);
      }
    });
  }, [location.state]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default HomePage;
