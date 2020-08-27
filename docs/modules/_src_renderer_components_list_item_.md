[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/list-item"](_src_renderer_components_list_item_.md)

# Module: "src/renderer-components/list-item"

## Index

### Interfaces

* [ListItemProps](../interfaces/_src_renderer_components_list_item_.listitemprops.md)

### Type aliases

* [ListItemFC](_src_renderer_components_list_item_.md#listitemfc)

### Variables

* [ListItem](_src_renderer_components_list_item_.md#const-listitem)

## Type aliases

###  ListItemFC

Ƭ **ListItemFC**: *NamedExoticComponent‹React.PropsWithChildren‹[ListItemProps](../interfaces/_src_renderer_components_list_item_.listitemprops.md)››*

*Defined in [src/renderer-components/list-item.tsx:6](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/list-item.tsx#L6)*

## Variables

### `Const` ListItem

• **ListItem**: *[ListItemFC](_src_renderer_components_list_item_.md#listitemfc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownListItem'

  return <li className="md__list-item">{children}</li>
})

*Defined in [src/renderer-components/list-item.tsx:10](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/list-item.tsx#L10)*
