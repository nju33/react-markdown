[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/image"](_src_renderer_components_image_.md)

# Module: "src/renderer-components/image"

## Index

### Interfaces

* [ImageProps](../interfaces/_src_renderer_components_image_.imageprops.md)

### Type aliases

* [ImageFC](_src_renderer_components_image_.md#imagefc)

### Variables

* [Image](_src_renderer_components_image_.md#const-image)

## Type aliases

###  ImageFC

Ƭ **ImageFC**: *NamedExoticComponent‹[ImageProps](../interfaces/_src_renderer_components_image_.imageprops.md)›*

*Defined in [src/renderer-components/image.tsx:7](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/image.tsx#L7)*

## Variables

### `Const` Image

• **Image**: *[ImageFC](_src_renderer_components_image_.md#imagefc)* = React.memo(function c({ url }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownImage'

  return <img className="md__image" src={url} style={{ maxWidth: '100%' }} />
})

*Defined in [src/renderer-components/image.tsx:9](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/image.tsx#L9)*
