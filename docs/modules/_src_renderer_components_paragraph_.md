[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/paragraph"](_src_renderer_components_paragraph_.md)

# Module: "src/renderer-components/paragraph"

## Index

### Interfaces

* [ParagraphProps](../interfaces/_src_renderer_components_paragraph_.paragraphprops.md)

### Type aliases

* [ParagraphFC](_src_renderer_components_paragraph_.md#paragraphfc)

### Variables

* [Paragraph](_src_renderer_components_paragraph_.md#const-paragraph)

## Type aliases

###  ParagraphFC

Ƭ **ParagraphFC**: *NamedExoticComponent‹React.PropsWithChildren‹[ParagraphProps](../interfaces/_src_renderer_components_paragraph_.paragraphprops.md)››*

*Defined in [src/renderer-components/paragraph.tsx:6](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/paragraph.tsx#L6)*

## Variables

### `Const` Paragraph

• **Paragraph**: *[ParagraphFC](_src_renderer_components_paragraph_.md#paragraphfc)* = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownParagraph'

  return <p className="md__paragraph">{children}</p>
})

*Defined in [src/renderer-components/paragraph.tsx:10](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/paragraph.tsx#L10)*
