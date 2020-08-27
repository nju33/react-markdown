[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer-components/table-cell"](_src_renderer_components_table_cell_.md)

# Module: "src/renderer-components/table-cell"

## Index

### Type aliases

* [TableCellFC](_src_renderer_components_table_cell_.md#tablecellfc)

### Variables

* [TableCell](_src_renderer_components_table_cell_.md#const-tablecell)

## Type aliases

###  TableCellFC

Ƭ **TableCellFC**: *NamedExoticComponent‹React.PropsWithChildren‹object››*

*Defined in [src/renderer-components/table-cell.tsx:5](https://github.com/nju33/react-markdown/blob/52ced5e/src/renderer-components/table-cell.tsx#L5)*

## Variables

### `Const` TableCell

• **TableCell**: *[TableCellFC](_src_renderer_components_table_cell_.md#tablecellfc)* = React.memo(function c({ children }) {
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

*Defined in [src/renderer-components/table-cell.tsx:9](https://github.com/nju33/react-markdown/blob/52ced5e/src/renderer-components/table-cell.tsx#L9)*
