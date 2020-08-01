[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/link"](_src_renderer_components_link_.md)

# Module: "src/renderer-components/link"

## Index

### Interfaces

* [LinkProps](../interfaces/_src_renderer_components_link_.linkprops.md)

### Type aliases

* [LinkFC](_src_renderer_components_link_.md#linkfc)

### Variables

* [Link](_src_renderer_components_link_.md#const-link)

## Type aliases

###  LinkFC

Ƭ **LinkFC**: *NamedExoticComponent‹React.PropsWithChildren‹[LinkProps](../interfaces/_src_renderer_components_link_.linkprops.md)››*

*Defined in [src/renderer-components/link.tsx:7](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer-components/link.tsx#L7)*

## Variables

### `Const` Link

• **Link**: *[LinkFC](_src_renderer_components_link_.md#linkfc)* = React.memo(function c({ children, url }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownLink'

  return (
    <a className="md__link" href={url}>
      {children}
    </a>
  )
})

*Defined in [src/renderer-components/link.tsx:11](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer-components/link.tsx#L11)*
