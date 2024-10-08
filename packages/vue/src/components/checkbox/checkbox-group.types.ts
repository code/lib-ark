export interface GroupProps {
  /**
   * The initial value of `value` when uncontrolled
   */
  defaultValue?: string[]
  /**
   * The controlled value of the checkbox group
   */
  modelValue?: string[]
  /**
   * If `true`, the checkbox group is disabled
   */
  disabled?: boolean
  /**
   * If `true`, the checkbox group is read-only
   */
  readOnly?: boolean
  /**
   * The name of the input fields in the checkbox group
   * (Useful for form submission).
   */
  name?: string
  /**
   * If `true`, the checkbox group is invalid
   */
  invalid?: boolean
}

export type GroupEmits = {
  /**
   * Functional called when the value changes.
   */
  valueChange: [value: string[]]
  'update:modelValue': [value: string[]]
}
