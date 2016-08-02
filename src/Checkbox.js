import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(
  Checkbox,
  ({
    input: {
      onChange,
      value,
      ...inputProps
    },
    meta, // eslint-disable-line no-unused-vars
    ...props
  }) => ({
    ...inputProps,
    ...props,
    checked: value ? true : false,
    onCheck: onChange
  })
)
