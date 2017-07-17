import { RadioGroup } from 'material-ui/Radio'
import createComponent from './createComponent'
import mapError from './mapError'

const mapValueToValueSelected = (
  { input: { ...inputProps }, ...props },
  errorProp
) => {
  return mapError(
    {
      ...props,
      input: { ...inputProps, valueSelected: inputProps.value }
    },
    errorProp
  )
}

export default createComponent(RadioGroup, mapValueToValueSelected)