import * as React from 'react'

export interface ImageProps {
  url: string
}

export type ImageFC = React.NamedExoticComponent<ImageProps>

export const Image: ImageFC = React.memo(function c({ url }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownImage'

  return <img className="md__image" src={url} style={{ maxWidth: '100%' }} />
})
