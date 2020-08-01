import * as React from 'react'
import { MarkdownElementNodes, MarkdownParentElementNodes } from './interfaces'
import {
  Blockquote,
  BlockquoteFC,
  Break,
  BreakFC,
  Code,
  CodeFC,
  defaults,
  Delete,
  DeleteFC,
  Emphasis,
  EmphasisFC,
  Heading,
  HeadingFC,
  Html,
  HtmlFC,
  Image,
  ImageFC,
  ImageReference,
  ImageReferenceFC,
  InlineCode,
  InlineCodeFC,
  Link,
  LinkFC,
  LinkReference,
  LinkReferenceFC,
  List,
  ListFC,
  ListItem,
  ListItemFC,
  Paragraph,
  ParagraphFC,
  Root,
  RootFC,
  Strong,
  StrongFC,
  Table,
  TableCell,
  TableCellFC,
  TableFC,
  TableRow,
  TableRowFC,
  Text,
  TextFC,
  ThematicBreak,
  ThematicBreakFC
} from './renderer-components'

export interface Components {
  Blockquote: BlockquoteFC
  Break: BreakFC
  Code: CodeFC
  Delete: DeleteFC
  Emphasis: EmphasisFC
  Heading: HeadingFC
  Html: HtmlFC
  Image: ImageFC
  ImageReference: ImageReferenceFC
  InlineCode: InlineCodeFC
  Link: LinkFC
  LinkReference: LinkReferenceFC
  List: ListFC
  ListItem: ListItemFC
  Paragraph: ParagraphFC
  Root: RootFC
  Strong: StrongFC
  Table: TableFC
  TableCell: TableCellFC
  TableRow: TableRowFC
  Text: TextFC
  ThematicBreak: ThematicBreakFC
}

export type ComponentNames = keyof Components

export const renderer = React.createContext<Components>({
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

export interface RendererProps {
  value: Partial<Components>
}

export const MarkdownRenderer: React.FC<React.PropsWithChildren<
  RendererProps
>> = ({ children, value }) => {
  return (
    <renderer.Provider value={{ ...defaults, ...value }}>
      {children}
    </renderer.Provider>
  )
}

export function isParentElementNode(
  a: any
): a is MarkdownParentElementNodes<MarkdownElementNodes> {
  return Object.prototype.hasOwnProperty.call(a, 'children')
}

export interface TraitRenderer {
  render: (node: MarkdownElementNodes) => React.ReactNode
}

export class Renderer implements TraitRenderer {
  private htmlDepth = 0
  private readonly htmlStack: string[] = []

  constructor(private readonly components: Components) {}

  render(node: MarkdownElementNodes): React.ReactNode {
    if (node.type === 'definition' || node.type === 'footnoteDefinition') {
      return null
    }

    const key = JSON.stringify(node.position.start)

    if (isParentElementNode(node)) {
      const {
        Blockquote,
        Delete,
        Emphasis,
        Heading,
        Link,
        LinkReference,
        List,
        ListItem,
        Paragraph,
        Root,
        Strong,
        Table,
        TableCell,
        TableRow
      } = this.components

      const children = node.children.map((child) => {
        return this.render(child)
      })

      if (node.type === 'blockquote') {
        return <Blockquote key={key}>{children}</Blockquote>
      }

      if (node.type === 'delete') {
        return <Delete key={key}>{children}</Delete>
      }

      if (node.type === 'emphasis') {
        return <Emphasis key={key}>{children}</Emphasis>
      }

      if (node.type === 'heading') {
        return (
          <Heading key={key} {...node}>
            {children}
          </Heading>
        )
      }

      if (node.type === 'link') {
        return (
          <Link key={key} {...node}>
            {children}
          </Link>
        )
      }

      if (node.type === 'linkReference') {
        return (
          <LinkReference key={key} node={node}>
            {children}
          </LinkReference>
        )
      }

      if (node.type === 'list') {
        return (
          <List key={key} {...node}>
            {children}
          </List>
        )
      }

      if (node.type === 'listItem') {
        return (
          <ListItem key={key} {...node}>
            {children}
          </ListItem>
        )
      }

      if (node.type === 'paragraph') {
        return (
          <Paragraph key={key} {...node}>
            {children}
          </Paragraph>
        )
      }

      if (node.type === 'root') {
        return (
          <Root key={key} {...node}>
            {children}
          </Root>
        )
      }

      if (node.type === 'strong') {
        return <Strong key={key}>{children}</Strong>
      }

      if (node.type === 'table') {
        return (
          <Table
            key={key}
            {...node}
            head={children[0] as React.ReactElement}
            body={children.slice(1) as React.ReactElement[]}
          />
        )
      }

      if (node.type === 'tableCell') {
        return <TableCell key={key}>{children}</TableCell>
      }

      if (node.type === 'tableRow') {
        return <TableRow key={key}>{children}</TableRow>
      }
    } else {
      const {
        Break,
        Code,
        Html,
        Image,
        ImageReference,
        InlineCode,
        Text,
        ThematicBreak
      } = this.components

      if (node.type === 'break') {
        return <Break key={key} />
      }

      if (node.type === 'code') {
        return <Code key={key} {...node} />
      }

      if (node.type === 'html') {
        if (this.htmlDepth === 0) {
          this.htmlDepth++
          this.htmlStack.push(node.value)
          return null
        } else if (!/^<\//.test(node.value)) {
          this.htmlStack.push(node.value)
          this.htmlDepth++
          return null
        } else {
          this.htmlDepth--
        }

        if (this.htmlDepth > 0) {
          return null
        }

        return (
          <Html key={key} value={[...this.htmlStack, node.value].join('')} />
        )
      }

      if (node.type === 'image') {
        return <Image key={key} {...node} />
      }

      if (node.type === 'imageReference') {
        return <ImageReference key={key} {...node} />
      }

      if (node.type === 'inlineCode') {
        return <InlineCode key={key} {...node} />
      }

      if (node.type === 'text') {
        if (this.htmlDepth > 0) {
          this.htmlStack.push(node.value)
          return null
        }

        return <Text key={key} {...node} />
      }

      if (node.type === 'thematicBreak') {
        return <ThematicBreak key={key} />
      }
    }

    console.warn(node)
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new TypeError(`unknown node type: ${node.type}`)
  }
}
