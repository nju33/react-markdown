import * as React from 'react'

export interface LinkProps {
  url: string
}

export type LinkFC = React.NamedExoticComponent<
  React.PropsWithChildren<LinkProps>
>

export const Link: LinkFC = React.memo(function c({ children, url }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownLink'

  return (
    <a className="md__link" href={url}>
      {children}
    </a>
  )
})
