import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootProps {}

export type RootFC = React.NamedExoticComponent<
  React.PropsWithChildren<RootProps>
>

export const Root: RootFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownRoot'

  return <>{children}</>
})
