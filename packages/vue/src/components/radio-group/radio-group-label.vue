<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface RadioGroupLabelBaseProps extends PolymorphicProps {}
export interface RadioGroupLabelProps
  extends
    RadioGroupLabelBaseProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useRadioGroupContext } from './use-radio-group-context'
import { useForwardExpose } from '../../utils/use-forward-expose'

defineProps<RadioGroupLabelProps>()
const radioGroup = useRadioGroupContext()

useForwardExpose()
</script>

<template>
  <ark.span v-bind="radioGroup.getLabelProps()" :as-child="asChild">
    <slot />
  </ark.span>
</template>
