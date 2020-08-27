[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/text"](_src_renderer_components_text_.md)

# Module: "src/renderer-components/text"

## Index

### Interfaces

* [TextProps](../interfaces/_src_renderer_components_text_.textprops.md)

### Type aliases

* [TextFC](_src_renderer_components_text_.md#textfc)

### Variables

* [Text](_src_renderer_components_text_.md#const-text)

## Type aliases

###  TextFC

Ƭ **TextFC**: *NamedExoticComponent‹[TextProps](../interfaces/_src_renderer_components_text_.textprops.md)›*

*Defined in [src/renderer-components/text.tsx:7](https://github.com/nju33/react-markdown/blob/3861cd2/src/renderer-components/text.tsx#L7)*

## Variables

### `Const` Text

• **Text**: *[TextFC](_src_renderer_components_text_.md#textfc)* = React.memo(function c({ value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownText'

  return <>{value}</>
})

*Defined in [src/renderer-components/text.tsx:9](https://github.com/nju33/react-markdown/blob/3861cd2/src/renderer-components/text.tsx#L9)*
