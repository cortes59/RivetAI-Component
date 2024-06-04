import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    variant: "contained",
    type: "primary",
    size: "medium",
    children: "Click me",
    htmlType: "button",
    fullWidth: false,
    className: "",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
  args: {
    variant: "contained",
    children: "Click me",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    variant: "outlined",
    children: "Click me",
  },
};

export const SecondaryContained: Story = {
  args: {
    variant: "contained",
    type: "secondary",
    children: "Click me",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    variant: "outlined",
    type: "secondary",
    children: "Click me",
  },
};

export const DangerContained: Story = {
  args: {
    variant: "contained",
    type: "danger",
    children: "Click me",
  },
};

export const DangerOutlined: Story = {
  args: {
    variant: "outlined",
    type: "secondary",
    children: "Click me",
  },
};
