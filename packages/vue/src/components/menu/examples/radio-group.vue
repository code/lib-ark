<script setup lang="ts">
import { Menu } from '@ark-ui/vue/menu'
import { ref } from 'vue'

const value = ref('React')
const items = ref(['React', 'Solid', 'Vue', 'Svelte'])
</script>

<template>
  <Menu.Root>
    <Menu.Trigger>Open menu</Menu.Trigger>
    <Menu.Positioner>
      <Menu.Content>
        <Menu.RadioItemGroup v-model="value">
          <Menu.ItemGroupLabel>JS Frameworks</Menu.ItemGroupLabel>
          <Menu.RadioItem v-for="item in items" :key="item" :value="item">
            <Menu.ItemIndicator>✅</Menu.ItemIndicator>
            <Menu.ItemText>{{ item }}</Menu.ItemText>
          </Menu.RadioItem>
        </Menu.RadioItemGroup>
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</template>
