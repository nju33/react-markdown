import * as React from 'react'

export interface TableProps {
  align: Array<'right' | 'left' | null | undefined>
  body: React.ReactElement[]
  head: React.ReactElement
}

export type TableFC = React.NamedExoticComponent<TableProps>

export const tableContext = React.createContext<{
  align: Array<'right' | 'left' | null | undefined>
  head: boolean
}>({
  head: false,
  align: []
})

export const Table: TableFC = React.memo(function c({ align, body, head }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownTable'

  return (
    <table className="md__table">
      <thead className="md__table-head">
        <tableContext.Provider value={{ head: true, align }}>
          {head}
        </tableContext.Provider>
      </thead>
      <tbody className="md__table-body">
        <tableContext.Provider value={{ head: false, align }}>
          {body}
        </tableContext.Provider>
      </tbody>
    </table>
  )
})
