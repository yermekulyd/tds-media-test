import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { editUser, fetchUsers } from "../services/api";
import { User } from "../types/user";

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then((response) => {
      const foundUser = response.find((user: User) => user.id === Number(id));
      setUser(foundUser || null);
    });
  }, [id]);

  const handleEdit = (data: User) => {
    editUser(data).then(() => {
      navigate("/", { state: { updatedUser: data } });
    });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <UserForm initialValues={user} onSubmit={handleEdit} />
    </div>
  );
};

export default EditUserPage;
