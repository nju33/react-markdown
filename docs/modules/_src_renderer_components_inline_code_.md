[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/inline-code"](_src_renderer_components_inline_code_.md)

# Module: "src/renderer-components/inline-code"

## Index

### Interfaces

* [InlineCodeProps](../interfaces/_src_renderer_components_inline_code_.inlinecodeprops.md)

### Type aliases

* [InlineCodeFC](_src_renderer_components_inline_code_.md#inlinecodefc)

### Variables

* [InlineCode](_src_renderer_components_inline_code_.md#const-inlinecode)

## Type aliases

###  InlineCodeFC

Ƭ **InlineCodeFC**: *NamedExoticComponent‹[InlineCodeProps](../interfaces/_src_renderer_components_inline_code_.inlinecodeprops.md)›*

*Defined in [src/renderer-components/inline-code.tsx:7](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/inline-code.tsx#L7)*

## Variables

### `Const` InlineCode

• **InlineCode**: *[InlineCodeFC](_src_renderer_components_inline_code_.md#inlinecodefc)* = React.memo(function c({ value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownInlineCode'

  return <code className="md__inline-code">{value}</code>
})

*Defined in [src/renderer-components/inline-code.tsx:9](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/inline-code.tsx#L9)*
