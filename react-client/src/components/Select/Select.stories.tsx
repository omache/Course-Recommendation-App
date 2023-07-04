import { Select } from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TAG_COLOR } from "../../atoms";
import { useState } from "react";

export default {
  title: "components/Select",
  component: Select,
  args: {
    label: "Select Orientation",
    note: "You can choose more than 1",
    options: [
      { text: "Computer Networks", value: "CN", color: TAG_COLOR[0] },
      { text: "Human-Computer Interaction", value: "HCI", color: TAG_COLOR[1] },
      { text: "E-commerce", value: "EC", color: TAG_COLOR[2] },
      { text: "Intelligent Systems", value: "IS", color: TAG_COLOR[3] },
      { text: "System Development", value: "SD", color: TAG_COLOR[4] },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [activeOptions, setActiveOptions] = useState<string[]>(["CN", "IS"]);
  return (
    <Select
      {...args}
      activeOptions={activeOptions}
      setActiveOptions={setActiveOptions}
    />
  );
};

export const Default = Template.bind({});
