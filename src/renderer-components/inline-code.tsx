import * as React from 'react'

export interface InlineCodeProps {
  value: string
}

export type InlineCodeFC = React.NamedExoticComponent<InlineCodeProps>

export const InlineCode: InlineCodeFC = React.memo(function c({ value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownInlineCode'

  return <code className="md__inline-code">{value}</code>
})
