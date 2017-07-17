import Checkbox from 'material-ui/Checkbox'
import createComponent from './createComponent'

export default createComponent(Checkbox, ({
  meta,
  onChange,
  defaultChecked,
  ...props
}) => ({
  ...props,
  onChange: (event, isInputChecked) => {
    onChange(isInputChecked)
  }
}))
