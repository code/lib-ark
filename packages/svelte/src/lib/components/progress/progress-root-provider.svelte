<script module lang="ts">
  import type { Assign, HTMLProps, RefAttribute } from '$lib/types'
  import type { UseProgressReturn } from './use-progress.svelte'

  interface RootProviderProps {
    value: UseProgressReturn
  }

  export interface ProgressRootProviderBaseProps extends RootProviderProps, RefAttribute {}
  export interface ProgressRootProviderProps extends Assign<HTMLProps<'div'>, ProgressRootProviderBaseProps> {}
</script>

<script lang="ts">
  import { mergeProps } from '@zag-js/svelte'
  import { Ark } from '../factory'
  import { ProgressProvider } from './use-progress-context'

  let { ref = $bindable(null), value: progress, ...localProps }: ProgressRootProviderProps = $props()
  const mergedProps = $derived(mergeProps(progress().getRootProps(), localProps))

  ProgressProvider(progress)
</script>

<Ark as="div" bind:ref {...mergedProps} />
