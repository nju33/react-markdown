import Prism from 'prismjs'
import React from 'react'
import { MarkdownElementNodes } from './interfaces'

export function renderMarkdown(node: MarkdownElementNodes): React.ReactNode {
  switch (node.type) {
    case 'root': {
      const children = node.children.map((child) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return renderMarkdown(child)
      })

      return <>{children}</>
    }
    case 'heading': {
      return (
        <Heading key={JSON.stringify(node.position)} depth={node.depth}>
          {node.children.map((child) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const rendered = renderMarkdown(child)

            return rendered
          })}
        </Heading>
      )
    }
    case 'paragraph': {
      return (
        <p key={JSON.stringify(node.position)}>
          {node.children.map((child) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const rendered = renderMarkdown(child)

            return rendered
          })}
        </p>
      )
    }
    case 'list': {
      const children = node.children.map((child) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return renderMarkdown(child)
      })

      return (
        <List key={JSON.stringify(node.position)} ordered={node.ordered}>
          {children}
        </List>
      )
    }
    case 'listItem': {
      const children = node.children.map((child) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return renderMarkdown(child)
      })

      return <li key={JSON.stringify(node.position)}>{children}</li>
    }
    case 'link': {
      const children = node.children.map((child) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return renderMarkdown(child)
      })

      return <a key={node.url}>{children}</a>
    }
    case 'html': {
      return (
        <span
          key={JSON.stringify(node.position)}
          dangerouslySetInnerHTML={{ __html: node.value }}
        />
      )
    }
    case 'code': {
      return <Code key={node.value}>{node.value}</Code>
    }
    case 'inlineCode': {
      return <code key={node.value}>{node.value}</code>
    }
    case 'image': {
      return <img key={node.url} src={node.url} style={{ maxWidth: '100%' }} />
    }
    case 'break': {
      return <br key={JSON.stringify(node.position)} />
    }
    case 'text': {
      return node.value
    }
    default: {
      const neverNode = node as any
      console.error(
        `node.type "${neverNode.type as string}" は今の所まだ未対応です`
      )

      return null
    }
  }
}

export const Heading: React.FC<React.PropsWithChildren<{ depth: number }>> = ({
  children,
  depth
}) => {
  switch (depth) {
    case 1: {
      return <h1 className="font-bold text-6xl mb-12">{children}</h1>
    }
    case 2: {
      return <h2 className="font-bold text-5xl mb-8">{children}</h2>
    }
    case 3: {
      return <h3 className="font-bold text-3xl mb-5">{children}</h3>
    }
    case 4: {
      return <h4 className="font-bold text-2xl mb-3">{children}</h4>
    }
    case 5: {
      return <h5 className="font-bold text-xl mb-2">{children}</h5>
    }
    case 6: {
      return <h6 className="font-bold text-lg mb-1">{children}</h6>
    }
    default: {
      throw new Error('><')
    }
  }
}

export const Paragraph: React.FC<React.PropsWithChildren<{}>> = ({
  children
}) => {
  return <p>{children}</p>
}

export const Code: React.FC<{ children: string }> = ({ children }) => {
  const highlighted = Prism.highlight(
    children,
    Prism.languages.javascript,
    'javascript'
  )
  return (
    <pre
      className="w-full p-4"
      style={{ color: '#e0e4e8', background: '#23292f' }}>
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  )
}

export const List: React.FC<React.PropsWithChildren<{
  ordered: boolean
}>> = ({ children, ordered }) => {
  if (ordered) {
    return <ol className="list-decimal px-12">{children}</ol>
  }

  return <ul className="list-disc px-12">{children}</ul>
}
