import Switch from 'material-ui/Switch'
import createComponent from './createComponent'

export default createComponent(Switch, ({
  input: { onChange, value, ...inputProps },
  checked,
  meta,
  onChange: onChangeFromField,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onChange: (event, value) => {
    onChange(value)
    if (onChangeFromField) {
      onChangeFromField(value)
    }
  },
  checked: !!checked
}))
