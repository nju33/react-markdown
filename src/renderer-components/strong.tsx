import * as React from 'react'

export type StrongFC = React.NamedExoticComponent<React.PropsWithChildren<{}>>

export const Strong: StrongFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownStrong'

  return <strong className="md__strong">{children}</strong>
})
