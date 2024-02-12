import styled from "styled-components";
import colors from "../../../utils/themes/colors";

interface ButtonCustomsProps {
  backgroundColor: string;
  size: string;
  border: string;
}
export const ButtonCustoms = styled.button<ButtonCustomsProps>`
  background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) =>
    (props.size === "small" && "6rem") ||
    (props.size === "medium" && "10rem") ||
    (props.size === "large" && "14rem")};
  border: none;
  border-radius: ${(props: any) => props.border};
  display: flex;
  flex-direction: row;
  padding: 8px;
  color: ${colors.light};
  justify-content: space-around;
  place-items: center;
  font-size: ${(props: any) =>
    (props.size === "small" && "12px") ||
    (props.size === "medium" && "14px") ||
    (props.size === "large" && "16px")};
`;

interface IconWrapperProps {
  color: string;
  size: string;
  backgroundColor?: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  place-content: center;

  color: ${(props) => props.color};
  font-size: ${(props: any) =>
    (props.size === "small" && "28px") ||
    (props.size === "medium" && "14px") ||
    (props.size === "large" && "16px")};
`;

export const ListItemText = styled.div<IconWrapperProps>`
  display: flex;
  background-color: ${(props: any) => props.backgroundColor};
  filter: brightness(1.6);
  place-content: center;
  place-items: center;
  width: 32px;
  height: 33px;
  border-radius: 50%;
  color: ${(props) => props.color};
  font-size: ${(props: any) =>
    (props.size === "small" && "18px") ||
    (props.size === "medium" && "14px") ||
    (props.size === "large" && "16px")};
`;