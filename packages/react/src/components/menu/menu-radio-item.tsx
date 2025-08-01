import type { OptionItemProps } from '@zag-js/menu'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLProps, type PolymorphicProps, ark } from '../factory'
import { useMenuContext } from './use-menu-context'
import { MenuItemProvider } from './use-menu-item-context'
import { useMenuItemGroupContext } from './use-menu-item-group-context'
import { MenuItemPropsProvider } from './use-menu-option-item-props-context'

type PartialOptionItemProps = Omit<OptionItemProps, 'type' | 'checked' | 'onCheckedChange'>

export interface MenuRadioItemBaseProps extends PartialOptionItemProps, PolymorphicProps {}
export interface MenuRadioItemProps extends HTMLProps<'div'>, MenuRadioItemBaseProps {}

export const MenuRadioItem = forwardRef<HTMLDivElement, MenuRadioItemProps>((props, ref) => {
  const [partialItemProps, localProps] = createSplitProps<PartialOptionItemProps>()(props, [
    'closeOnSelect',
    'disabled',
    'value',
    'valueText',
  ])
  const menu = useMenuContext()
  const itemGroup = useMenuItemGroupContext()
  const optionItemProps: OptionItemProps = {
    ...partialItemProps,
    checked: itemGroup.value === partialItemProps.value,
    type: 'radio',
    onCheckedChange: () => itemGroup.onValueChange?.({ value: partialItemProps.value }),
  }
  const mergedProps = mergeProps(menu.getOptionItemProps(optionItemProps), localProps)
  const optionItemState = menu.getOptionItemState(optionItemProps)

  return (
    <MenuItemPropsProvider value={optionItemProps}>
      <MenuItemProvider value={optionItemState}>
        <ark.div {...mergedProps} ref={ref} />
      </MenuItemProvider>
    </MenuItemPropsProvider>
  )
})

MenuRadioItem.displayName = 'MenuRadioItem'
