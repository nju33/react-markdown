[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/list"](_src_renderer_components_list_.md)

# Module: "src/renderer-components/list"

## Index

### Interfaces

* [ListProps](../interfaces/_src_renderer_components_list_.listprops.md)

### Type aliases

* [ListFC](_src_renderer_components_list_.md#listfc)

### Variables

* [List](_src_renderer_components_list_.md#const-list)

## Type aliases

###  ListFC

Ƭ **ListFC**: *NamedExoticComponent‹React.PropsWithChildren‹[ListProps](../interfaces/_src_renderer_components_list_.listprops.md)››*

*Defined in [src/renderer-components/list.tsx:7](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer-components/list.tsx#L7)*

## Variables

### `Const` List

• **List**: *[ListFC](_src_renderer_components_list_.md#listfc)* = React.memo(function c({ children, ordered }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownList'

  if (ordered) {
    return <ol className="md__list md__list--ordered">{children}</ol>
  }

  return <ul className="md__list md__list--unordered">{children}</ul>
})

*Defined in [src/renderer-components/list.tsx:11](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer-components/list.tsx#L11)*
