[@nju33/react-markdown](../README.md) › [Globals](../globals.md) › ["src/renderer"](../modules/_src_renderer_.md) › [Renderer](_src_renderer_.renderer.md)

# Class: Renderer

## Hierarchy

* **Renderer**

## Implements

* [TraitRenderer](../interfaces/_src_renderer_.traitrenderer.md)

## Index

### Constructors

* [constructor](_src_renderer_.renderer.md#constructor)

### Properties

* [components](_src_renderer_.renderer.md#private-readonly-components)
* [htmlDepth](_src_renderer_.renderer.md#private-htmldepth)
* [htmlStack](_src_renderer_.renderer.md#private-readonly-htmlstack)

### Methods

* [render](_src_renderer_.renderer.md#render)

## Constructors

###  constructor

\+ **new Renderer**(`components`: [Components](../interfaces/_src_renderer_.components.md)): *[Renderer](_src_renderer_.renderer.md)*

*Defined in [src/renderer.tsx:129](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer.tsx#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`components` | [Components](../interfaces/_src_renderer_.components.md) |

**Returns:** *[Renderer](_src_renderer_.renderer.md)*

## Properties

### `Private` `Readonly` components

• **components**: *[Components](../interfaces/_src_renderer_.components.md)*

*Defined in [src/renderer.tsx:131](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer.tsx#L131)*

___

### `Private` htmlDepth

• **htmlDepth**: *number* = 0

*Defined in [src/renderer.tsx:128](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer.tsx#L128)*

___

### `Private` `Readonly` htmlStack

• **htmlStack**: *string[]* = []

*Defined in [src/renderer.tsx:129](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer.tsx#L129)*

## Methods

###  render

▸ **render**(`node`: [MarkdownElementNodes](../modules/_src_interfaces_.md#markdownelementnodes)): *React.ReactNode*

*Defined in [src/renderer.tsx:133](https://github.com/nju33/react-markdown/blob/7fe748e/src/renderer.tsx#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [MarkdownElementNodes](../modules/_src_interfaces_.md#markdownelementnodes) |

**Returns:** *React.ReactNode*
