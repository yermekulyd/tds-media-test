import React from "react";
import { useForm, Controller } from "react-hook-form";
import { User } from "@/types/user";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface UserFormProps {
  initialValues?: User;
  onSubmit: (data: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  const { control, handleSubmit } = useForm<User>({
    defaultValues: initialValues || {
      id: 0,
      name: "",
      username: "",
      email: "",
      skills: [],
      registrationDate: new Date().toISOString(),
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const processedData = {
          ...data,
          skills:
            typeof data.skills === "string"
              ? (data.skills as string).split(",").map((skill) => skill.trim())
              : data.skills,
        };
        onSubmit(processedData);
      })}
      className="space-y-4"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        )}
      />
      <Controller
        name="skills"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Skills (comma separated)"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        )}
      />
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
