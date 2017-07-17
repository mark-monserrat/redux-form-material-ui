'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('material-ui/styles');

var _Switch = require('material-ui/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _Switch3 = require('../Switch');

var _Switch4 = _interopRequireDefault(_Switch3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({});

_expect2.default.extend(_expectJsx2.default);

describe('Switch', function () {
  it('has a display name', function () {
    console.log(_Switch4.default.displayName);
    (0, _expect2.default)(_Switch4.default.displayName).toBe('ReduxFormMaterialUIStyle');
  });

  it('renders an unchecked Switch', function () {
    (0, _expect2.default)(new _Switch4.default({
      input: {
        name: 'mySwitch',
        onChange: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Switch2.default, {
      name: 'mySwitch',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('renders a checked Switch', function () {
    (0, _expect2.default)(new _Switch4.default({
      input: {
        name: 'mySwitch',
        onChange: _lodash2.default,
        checked: true
      },
      checked: true
    }).render()).toEqualJSX(_react2.default.createElement(_Switch2.default, {
      name: 'mySwitch',
      onChange: _lodash2.default,
      ref: 'component',
      checked: true
    }));
  });

  it('should ignore checked', function () {
    (0, _expect2.default)(new _Switch4.default({
      input: {
        name: 'mySwitch',
        onChange: _lodash2.default,
        checked: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Switch2.default, {
      name: 'mySwitch',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('renders a controlled Switch', function () {
    (0, _expect2.default)(new _Switch4.default({
      input: {
        name: 'mySwitch',
        onChange: _lodash2.default,
        checked: true
      },
      checked: true
    }).render()).toEqualJSX(_react2.default.createElement(_Switch2.default, { name: 'mySwitch', onChange: _lodash2.default, ref: 'component', checked: true }));
    (0, _expect2.default)(new _Switch4.default({
      input: {
        name: 'mySwitch',
        onChange: _lodash2.default
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Switch2.default, { name: 'mySwitch', onChange: _lodash2.default, ref: 'component', checked: false }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme },
      _react2.default.createElement(_Switch4.default, {
        input: { name: 'mySwitch', onChange: _lodash2.default }
      })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _Switch4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});