import * as React from 'react'

export type ThematicBreakFC = React.NamedExoticComponent<{}>

export const ThematicBreak: ThematicBreakFC = React.memo(function c() {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownThematicBreak'

  return <hr className="md__thematic-break" />
})
