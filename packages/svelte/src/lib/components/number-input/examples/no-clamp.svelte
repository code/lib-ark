<script lang="ts">
  import { NumberInput } from '@ark-ui/svelte/number-input'
</script>

<NumberInput.Root clampValueOnBlur={false}>
  <NumberInput.Scrubber />
  <NumberInput.Label>Label</NumberInput.Label>
  <NumberInput.Input />
  <NumberInput.Control>
    <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
    <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
