import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Portfolio from "./Portfolio";

const stories = storiesOf('Portfolio', module)
stories.addDecorator(withKnobs);
// stories.add("Portfolio", () => 
// <Portfolio 
//   header={text('header','')} />);

stories.add('Portfolio', () => (
  <Portfolio 
  header={text('header','Heading')}
  greetingText={text('greetingText','Hello, I am')}
  name={text('name','Your Name')}
  subText={text('subText','Sub Text')}
  picture={text('picture','')}
  linkedinUrl={text('linkedinUrl','')}
  githubUrl={text('githubUrl','')}
  />
));