import * as React from 'react'
import { dictonary } from '../dictonary'
import { LinkReferenceNode } from '../interfaces'

export interface LinkReferenceProps {
  node: LinkReferenceNode
}

export type LinkReferenceFC = React.NamedExoticComponent<
  React.PropsWithChildren<LinkReferenceProps>
>

export const LinkReference: LinkReferenceFC = React.memo(function c({
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
