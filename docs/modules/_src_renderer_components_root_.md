[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/root"](_src_renderer_components_root_.md)

# Module: "src/renderer-components/root"

## Index

### Interfaces

* [RootProps](../interfaces/_src_renderer_components_root_.rootprops.md)

### Type aliases

* [RootFC](_src_renderer_components_root_.md#rootfc)

### Variables

* [Root](_src_renderer_components_root_.md#const-root)

## Type aliases

###  RootFC

Ƭ **RootFC**: *NamedExoticComponent‹React.PropsWithChildren‹[RootProps](../interfaces/_src_renderer_components_root_.rootprops.md)››*

*Defined in [src/renderer-components/root.tsx:6](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer-components/root.tsx#L6)*

## Variables

### `Const` Root

• **Root**: *[RootFC](_src_renderer_components_root_.md#rootfc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownRoot'

  return <>{children}</>
})

*Defined in [src/renderer-components/root.tsx:10](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer-components/root.tsx#L10)*
