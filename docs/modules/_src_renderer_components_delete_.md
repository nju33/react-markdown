[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/delete"](_src_renderer_components_delete_.md)

# Module: "src/renderer-components/delete"

## Index

### Type aliases

* [DeleteFC](_src_renderer_components_delete_.md#deletefc)

### Variables

* [Delete](_src_renderer_components_delete_.md#const-delete)

## Type aliases

###  DeleteFC

Ƭ **DeleteFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/delete.tsx:3](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/delete.tsx#L3)*

## Variables

### `Const` Delete

• **Delete**: *[DeleteFC](_src_renderer_components_delete_.md#deletefc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownDelete'

  return <del className="md__delete">{children}</del>
})

*Defined in [src/renderer-components/delete.tsx:5](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/delete.tsx#L5)*
