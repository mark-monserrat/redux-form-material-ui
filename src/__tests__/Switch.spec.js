import expect from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Switch from 'material-ui/Switch'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUISwitch from '../Switch'

const theme = createMuiTheme({})

expect.extend(expectJsx)

describe('Switch', () => {
  it('has a display name', () => {
    console.log(ReduxFormMaterialUISwitch.displayName)
    expect(ReduxFormMaterialUISwitch.displayName).toBe(
      'ReduxFormMaterialUIStyle'
    )
  })

  it('renders an unchecked Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('renders a checked Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop,
          checked: true
        },
        checked: true
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref="component"
        checked
      />
    )
  })

  it('should ignore checked', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop,
          checked: true
        },
      }).render()
    ).toEqualJSX(
      <Switch
        name="mySwitch"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('renders a controlled Switch', () => {
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop,
          checked: true
        },
        checked: true
      }).render()
    ).toEqualJSX(
      <Switch name="mySwitch" onChange={noop} ref="component" checked={true} />
    )
    expect(
      new ReduxFormMaterialUISwitch({
        input: {
          name: 'mySwitch',
          onChange: noop
        }
      }).render()
    ).toEqualJSX(
      <Switch name="mySwitch" onChange={noop} ref="component" checked={false} />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider theme={theme}>
        <ReduxFormMaterialUISwitch
          input={{ name: 'mySwitch', onChange: noop }}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUISwitch
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
