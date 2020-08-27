[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/markdown"](_src_markdown_.md)

# Module: "src/markdown"

## Index

### Interfaces

* [MarkdownPropsWithContents](../interfaces/_src_markdown_.markdownpropswithcontents.md)
* [MarkdownPropsWithPreProcessed](../interfaces/_src_markdown_.markdownpropswithpreprocessed.md)

### Type aliases

* [MarkdownProps](_src_markdown_.md#markdownprops)
* [ProcessedResult](_src_markdown_.md#processedresult)

### Variables

* [Markdown](_src_markdown_.md#const-markdown)

### Functions

* [_Markdown](_src_markdown_.md#const-_markdown)
* [collectDefinitions](_src_markdown_.md#collectdefinitions)
* [collectLinkReference](_src_markdown_.md#collectlinkreference)
* [isPropsWithContents](_src_markdown_.md#ispropswithcontents)
* [process](_src_markdown_.md#process)
* [useMarkdown](_src_markdown_.md#usemarkdown)

## Type aliases

###  MarkdownProps

Ƭ **MarkdownProps**: *[MarkdownPropsWithContents](../interfaces/_src_markdown_.markdownpropswithcontents.md) | [MarkdownPropsWithPreProcessed](../interfaces/_src_markdown_.markdownpropswithpreprocessed.md)*

*Defined in [src/markdown.tsx:30](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L30)*

___

###  ProcessedResult

Ƭ **ProcessedResult**: *[[MarkdownNode](../interfaces/_src_interfaces_.markdownnode.md), [DefinitionNodes](_src_interfaces_.md#definitionnodes), [LinkReferenceNode](../interfaces/_src_interfaces_.linkreferencenode.md)[]]*

*Defined in [src/markdown.tsx:20](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L20)*

## Variables

### `Const` Markdown

• **Markdown**: *NamedExoticComponent‹[MarkdownProps](_src_markdown_.md#markdownprops)›* = React.memo(_Markdown)

*Defined in [src/markdown.tsx:231](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L231)*

## Functions

### `Const` _Markdown

▸ **_Markdown**(`props`: PropsWithChildren‹[MarkdownProps](_src_markdown_.md#markdownprops)›): *Element‹›*

*Defined in [src/markdown.tsx:189](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | PropsWithChildren‹[MarkdownProps](_src_markdown_.md#markdownprops)› |

**Returns:** *Element‹›*

___

###  collectDefinitions

▸ **collectDefinitions**(`node`: [NodeBase](../interfaces/_src_interfaces_.nodebase.md)): *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

*Defined in [src/markdown.tsx:34](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeBase](../interfaces/_src_interfaces_.nodebase.md) |

**Returns:** *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

___

###  collectLinkReference

▸ **collectLinkReference**(`node`: [NodeBase](../interfaces/_src_interfaces_.nodebase.md)): *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

*Defined in [src/markdown.tsx:54](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeBase](../interfaces/_src_interfaces_.nodebase.md) |

**Returns:** *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

___

###  isPropsWithContents

▸ **isPropsWithContents**(`a`: any): *a is MarkdownPropsWithContents*

*Defined in [src/markdown.tsx:185](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *a is MarkdownPropsWithContents*

___

###  process

▸ **process**(`contents`: string, `options`: object): *Promise‹[ProcessedResult](_src_markdown_.md#processedresult)›*

*Defined in [src/markdown.tsx:74](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L74)*

**Parameters:**

▪ **contents**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`sync` | false |

**Returns:** *Promise‹[ProcessedResult](_src_markdown_.md#processedresult)›*

▸ **process**(`contents`: string, `options`: object): *[ProcessedResult](_src_markdown_.md#processedresult)*

*Defined in [src/markdown.tsx:78](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L78)*

**Parameters:**

▪ **contents**: *string*

▪ **options**: *object*

Name | Type |
------ | ------ |
`sync` | true |

**Returns:** *[ProcessedResult](_src_markdown_.md#processedresult)*

___

###  useMarkdown

▸ **useMarkdown**(`contents`: string, `isServer`: boolean): *[[MarkdownNode](../interfaces/_src_interfaces_.markdownnode.md), [DefinitionNodes](_src_interfaces_.md#definitionnodes), [LinkReferenceNode](../interfaces/_src_interfaces_.linkreferencenode.md)[], [Components](../interfaces/_src_renderer_.components.md)]*

*Defined in [src/markdown.tsx:120](https://github.com/nju33/react-markdown/blob/3861cd2/src/markdown.tsx#L120)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`contents` | string | - |
`isServer` | boolean | false |

**Returns:** *[[MarkdownNode](../interfaces/_src_interfaces_.markdownnode.md), [DefinitionNodes](_src_interfaces_.md#definitionnodes), [LinkReferenceNode](../interfaces/_src_interfaces_.linkreferencenode.md)[], [Components](../interfaces/_src_renderer_.components.md)]*
