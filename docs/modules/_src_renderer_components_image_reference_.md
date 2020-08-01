[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/image-reference"](_src_renderer_components_image_reference_.md)

# Module: "src/renderer-components/image-reference"

## Index

### Interfaces

* [ImageReferenceProps](../interfaces/_src_renderer_components_image_reference_.imagereferenceprops.md)

### Type aliases

* [ImageReferenceFC](_src_renderer_components_image_reference_.md#imagereferencefc)

### Variables

* [ImageReference](_src_renderer_components_image_reference_.md#const-imagereference)

## Type aliases

###  ImageReferenceFC

Ƭ **ImageReferenceFC**: *NamedExoticComponent‹[ImageReferenceProps](../interfaces/_src_renderer_components_image_reference_.imagereferenceprops.md)›*

*Defined in [src/renderer-components/image-reference.tsx:10](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/image-reference.tsx#L10)*

## Variables

### `Const` ImageReference

• **ImageReference**: *[ImageReferenceFC](_src_renderer_components_image_reference_.md#imagereferencefc)* = React.memo(function c({
  alt,
  identifier
}) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownImageReference'

  const { definitions } = React.useContext(dictonary)
  const definitionOrUndefined = definitions
    .filter((node): node is DefinitionNode => {
      return node.type === 'definition'
    })
    .find((node) => {
      return node.identifier === identifier
    })

  if (definitionOrUndefined === undefined) {
    throw new TypeError(`Definition not found this identifier: ${identifier}`)
  }

  if (definitionOrUndefined.url === null) {
    throw new TypeError(`'url' attributet of the Definition not found`)
  }

  return (
    <img
      className="md__image-reference"
      src={definitionOrUndefined.url}
      alt={alt}
      title={definitionOrUndefined.title ?? ''}
      style={{ maxWidth: '100%' }}
      loading="lazy"
    />
  )
})

*Defined in [src/renderer-components/image-reference.tsx:12](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/image-reference.tsx#L12)*
