[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/emphasis"](_src_renderer_components_emphasis_.md)

# Module: "src/renderer-components/emphasis"

## Index

### Type aliases

* [EmphasisFC](_src_renderer_components_emphasis_.md#emphasisfc)

### Variables

* [Emphasis](_src_renderer_components_emphasis_.md#const-emphasis)

## Type aliases

###  EmphasisFC

Ƭ **EmphasisFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/emphasis.tsx:3](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/emphasis.tsx#L3)*

## Variables

### `Const` Emphasis

• **Emphasis**: *[EmphasisFC](_src_renderer_components_emphasis_.md#emphasisfc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownEmphasis'

  return <em className="md__emphasis">{children}</em>
})

*Defined in [src/renderer-components/emphasis.tsx:5](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/emphasis.tsx#L5)*
