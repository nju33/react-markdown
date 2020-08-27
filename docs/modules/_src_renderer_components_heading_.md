[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/heading"](_src_renderer_components_heading_.md)

# Module: "src/renderer-components/heading"

## Index

### Interfaces

* [HeadingProps](../interfaces/_src_renderer_components_heading_.headingprops.md)

### Type aliases

* [HeadingFC](_src_renderer_components_heading_.md#headingfc)

### Variables

* [Heading](_src_renderer_components_heading_.md#const-heading)

## Type aliases

###  HeadingFC

Ƭ **HeadingFC**: *NamedExoticComponent‹React.PropsWithChildren‹[HeadingProps](../interfaces/_src_renderer_components_heading_.headingprops.md)››*

*Defined in [src/renderer-components/heading.tsx:7](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/heading.tsx#L7)*

## Variables

### `Const` Heading

• **Heading**: *[HeadingFC](_src_renderer_components_heading_.md#headingfc)* = React.memo(function c({ children, depth }) {
  ;(c as React.FC<React.PropsWithChildren<HeadingProps>>).displayName =
    'MarkdownHeading'

  const Tag = `h${depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  if (depth > 0 && depth < 7) {
    return (
      <Tag className={`md__heading md__heading--depth-${depth}`}>
        {children}
      </Tag>
    )
  }

  throw new RangeError('The `depth` must be in the range of 1-6')
})

*Defined in [src/renderer-components/heading.tsx:11](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/heading.tsx#L11)*
