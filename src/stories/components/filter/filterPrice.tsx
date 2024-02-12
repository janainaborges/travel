import React from "react";
import { FilterPriceButton } from "./filterPrice.styled";
import { DataProps, FilterPriceProps } from "@/types/components/buttons.types";

const FilterPrice: React.FC<FilterPriceProps> = ({
  size = "large",
  backgroundColor = "#4070F4",
  data = [],
  border = "2px",
  ...props
}) => {
  return (
    <>
      {data.map((item: DataProps) => (
        <FilterPriceButton
          border={border}
          backgroundColor={backgroundColor}
          size={size}
          key={item.id}
          {...props}
        >
          <span>
            {Number(item.labelOne).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span>-</span>
          <span>
            {Number(item.labelTwo).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </FilterPriceButton>
      ))}
    </>
  );
};

export default FilterPrice;
