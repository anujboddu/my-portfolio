"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _github = _interopRequireDefault(require("../../images/github.png"));

var _profilepic = _interopRequireDefault(require("../../images/profilepic.jpeg"));

var _reactRouterDom = require("react-router-dom");

var _HireMe = require("../HireMe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Portfolio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_styles.Container, null, _react.default.createElement(_styles.HomePage, null, _react.default.createElement(_styles.Header, null, _react.default.createElement("h1", null, this.props.header)), _react.default.createElement(_styles.Profile, null, _react.default.createElement("div", null, _react.default.createElement(_styles.GreetingText, null, this.props.greetingText), _react.default.createElement(_styles.Name, null, this.props.name), _react.default.createElement("p", null, this.props.subText), this.props.linkedinUrl || this.props.githubUrl && _react.default.createElement(_styles.HomeIcons, null, _react.default.createElement("h4", null, "Find Me on"), this.props.linkedinUrl && _react.default.createElement(_styles.HomeIcon, null, _react.default.createElement("a", {
        href: this.props.linkedinUrl,
        target: "_blank",
        id: "linkedIn"
      }, _react.default.createElement("img", {
        src: "http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png",
        height: "40"
      }), " ")), this.props.githubUrl && _react.default.createElement(_styles.HomeIcon, null, _react.default.createElement("a", {
        href: this.props.githubUrl,
        target: "_blank",
        id: "github"
      }, _react.default.createElement("img", {
        src: _github.default,
        height: "40"
      })), _react.default.createElement("br", null)))), _react.default.createElement(_styles.BodyImage, {
        profilepic: this.props.picture || _profilepic.default
      }))));
    }
  }]);

  return Portfolio;
}(_react.default.Component);

;
Portfolio.defaultProps = {
  header: 'Header',
  greetingText: 'Hello',
  name: 'Your Name',
  subText: '',
  picture: '',
  linkedinUrl: '',
  githubUrl: ''
};
Portfolio.propTypes = {
  header: _propTypes.default.string.isRequired,
  greetingText: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  subText: _propTypes.default.string.isRequired,
  picture: _propTypes.default.string,
  linkedinUrl: _propTypes.default.string,
  githubUrl: _propTypes.default.string
};
var _default = Portfolio;
exports.default = _default;