[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/link-reference"](_src_renderer_components_link_reference_.md)

# Module: "src/renderer-components/link-reference"

## Index

### Interfaces

* [LinkReferenceProps](../interfaces/_src_renderer_components_link_reference_.linkreferenceprops.md)

### Type aliases

* [LinkReferenceFC](_src_renderer_components_link_reference_.md#linkreferencefc)

### Variables

* [LinkReference](_src_renderer_components_link_reference_.md#const-linkreference)

## Type aliases

###  LinkReferenceFC

Ƭ **LinkReferenceFC**: *NamedExoticComponent‹React.PropsWithChildren‹[LinkReferenceProps](../interfaces/_src_renderer_components_link_reference_.linkreferenceprops.md)››*

*Defined in [src/renderer-components/link-reference.tsx:9](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/link-reference.tsx#L9)*

## Variables

### `Const` LinkReference

• **LinkReference**: *[LinkReferenceFC](_src_renderer_components_link_reference_.md#linkreferencefc)* = React.memo(function c({
  children,
  node
}) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownLinkReference'

  const { linkReferences } = React.useContext(dictonary)

  const index = linkReferences.indexOf(node)
  if (index < 2) {
    return (
      <a
        className="md__link-reference md__link-reference--origin"
        id={`origin-${node.identifier.slice(1)}`}
        href={`#reference-${node.identifier.slice(1)}`}>
        {children}
      </a>
    )
  }

  const previousSomeIdNode = linkReferences
    .slice(0, index)
    .find((reference) => {
      return reference.identifier === linkReferences[index].identifier
    })

  if (previousSomeIdNode === undefined) {
    return (
      <a
        className="md__link-reference md__link-reference--origin"
        id={`origin-${node.identifier.slice(1)}`}
        href={`#reference-${node.identifier.slice(1)}`}>
        {children}
      </a>
    )
  }

  return (
    <a
      className="md__link-reference md__link-reference--reference"
      id={`reference-${node.identifier.slice(1)}`}
      href={`#origin-${node.identifier.slice(1)}`}>
      {children}
    </a>
  )
})

*Defined in [src/renderer-components/link-reference.tsx:13](https://github.com/nju33/react-markdown/blob/b4ce032/src/renderer-components/link-reference.tsx#L13)*
