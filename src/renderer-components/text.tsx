import * as React from 'react'

export interface TextProps {
  value: string
}

export type TextFC = React.NamedExoticComponent<TextProps>

export const Text: TextFC = React.memo(function c({ value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownText'

  return <>{value}</>
})
