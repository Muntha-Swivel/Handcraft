import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserNavBar as NavBar } from "../../components/molecules";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
export default {
  title: "Molecules/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const card = Template.bind({});
card.args = {};
