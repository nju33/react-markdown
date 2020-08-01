[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/code"](_src_renderer_components_code_.md)

# Module: "src/renderer-components/code"

## Index

### Interfaces

* [CodeProps](../interfaces/_src_renderer_components_code_.codeprops.md)

### Type aliases

* [CodeFC](_src_renderer_components_code_.md#codefc)

### Variables

* [Code](_src_renderer_components_code_.md#const-code)

## Type aliases

###  CodeFC

Ƭ **CodeFC**: *NamedExoticComponent‹[CodeProps](../interfaces/_src_renderer_components_code_.codeprops.md)›*

*Defined in [src/renderer-components/code.tsx:9](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/code.tsx#L9)*

## Variables

### `Const` Code

• **Code**: *[CodeFC](_src_renderer_components_code_.md#codefc)* = React.memo(function c({ lang, value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownCode'

  let html = value
  if (typeof lang === 'string') {
    html = Prism.highlight(value, Prism.languages[lang], lang)

    return (
      <pre className={`md__code-block md__code-block--${lang}`}>
        <code
          className={`md__code mb__code--${lang} language-${lang}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    )
  }

  return (
    <pre className="md__code-block">
      <code className="md__code" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
})

*Defined in [src/renderer-components/code.tsx:11](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/code.tsx#L11)*
