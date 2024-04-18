import { FormFieldProps } from './index.ts'
import { FormInput } from './FormInput.tsx'

export function FormPassword (props: FormFieldProps<string>) {
  return FormInput({ ...props, type: 'password' })
}
