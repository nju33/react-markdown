import * as React from 'react'

export type EmphasisFC = React.NamedExoticComponent<React.PropsWithChildren<{}>>

export const Emphasis: EmphasisFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownEmphasis'

  return <em className="md__emphasis">{children}</em>
})
