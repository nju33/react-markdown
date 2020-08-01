import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ParagraphProps {}

export type ParagraphFC = React.NamedExoticComponent<
  React.PropsWithChildren<ParagraphProps>
>

export const Paragraph: ParagraphFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownParagraph'

  return <p className="md__paragraph">{children}</p>
})
