import * as React from 'react'

export type BreakFC = React.NamedExoticComponent<{}>

export const Break: BreakFC = React.memo(function c() {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownBreak'

  return <br className="md__break" />
})
