import React from "react";

interface LabelProps {
  value: string;
}

const Label: React.FC<LabelProps> = ({ value }) => {
  return <label style={{ color: "black", fontSize: "20px" }}>{value}</label>;
};

export default Label;
