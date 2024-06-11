import React from "react";

interface Iusername {
  user_place: string;
  user_type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const User: React.FC<Iusername> = ({
  user_place,
  user_type,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={user_place}
      type={user_type}
      name={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default User;
