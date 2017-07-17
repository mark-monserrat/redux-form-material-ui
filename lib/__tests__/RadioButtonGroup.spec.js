'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _Radio = require('material-ui/Radio');

var _styles = require('material-ui/styles');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _RadioButtonGroup = require('../RadioButtonGroup');

var _RadioButtonGroup2 = _interopRequireDefault(_RadioButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)({});

_expect2.default.extend(_expectJsx2.default);

describe('RadioGroup', function () {
  it('has a display name ' + _RadioButtonGroup2.default.displayName, function () {
    (0, _expect2.default)(_RadioButtonGroup2.default.displayName).toBe('ReduxFormMaterialUIStyle');
  });

  it('renders a RadioGroup', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      valueSelected: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with no error when not touched', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      valueSelected: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with an error', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      valueSelected: 'Foo',
      errorText: 'FooError',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with no warning when not touched', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      valueSelected: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with an warning', function () {
    (0, _expect2.default)(new _RadioButtonGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      valueSelected: 'Foo',
      errorText: 'FooWarning',
      ref: 'component'
    }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme },
      _react2.default.createElement(_RadioButtonGroup2.default, { name: 'myRadio' })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _RadioButtonGroup2.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});