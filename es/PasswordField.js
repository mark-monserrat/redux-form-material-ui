'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialUiPasswordField = require('material-ui-password-field');

var _materialUiPasswordField2 = _interopRequireDefault(_materialUiPasswordField);

var _createComponent = require('./createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _mapError = require('./mapError');

var _mapError2 = _interopRequireDefault(_mapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _createComponent2.default)(_materialUiPasswordField2.default, function (_ref) {
  var defaultValue = _ref.defaultValue,
      props = _objectWithoutProperties(_ref, ['defaultValue']);

  return (0, _mapError2.default)(props);
});