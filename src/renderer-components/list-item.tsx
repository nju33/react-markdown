import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListItemProps {}

export type ListItemFC = React.NamedExoticComponent<
  React.PropsWithChildren<ListItemProps>
>

export const ListItem: ListItemFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownListItem'

  return <li className="md__list-item">{children}</li>
})
