export interface NodePosition {
  end: {
    column: number
    line: number
    offset: number
  }
  indent: unknown[]
  start: {
    column: number
    line: number
    offset: number
  }
}

export interface NodeBase {
  children?: NodeBase[]
  position: NodePosition
  type: string
}

export interface TextNode extends NodeBase {
  position: NodePosition
  type: 'text'
  value: string
}

export interface HeadingNode extends NodeBase {
  children: MarkdownElementNodes[]
  depth: number
  position: NodePosition
  type: 'heading'
}

export interface InlineCodeNode extends NodeBase {
  position: NodePosition
  type: 'inlineCode'
  value: string
}

export interface ImageNode extends NodeBase {
  alt: string
  position: NodePosition
  title: null | string
  type: 'image'
  url: string
}

export interface HtmlNode extends NodeBase {
  position: NodePosition
  type: 'html'
  value: string
}

export interface BreakNode extends NodeBase {
  position: NodePosition
  type: 'break'
}

export interface ThematicBreakNode extends NodeBase {
  position: NodePosition
  type: 'thematicBreak'
}

export interface LinkNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  title: null | string
  type: 'link'
  url: string
}

export interface StrongNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'strong'
}

export interface EmphasisNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'emphasis'
}

export interface DeleteNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'delete'
}

export interface BlockquoteNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'blockquote'
}

export interface tableCellNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'tableCell'
}

export interface TableRowNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'tableRow'
}

export interface TableNode extends NodeBase {
  align: Array<'right' | 'left' | null>
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'table'
}

export interface ImageReferenceNode extends NodeBase {
  alt: string
  identifier: string
  label: string
  position: NodePosition
  referenceType: 'full'
  type: 'imageReference'
}

export interface DefinitionNode extends NodeBase {
  identifier: string
  label: string
  title: string | null
  type: 'definition'
  url: string | null
}

export interface FootnoteDefinitionNode extends NodeBase {
  children: MarkdownElementNodes[]
  identifier: string
  label: string
  type: 'footnoteDefinition'
}

export interface ParagraphNode extends NodeBase {
  children: MarkdownElementNodes[]
  position: NodePosition
  type: 'paragraph'
}

export interface LinkReferenceNode extends NodeBase {
  children: MarkdownElementNodes[]
  identifier: string
  label: string
  position: NodePosition
  referenceType: string /* 'shortcut' */
  type: 'linkReference'
}

export interface ListItemNode extends NodeBase {
  checked: null
  children: MarkdownElementNodes[]
  position: NodePosition
  spread: boolean
  type: 'listItem'
}

export interface ListNode extends NodeBase {
  children: MarkdownElementNodes[]
  ordered: boolean
  position: NodePosition
  spread: boolean
  start: number
  type: 'list'
}

export interface CodeNode extends NodeBase {
  lang: string | null
  meta: null | unknown
  position: NodePosition
  type: 'code'
  value: string
}

export interface MarkdownNode extends NodeBase {
  // children: Array<HeadingNode | ParagraphNode | CodeNode | ListNode>
  children: MarkdownElementNodes[]
  type: 'root'
}

export type MarkdownElementNodes =
  | MarkdownNode
  | CodeNode
  | ListNode
  | ListItemNode
  | ParagraphNode
  | HtmlNode
  | ImageNode
  | InlineCodeNode
  | TextNode
  | HeadingNode
  | BreakNode
  | ThematicBreakNode
  | LinkNode
  | StrongNode
  | EmphasisNode
  | DeleteNode
  | BlockquoteNode
  | tableCellNode
  | TableRowNode
  | TableNode
  | ImageReferenceNode
  | DefinitionNode
  | FootnoteDefinitionNode
  | LinkReferenceNode

export type DefinitionNodes = Array<DefinitionNode | FootnoteDefinitionNode>

export type MarkdownParentElementNodes<
  T extends MarkdownElementNodes = MarkdownElementNodes
> = T extends {
  children: any
}
  ? T
  : never

// export type MarkdownParentElementTypes = MarkdownParentElementNodes['type']

// export type MarkdownNonParentElementTypes<
//   T extends MarkdownElementNodes = MarkdownElementNodes
// > = T extends MarkdownParentElementTypes ? never : T

// export type MarkdownElementTypes<
//   T extends MarkdownElementNodes = MarkdownElementNodes
// > = T extends {
//   type: any
// }
//   ? T['type']
//   : never
