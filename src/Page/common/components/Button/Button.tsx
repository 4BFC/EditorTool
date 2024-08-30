import React from "react";
import { ButtonProps } from "../../utils/interface.data";

const Button: React.FC<ButtonProps> = (Props) => {
  return (
    <div className={Props.className} id={Props.id} onClick={Props.onClick}>
      {Props.link}
    </div>
  );
};

export default Button;
