import { UseFormRegister } from "react-hook-form";

export interface inputtype {
  type: string;
  readOnly: boolean;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
}
