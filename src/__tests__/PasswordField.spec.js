import expect from 'expect'
import expectJsx from 'expect-jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PasswordField from 'material-ui-password-field'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUIPasswordField from '../PasswordField'

expect.extend(expectJsx)

describe('PasswordField', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIPasswordField.displayName).toBe(
      'ReduxFormMaterialUIPasswordField'
    )
  })

  it('renders a PasswordField', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Secret'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myPassword" value="Secret" ref="component" />)
  })

  it('renders a PasswordField with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Secret'
        },
        meta: {
          error: 'SecretError'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myPassword" value="Secret" ref="component" />)
  })

  it('renders a PasswordField with an error', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Secret'
        },
        meta: {
          error: 'SecretError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <PasswordField
        name="myPassword"
        value="Secret"
        errorText="SecretError"
        ref="component"
      />
    )
  })

  it('renders a PasswordField with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Secret'
        },
        meta: {
          warning: 'SecretWarning'
        }
      }).render()
    ).toEqualJSX(<PasswordField name="myPassword" value="Secret" ref="component" />)
  })

  it('renders a PasswordField with an warning', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: 'Secret'
        },
        meta: {
          warning: 'SecretWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <PasswordField
        name="myPassword"
        value="Secret"
        errorText="SecretWarning"
        ref="component"
      />
    )
  })

  it('should ignore defaultValue', () => {
    expect(
      new ReduxFormMaterialUIPasswordField({
        input: {
          name: 'myPassword',
          value: ''
        },
        defaultValue: '5',
        meta: {
          warning: 'SecretWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <PasswordField
        name="myPassword"
        value=""
        errorText="SecretWarning"
        ref="component"
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <ReduxFormMaterialUIPasswordField name="myPassword" />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIPasswordField
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })

  it('focuses when field gets active prop', () => {})
})
