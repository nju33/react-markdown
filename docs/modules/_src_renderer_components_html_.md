[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/html"](_src_renderer_components_html_.md)

# Module: "src/renderer-components/html"

## Index

### Interfaces

* [HtmlProps](../interfaces/_src_renderer_components_html_.htmlprops.md)

### Type aliases

* [HtmlFC](_src_renderer_components_html_.md#htmlfc)

### Variables

* [Html](_src_renderer_components_html_.md#const-html)

## Type aliases

###  HtmlFC

Ƭ **HtmlFC**: *NamedExoticComponent‹[HtmlProps](../interfaces/_src_renderer_components_html_.htmlprops.md)›*

*Defined in [src/renderer-components/html.tsx:7](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/html.tsx#L7)*

## Variables

### `Const` Html

• **Html**: *[HtmlFC](_src_renderer_components_html_.md#htmlfc)* = React.memo(function c({ value: html }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownHtml'

  return (
    <span className="md__html" dangerouslySetInnerHTML={{ __html: html }} />
  )
})

*Defined in [src/renderer-components/html.tsx:9](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/html.tsx#L9)*
