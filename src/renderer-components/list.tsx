import * as React from 'react'

export interface ListProps {
  ordered: boolean
}

export type ListFC = React.NamedExoticComponent<
  React.PropsWithChildren<ListProps>
>

export const List: ListFC = React.memo(function c({ children, ordered }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownList'

  if (ordered) {
    return <ol className="md__list md__list--ordered">{children}</ol>
  }

  return <ul className="md__list md__list--unordered">{children}</ul>
})
