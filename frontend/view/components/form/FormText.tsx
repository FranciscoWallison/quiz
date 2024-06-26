import { FormFieldProps } from './index.ts'
import { FormInput } from './FormInput.tsx'

export function FormText (props: FormFieldProps<string>) {
  return FormInput<string>({ ...props, type: 'text' })
}
