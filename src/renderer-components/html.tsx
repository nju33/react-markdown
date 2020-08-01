import * as React from 'react'

export interface HtmlProps {
  value: string
}

export type HtmlFC = React.NamedExoticComponent<HtmlProps>

export const Html: HtmlFC = React.memo(function c({ value: html }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownHtml'

  return (
    <span className="md__html" dangerouslySetInnerHTML={{ __html: html }} />
  )
})
