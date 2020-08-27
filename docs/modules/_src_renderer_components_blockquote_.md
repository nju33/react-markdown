[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/blockquote"](_src_renderer_components_blockquote_.md)

# Module: "src/renderer-components/blockquote"

## Index

### Type aliases

* [BlockquoteFC](_src_renderer_components_blockquote_.md#blockquotefc)

### Variables

* [Blockquote](_src_renderer_components_blockquote_.md#const-blockquote)

## Type aliases

###  BlockquoteFC

Ƭ **BlockquoteFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/blockquote.tsx:3](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/blockquote.tsx#L3)*

## Variables

### `Const` Blockquote

• **Blockquote**: *[BlockquoteFC](_src_renderer_components_blockquote_.md#blockquotefc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownBlockquote'

  return <blockquote className="md__blockquote">{children}</blockquote>
})

*Defined in [src/renderer-components/blockquote.tsx:7](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/blockquote.tsx#L7)*
