<script lang="ts">
import type { TableProps } from '@zag-js/date-picker'
import type { TableHTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface DatePickerTableBaseProps extends TableProps, PolymorphicProps {}
export interface DatePickerTableProps
  extends DatePickerTableBaseProps,
    /**
     * @vue-ignore
     */
    TableHTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useId } from 'vue'
import { useDatePickerContext } from './use-date-picker-context'
import { DatePickerTablePropsProvider } from './use-date-picker-table-props-context'
import { useDatePickerViewPropsContext } from './use-date-picker-view-props-context'
import { useForwardExpose } from '../../utils'

const props = defineProps<DatePickerTableProps>()
const datePicker = useDatePickerContext()
const viewProps = useDatePickerViewPropsContext()

const uid = useId()
const id = props.id ?? uid

DatePickerTablePropsProvider({ ...props, id, ...viewProps })

useForwardExpose()
</script>

<template>
  <ark.table v-bind="datePicker.getTableProps(props)" :as-child="asChild">
    <slot />
  </ark.table>
</template>
