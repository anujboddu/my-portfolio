import { addDecorator, configure } from "@storybook/react";

// Import CSS reset and Global Styles
import './styles.less';



function loadStories() {
  const req = require.context("../src/components", true, /stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
