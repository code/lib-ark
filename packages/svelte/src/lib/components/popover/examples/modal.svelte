<script lang="ts">
  import { Popover } from '@ark-ui/svelte/popover'
</script>

<Popover.Root modal>
  <Popover.Trigger>Click Me</Popover.Trigger>
  <Popover.Positioner>
    <Popover.Content>
      <Popover.Title>Title</Popover.Title>
      <Popover.Description>Description</Popover.Description>
      <Popover.CloseTrigger>Close</Popover.CloseTrigger>
    </Popover.Content>
  </Popover.Positioner>
</Popover.Root>
