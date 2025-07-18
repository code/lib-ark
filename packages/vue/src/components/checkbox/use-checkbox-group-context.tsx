import { createContext } from '../../utils/create-context'
import type { UseCheckboxGroupReturn } from './use-checkbox-group'

export interface UseCheckboxGroupContext extends UseCheckboxGroupReturn {}

export const [CheckboxGroupContextProvider, useCheckboxGroupContext] = createContext<
  UseCheckboxGroupContext | undefined
>('CheckboxGroupContext')
