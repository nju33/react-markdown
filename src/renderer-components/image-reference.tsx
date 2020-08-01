import * as React from 'react'
import { dictonary } from '../dictonary'
import { DefinitionNode } from '../interfaces'

export interface ImageReferenceProps {
  alt: string
  identifier: string
}

export type ImageReferenceFC = React.NamedExoticComponent<ImageReferenceProps>

export const ImageReference: ImageReferenceFC = React.memo(function c({
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
