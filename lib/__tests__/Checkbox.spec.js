'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _lodash = require('lodash.noop');

var _lodash2 = _interopRequireDefault(_lodash);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _styles = require('material-ui/styles');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _Checkbox3 = require('../Checkbox');

var _Checkbox4 = _interopRequireDefault(_Checkbox3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({});

_expect2.default.extend(_expectJsx2.default);

describe('Checkbox', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_Checkbox4.default.displayName).toBe('ReduxFormMaterialUISwitchBase');
  });

  it('renders an unchecked Checkbox', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      name: 'myCheckbox',
      onChange: _lodash2.default
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, {
      name: 'myCheckbox',
      checked: false,
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('renders a checked Checkbox', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      name: 'myCheckbox',
      onChange: _lodash2.default,
      checked: true
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, {
      name: 'myCheckbox',
      checked: true,
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('should ignore defaultChecked', function () {
    (0, _expect2.default)(new _Checkbox4.default({
      name: 'myCheckbox',
      onChange: _lodash2.default
    }).render()).toEqualJSX(_react2.default.createElement(_Checkbox2.default, {
      name: 'myCheckbox',
      onChange: _lodash2.default,
      ref: 'component'
    }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme },
      _react2.default.createElement(_Checkbox4.default, {
        name: 'myCheckbox',
        onChange: _lodash2.default
      })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _Checkbox4.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});