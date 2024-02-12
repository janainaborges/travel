import React from "react";
import { IconType } from "react-icons";

import colors from "../../../utils/themes/colors";
import { ButtonCustoms, IconWrapper, ListItemText } from "./buttonCart.styled";

interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  text: number;
  onClick?: () => void;
}

const ButtomCart: React.FC<ListItemProps> = ({
  backgroundColor = "#0045F3",
  border = "5px",
  color = "white",
  size = "small",
  text,
  icon: Icon,
  ...props
}) => {
  return (
    <>
      <ButtonCustoms
        backgroundColor={backgroundColor}
        size={size}
        border={border}
        {...props}
      >
        <IconWrapper size={size} color={color}>{Icon && <Icon />}</IconWrapper>
        <ListItemText backgroundColor={backgroundColor} size={size} color={color}>{text}</ListItemText>
      </ButtonCustoms>
    </>
  );
};

export default ButtomCart;
