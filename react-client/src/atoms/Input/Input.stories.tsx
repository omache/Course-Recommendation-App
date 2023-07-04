import { Input } from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    value: { control: "text" },
    label: {
      defaultValue: "Full Name",
    },
    placeholder: { defaultValue: "Placeholder" },
    type: { control: "radio", options: ["number", "text", "password"] },
    note: { defaultValue: "Enter your full name" },
    variant: { control: "radio", options: ["line", "box"] },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
