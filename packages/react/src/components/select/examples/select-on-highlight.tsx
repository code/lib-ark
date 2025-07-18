import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection, useSelect } from '@ark-ui/react/select'
import { ChevronDownIcon } from 'lucide-react'

export const SelectOnHighlight = () => {
  const collection = createListCollection({
    items: ['React', 'Solid', 'Vue', 'Svelte'],
  })

  const select = useSelect({
    collection,
    onHighlightChange({ highlightedValue }) {
      if (highlightedValue) {
        select.selectValue(highlightedValue)
      }
    },
  })

  return (
    <Select.RootProvider value={select}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item key={item} item={item}>
                  <Select.ItemText>{item}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.RootProvider>
  )
}
