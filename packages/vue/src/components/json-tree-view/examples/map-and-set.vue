<script setup lang="ts">
import { JsonTreeView } from '@ark-ui/vue/json-tree-view'
import { ChevronRightIcon } from 'lucide-vue-next'

const data = new Map<string, any>([
  ['name', 'ark-ui-json-tree'],
  ['license', 'MIT'],
  ['elements', new Set(['ark-ui', 123, false, true, null, undefined, 456n])],
  [
    'nested',
    new Map<string, any>([
      [
        'taglines',
        new Set([
          { name: 'ark-ui', feature: 'headless components' },
          { name: 'ark-ui', feature: 'framework agnostic' },
          { name: 'ark-ui', feature: 'accessible by default' },
        ]),
      ],
    ]),
  ],
])
</script>

<template>
  <JsonTreeView.Root :data="data">
    <JsonTreeView.Tree>
      <template #arrow>
        <ChevronRightIcon />
      </template>
    </JsonTreeView.Tree>
  </JsonTreeView.Root>
</template>
