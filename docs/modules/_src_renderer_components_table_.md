[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/table"](_src_renderer_components_table_.md)

# Module: "src/renderer-components/table"

## Index

### Interfaces

* [TableProps](../interfaces/_src_renderer_components_table_.tableprops.md)

### Type aliases

* [TableFC](_src_renderer_components_table_.md#tablefc)

### Variables

* [Table](_src_renderer_components_table_.md#const-table)
* [tableContext](_src_renderer_components_table_.md#const-tablecontext)

## Type aliases

###  TableFC

Ƭ **TableFC**: *NamedExoticComponent‹[TableProps](../interfaces/_src_renderer_components_table_.tableprops.md)›*

*Defined in [src/renderer-components/table.tsx:9](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/table.tsx#L9)*

## Variables

### `Const` Table

• **Table**: *[TableFC](_src_renderer_components_table_.md#tablefc)* = React.memo(function c({ align, body, head }) {
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

*Defined in [src/renderer-components/table.tsx:19](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/table.tsx#L19)*

___

### `Const` tableContext

• **tableContext**: *Context‹object›* = React.createContext<{
  align: Array<'right' | 'left' | null | undefined>
  head: boolean
}>({
  head: false,
  align: []
})

*Defined in [src/renderer-components/table.tsx:11](https://github.com/nju33/react-markdown/blob/3889a1e/src/renderer-components/table.tsx#L11)*
