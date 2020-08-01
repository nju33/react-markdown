[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer"](_src_renderer_.md)

# Module: "src/renderer"

## Index

### Classes

* [Renderer](../classes/_src_renderer_.renderer.md)

### Interfaces

* [Components](../interfaces/_src_renderer_.components.md)
* [RendererProps](../interfaces/_src_renderer_.rendererprops.md)
* [TraitRenderer](../interfaces/_src_renderer_.traitrenderer.md)

### Type aliases

* [ComponentNames](_src_renderer_.md#componentnames)

### Variables

* [renderer](_src_renderer_.md#const-renderer)

### Functions

* [MarkdownRenderer](_src_renderer_.md#const-markdownrenderer)
* [isParentElementNode](_src_renderer_.md#isparentelementnode)

## Type aliases

###  ComponentNames

Ƭ **ComponentNames**: *keyof Components*

*Defined in [src/renderer.tsx:76](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer.tsx#L76)*

## Variables

### `Const` renderer

• **renderer**: *Context‹[Components](../interfaces/_src_renderer_.components.md)›* = React.createContext<Components>({
  Blockquote,
  Break,
  Code,
  Delete,
  Emphasis,
  Heading,
  Html,
  Image,
  ImageReference,
  InlineCode,
  Link,
  LinkReference,
  List,
  ListItem,
  Paragraph,
  Root,
  Strong,
  Table,
  TableCell,
  TableRow,
  Text,
  ThematicBreak
})

*Defined in [src/renderer.tsx:78](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer.tsx#L78)*

## Functions

### `Const` MarkdownRenderer

▸ **MarkdownRenderer**(`__namedParameters`: object): *Element‹›*

*Defined in [src/renderer.tsx:109](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer.tsx#L109)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`children` | undefined &#124; null &#124; string &#124; number &#124; false &#124; true &#124; object &#124; ReactElement‹any, string &#124; function &#124; object› &#124; ReactNodeArray‹› &#124; ReactPortal‹› |
`value` | object |

**Returns:** *Element‹›*

___

###  isParentElementNode

▸ **isParentElementNode**(`a`: any): *a is MarkdownParentElementNodes<MarkdownElementNodes>*

*Defined in [src/renderer.tsx:117](https://github.com/nju33/react-markdown/blob/6bc1522/src/renderer.tsx#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *a is MarkdownParentElementNodes<MarkdownElementNodes>*
