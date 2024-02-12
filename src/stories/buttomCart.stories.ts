import type { Meta, StoryObj } from "@storybook/react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


import ButtomCart from "./components/buttons/buttomCart";

const meta = {
  title: "Button/Cart",
  component: ButtomCart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtomCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 9,
    icon: PiShoppingCartSimpleFill
  },
};
