import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ACard } from "../../components/molecules";
export default {
  title: "Molecules/ACard",
  component: ACard,
} as ComponentMeta<typeof ACard>;

const Template: ComponentStory<typeof ACard> = (args) => <ACard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Indian Neclace",
  price: 500,
  image:
    "https://w7.pngwing.com/pngs/340/1001/png-transparent-india-earring-jewellery-necklace-jewellery-miscellaneous-gemstone-ring-thumbnail.png",
};
