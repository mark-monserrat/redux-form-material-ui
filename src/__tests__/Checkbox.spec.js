import expect from 'expect'
import expectJsx from 'expect-jsx'
import noop from 'lodash.noop'
import Checkbox from 'material-ui/Checkbox'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUICheckbox from '../Checkbox'

const theme = createMuiTheme({})

expect.extend(expectJsx)

describe('Checkbox', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUICheckbox.displayName).toBe(
      'ReduxFormMaterialUISwitchBase'
    )
  })

  it('renders an unchecked Checkbox', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        name: 'myCheckbox',
        onChange: noop
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        checked={false}
        onChange={noop}
        ref="component"
      />
    )
  })

  it('renders a checked Checkbox', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        name: 'myCheckbox',
        onChange: noop,
        checked: true
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        checked={true}
        onChange={noop}
        ref="component"
      />
    )
  })

  it('should ignore defaultChecked', () => {
    expect(
      new ReduxFormMaterialUICheckbox({
        name: 'myCheckbox',
        onChange: noop
      }).render()
    ).toEqualJSX(
      <Checkbox
        name="myCheckbox"
        onChange={noop}
        ref="component"
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider theme={theme}>
        <ReduxFormMaterialUICheckbox
          name="myCheckbox"
          onChange={noop}
        />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUICheckbox
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
