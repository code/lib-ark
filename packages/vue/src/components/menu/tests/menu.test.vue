<script setup lang="ts">
import { ref } from 'vue'
import { Menu, type MenuRootEmits, type MenuRootProps } from '../..'
import { useForwardPropsEmits } from '../../..'

const props = defineProps<MenuRootProps & { contextMenu?: boolean; dir?: 'ltr' | 'rtl' }>()
const emits = defineEmits<MenuRootEmits>()
const localProps = useForwardPropsEmits(props, emits)

const items = ref(['react', 'solid', 'vue', 'svelte'])
const checked = ref(false)
</script>

<template>
  <Menu.Root v-bind="localProps">
    <Menu.Trigger v-if="!contextMenu">
      Open menu
      <Menu.Indicator />
    </Menu.Trigger>
    <Menu.ContextTrigger v-if="contextMenu">Open Context Menu</Menu.ContextTrigger>
    <Menu.Positioner data-testid="positioner">
      <Menu.Content>
        <Menu.Arrow>
          <Menu.ArrowTip />
        </Menu.Arrow>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Ark UI</Menu.ItemGroupLabel>
          <Menu.Item value="dialog" disabled>Dialog</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Separator />
        <Menu.CheckboxItem v-model:checked="checked" value="my-checkbox">
          <Menu.ItemIndicator>✅</Menu.ItemIndicator>
          <Menu.ItemText>Check me</Menu.ItemText>
        </Menu.CheckboxItem>
        <Menu.Separator />
        <Menu.RadioItemGroup>
          <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
          <Menu.RadioItem v-for="item in items" :key="item" :value="item">
            <Menu.ItemIndicator>✅</Menu.ItemIndicator>
            <Menu.ItemText>{{ item }}</Menu.ItemText>
          </Menu.RadioItem>
        </Menu.RadioItemGroup>
        <Menu.Separator />
        <Menu.Root>
          <Menu.TriggerItem>CSS Frameworks</Menu.TriggerItem>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="panda">Panda</Menu.Item>
              <Menu.Item value="tailwind">Tailwind</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>
