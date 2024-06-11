import React from "react";

interface PlaceholderProps {
  value: string;
}

const Placeholderr: React.FC<PlaceholderProps> = ({ value }) => {
  return <span>{value}</span>;
};

export default Placeholderr;
