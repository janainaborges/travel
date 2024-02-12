export interface DataProps {
  labelOne: number;
  labelTwo: number;
  id: number;
}

export interface FilterPriceProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  data: DataProps | any;
  border?: string;
}
