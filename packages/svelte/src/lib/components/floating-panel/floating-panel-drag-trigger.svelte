<script lang="ts" module>
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types.js'

  export interface FloatingPanelDragTriggerBaseProps extends PolymorphicProps<'div'>, RefAttribute {}
  export interface FloatingPanelDragTriggerProps extends Assign<HTMLProps<'div'>, FloatingPanelDragTriggerBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory/index.js'
  import { useFloatingPanelContext } from './use-floating-panel-context.js'

  let { ref = $bindable(null), ...props }: FloatingPanelDragTriggerProps = $props()

  const floatingPanel = useFloatingPanelContext()
  const mergedProps = $derived(mergeProps(floatingPanel().getDragTriggerProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
