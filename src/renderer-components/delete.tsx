import * as React from 'react'

export type DeleteFC = React.NamedExoticComponent<React.PropsWithChildren<{}>>

export const Delete: DeleteFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownDelete'

  return <del className="md__delete">{children}</del>
})
