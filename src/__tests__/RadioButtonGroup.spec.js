import expect from 'expect'
import expectJsx from 'expect-jsx'
import { RadioGroup } from 'material-ui/Radio'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUIRadioGroup from '../RadioButtonGroup'

const theme = createMuiTheme({})

expect.extend(expectJsx)

describe('RadioGroup', () => {
  it('has a display name ' + ReduxFormMaterialUIRadioGroup.displayName, () => {
    expect(ReduxFormMaterialUIRadioGroup.displayName).toBe(
      'ReduxFormMaterialUIStyle'
    )
  })

  it('renders a RadioGroup', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        valueSelected="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        valueSelected="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with an error', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        valueSelected="Foo"
        errorText="FooError"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        valueSelected="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with an warning', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        valueSelected="Foo"
        errorText="FooWarning"
        ref="component"
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider theme={theme}>
        <ReduxFormMaterialUIRadioGroup name="myRadio" />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIRadioGroup
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})