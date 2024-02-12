import type { Meta, StoryObj } from "@storybook/react";
import FilterPrice from "./components/filter/filterPrice";

const meta = {
  title: "Example/Button",
  component: FilterPrice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    border: { control: "text" },
  },
} satisfies Meta<typeof FilterPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [{ labelOne: 12, labelTwo: 145 }],
  },
};
