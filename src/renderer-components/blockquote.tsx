import * as React from 'react'

export type BlockquoteFC = React.NamedExoticComponent<
  React.PropsWithChildren<{}>
>

export const Blockquote: BlockquoteFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownBlockquote'

  return <blockquote className="md__blockquote">{children}</blockquote>
})
