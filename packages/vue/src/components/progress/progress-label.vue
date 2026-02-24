<script lang="ts">
import type { HTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface ProgressLabelBaseProps extends PolymorphicProps {}
export interface ProgressLabelProps
  extends
    ProgressLabelBaseProps,
    /**
     * @vue-ignore
     */
    HTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useProgressContext } from './use-progress-context'
import { useForwardExpose } from '../../utils/use-forward-expose'

defineProps<ProgressLabelProps>()
const progress = useProgressContext()

useForwardExpose()
</script>

<template>
  <ark.span v-bind="progress.getLabelProps()" :as-child="asChild">
    <slot />
  </ark.span>
</template>
