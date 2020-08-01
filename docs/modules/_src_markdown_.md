[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/markdown"](_src_markdown_.md)

# Module: "src/markdown"

## Index

### Interfaces

* [MarkdownProps](../interfaces/_src_markdown_.markdownprops.md)

### Variables

* [Markdown](_src_markdown_.md#const-markdown)

### Functions

* [_Markdown](_src_markdown_.md#const-_markdown)
* [collectDefinitions](_src_markdown_.md#collectdefinitions)
* [collectLinkReference](_src_markdown_.md#collectlinkreference)
* [useMarkdown](_src_markdown_.md#usemarkdown)

## Variables

### `Const` Markdown

• **Markdown**: *NamedExoticComponent‹[MarkdownProps](../interfaces/_src_markdown_.markdownprops.md)›* = React.memo(_Markdown)

*Defined in [src/markdown.tsx:163](https://github.com/nju33/react-markdown/blob/7fe748e/src/markdown.tsx#L163)*

## Functions

### `Const` _Markdown

▸ **_Markdown**(`__namedParameters`: object): *Element‹›*

*Defined in [src/markdown.tsx:141](https://github.com/nju33/react-markdown/blob/7fe748e/src/markdown.tsx#L141)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`contents` | string | - |
`isServer` | boolean | false |

**Returns:** *Element‹›*

___

###  collectDefinitions

▸ **collectDefinitions**(`node`: [NodeBase](../interfaces/_src_interfaces_.nodebase.md)): *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

*Defined in [src/markdown.tsx:20](https://github.com/nju33/react-markdown/blob/7fe748e/src/markdown.tsx#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeBase](../interfaces/_src_interfaces_.nodebase.md) |

**Returns:** *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

___

###  collectLinkReference

▸ **collectLinkReference**(`node`: [NodeBase](../interfaces/_src_interfaces_.nodebase.md)): *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

*Defined in [src/markdown.tsx:40](https://github.com/nju33/react-markdown/blob/7fe748e/src/markdown.tsx#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [NodeBase](../interfaces/_src_interfaces_.nodebase.md) |

**Returns:** *[NodeBase](../interfaces/_src_interfaces_.nodebase.md)[]*

___

###  useMarkdown

▸ **useMarkdown**(`contents`: string, `isServer`: boolean): *[[MarkdownNode](../interfaces/_src_interfaces_.markdownnode.md), [DefinitionNodes](_src_interfaces_.md#definitionnodes), [LinkReferenceNode](../interfaces/_src_interfaces_.linkreferencenode.md)[], [Components](../interfaces/_src_renderer_.components.md)]*

*Defined in [src/markdown.tsx:60](https://github.com/nju33/react-markdown/blob/7fe748e/src/markdown.tsx#L60)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`contents` | string | - |
`isServer` | boolean | false |

**Returns:** *[[MarkdownNode](../interfaces/_src_interfaces_.markdownnode.md), [DefinitionNodes](_src_interfaces_.md#definitionnodes), [LinkReferenceNode](../interfaces/_src_interfaces_.linkreferencenode.md)[], [Components](../interfaces/_src_renderer_.components.md)]*
