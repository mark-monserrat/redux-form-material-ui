'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _materialUiPasswordField = require('material-ui-password-field');

var _materialUiPasswordField2 = _interopRequireDefault(_materialUiPasswordField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _PasswordField = require('../PasswordField');

var _PasswordField2 = _interopRequireDefault(_PasswordField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('PasswordField', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_PasswordField2.default.displayName).toBe('ReduxFormMaterialUIPasswordField');
  });

  it('renders a PasswordField', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: 'Secret'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, { name: 'myPassword', value: 'Secret', ref: 'component' }));
  });

  it('renders a PasswordField with no error when not touched', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: 'Secret'
      },
      meta: {
        error: 'SecretError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, { name: 'myPassword', value: 'Secret', ref: 'component' }));
  });

  it('renders a PasswordField with an error', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: 'Secret'
      },
      meta: {
        error: 'SecretError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, {
      name: 'myPassword',
      value: 'Secret',
      errorText: 'SecretError',
      ref: 'component'
    }));
  });

  it('renders a PasswordField with no warning when not touched', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: 'Secret'
      },
      meta: {
        warning: 'SecretWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, { name: 'myPassword', value: 'Secret', ref: 'component' }));
  });

  it('renders a PasswordField with an warning', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: 'Secret'
      },
      meta: {
        warning: 'SecretWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, {
      name: 'myPassword',
      value: 'Secret',
      errorText: 'SecretWarning',
      ref: 'component'
    }));
  });

  it('should ignore defaultValue', function () {
    (0, _expect2.default)(new _PasswordField2.default({
      input: {
        name: 'myPassword',
        value: ''
      },
      defaultValue: '5',
      meta: {
        warning: 'SecretWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_materialUiPasswordField2.default, {
      name: 'myPassword',
      value: '',
      errorText: 'SecretWarning',
      ref: 'component'
    }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      { muiTheme: (0, _getMuiTheme2.default)() },
      _react2.default.createElement(_PasswordField2.default, { name: 'myPassword' })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _PasswordField2.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });

  it('focuses when field gets active prop', function () {});
});