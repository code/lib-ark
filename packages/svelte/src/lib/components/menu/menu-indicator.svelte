<script module lang="ts">
  import type { Assign, HTMLProps, PolymorphicProps, RefAttribute } from '$lib/types'

  export interface MenuIndicatorBaseProps extends PolymorphicProps<'div'>, RefAttribute {}
  export interface MenuIndicatorProps extends Assign<HTMLProps<'div'>, MenuIndicatorBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'
  import { useMenuContext } from './use-menu-context'

  let { ref = $bindable(null), ...props }: MenuIndicatorProps = $props()

  const menu = useMenuContext()
  const mergedProps = $derived(mergeProps(menu().getIndicatorProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
