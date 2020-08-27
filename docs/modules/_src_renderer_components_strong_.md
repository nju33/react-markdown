[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/strong"](_src_renderer_components_strong_.md)

# Module: "src/renderer-components/strong"

## Index

### Type aliases

* [StrongFC](_src_renderer_components_strong_.md#strongfc)

### Variables

* [Strong](_src_renderer_components_strong_.md#const-strong)

## Type aliases

###  StrongFC

Ƭ **StrongFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/strong.tsx:3](https://github.com/nju33/react-markdown/blob/3861cd2/src/renderer-components/strong.tsx#L3)*

## Variables

### `Const` Strong

• **Strong**: *[StrongFC](_src_renderer_components_strong_.md#strongfc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownStrong'

  return <strong className="md__strong">{children}</strong>
})

*Defined in [src/renderer-components/strong.tsx:5](https://github.com/nju33/react-markdown/blob/3861cd2/src/renderer-components/strong.tsx#L5)*
