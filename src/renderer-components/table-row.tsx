import * as React from 'react'
import { tableContext } from './table'

export type TableRowFC = React.NamedExoticComponent<React.PropsWithChildren<{}>>

export const tableRowContext = React.createContext<{
  align: 'right' | 'left' | null | undefined
}>({
  align: undefined
})

export const TableRow: TableRowFC = React.memo(function c({ children }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownRow'

  const { align } = React.useContext(tableContext)

  if (Array.isArray(children)) {
    return (
      <tr className="md__table-row">
        {children.map((child, index) => {
          return (
            <tableRowContext.Provider
              key={index}
              value={{ align: align[index] }}>
              {child}
            </tableRowContext.Provider>
          )
        })}
      </tr>
    )
  }

  return (
    <tr className="md__table-row">
      <tableRowContext.Provider value={{ align: align[0] }}>
        {children}
      </tableRowContext.Provider>
    </tr>
  )
})
