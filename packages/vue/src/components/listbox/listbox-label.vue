<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface ListboxLabelBaseProps extends PolymorphicProps {}
export interface ListboxLabelProps
  extends
    ListboxLabelBaseProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
</script>

<script setup lang="ts">
import { useForwardExpose } from '../../utils/use-forward-expose'
import { ark } from '../factory'
import { useListboxContext } from './use-listbox-context'

defineProps<ListboxLabelProps>()
const listbox = useListboxContext()

useForwardExpose()
</script>

<template>
  <ark.span v-bind="listbox.getLabelProps()" :as-child="asChild">
    <slot />
  </ark.span>
</template>
