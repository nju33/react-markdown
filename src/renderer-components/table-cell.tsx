import * as React from 'react'
import { tableContext } from './table'
import { tableRowContext } from './table-row'

export type TableCellFC = React.NamedExoticComponent<
  React.PropsWithChildren<{}>
>

export const TableCell: TableCellFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName =
    'MarkdownTableCell'

  const { head } = React.useContext(tableContext)
  const { align } = React.useContext(tableRowContext)

  const Tag = head ? 'th' : 'td'
  const tagClassName = head ? 'md__table-header' : 'md__table-data'
  let alignClassName: string | false = false
  if (align != null) {
    alignClassName = `md_table-cell--align-${align} ${tagClassName}--align-${align}`
  }

  const classNames = ['md__table-cell', tagClassName, alignClassName].filter(
    (item): item is string => {
      return Boolean(item)
    }
  )

  return <Tag className={classNames.join(' ')}>{children}</Tag>
})
