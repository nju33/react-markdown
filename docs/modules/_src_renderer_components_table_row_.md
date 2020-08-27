[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/table-row"](_src_renderer_components_table_row_.md)

# Module: "src/renderer-components/table-row"

## Index

### Type aliases

* [TableRowFC](_src_renderer_components_table_row_.md#tablerowfc)

### Variables

* [TableRow](_src_renderer_components_table_row_.md#const-tablerow)
* [tableRowContext](_src_renderer_components_table_row_.md#const-tablerowcontext)

## Type aliases

###  TableRowFC

Ƭ **TableRowFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/table-row.tsx:4](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/table-row.tsx#L4)*

## Variables

### `Const` TableRow

• **TableRow**: *[TableRowFC](_src_renderer_components_table_row_.md#tablerowfc)* = React.memo(function c({ children }) {
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

*Defined in [src/renderer-components/table-row.tsx:12](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/table-row.tsx#L12)*

___

### `Const` tableRowContext

• **tableRowContext**: *Context‹object›* = React.createContext<{
  align: 'right' | 'left' | null | undefined
}>({
  align: undefined
})

*Defined in [src/renderer-components/table-row.tsx:6](https://github.com/nju33/react-markdown/blob/5327386/src/renderer-components/table-row.tsx#L6)*
