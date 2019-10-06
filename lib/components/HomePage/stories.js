"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Portfolio = _interopRequireDefault(require("./Portfolio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Portfolio', module);
stories.addDecorator(_addonKnobs.withKnobs); // stories.add("Portfolio", () => 
// <Portfolio 
//   header={text('header','')} />);

stories.add('Portfolio', function () {
  return _react.default.createElement(_Portfolio.default, {
    header: (0, _addonKnobs.text)('header', 'Heading'),
    greetingText: (0, _addonKnobs.text)('greetingText', 'Hello, I am'),
    name: (0, _addonKnobs.text)('name', 'Your Name'),
    subText: (0, _addonKnobs.text)('subText', 'Sub Text'),
    picture: (0, _addonKnobs.text)('picture', ''),
    linkedinUrl: (0, _addonKnobs.text)('linkedinUrl', ''),
    githubUrl: (0, _addonKnobs.text)('githubUrl', '')
  });
});