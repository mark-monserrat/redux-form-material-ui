import PasswordField from 'material-ui-password-field'
import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(PasswordField, ({ defaultValue, ...props }) =>
  mapError(props)
)
