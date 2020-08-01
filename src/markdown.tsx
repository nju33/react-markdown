import * as React from 'react'
import remark from 'remark'
import { dictonary } from './dictonary'
import {
  DefinitionNodes,
  LinkReferenceNode,
  MarkdownNode,
  NodeBase
} from './interfaces'
import { Components, Renderer, renderer } from './renderer'

export interface MarkdownProps {
  /**
   * A Markdown contents
   */
  contents: string
  isServer?: boolean
}

function collectDefinitions(node: NodeBase): NodeBase[] {
  let childDefinitions: NodeBase[] = []

  if (Array.isArray(node.children)) {
    childDefinitions = node.children
      .map((child) => {
        return collectDefinitions(child)
      })
      .reduce((result, definitions) => {
        return [...result, ...definitions]
      }, [])
  }

  if (!(node.type === 'definition' || node.type === 'footnoteDefinition')) {
    return childDefinitions
  }

  return [node, ...childDefinitions]
}

function collectLinkReference(node: NodeBase): NodeBase[] {
  let linkReferences: NodeBase[] = []

  if (Array.isArray(node.children)) {
    linkReferences = node.children
      .map((child) => {
        return collectLinkReference(child)
      })
      .reduce((result, definitions) => {
        return [...result, ...definitions]
      }, [])
  }

  if (node.type === 'linkReference') {
    return [node, ...linkReferences]
  }

  return linkReferences
}

function useMarkdown(
  contents: string,
  isServer: boolean = false
): [MarkdownNode, DefinitionNodes, LinkReferenceNode[], Components] {
  const [state, setState] = React.useState<{
    contents: string
    definitions: DefinitionNodes
    linkReferences: LinkReferenceNode[]
    node: MarkdownNode
  }>({
    contents: '',
    node: {
      type: 'root',
      position: {
        start: { column: -1, line: -1, offset: -1 },
        end: {
          column: -1,
          line: -1,
          offset: -1
        },
        indent: []
      },
      children: []
    },
    definitions: [],
    linkReferences: []
  })

  const compoents = React.useContext(renderer)

  const processor = remark().use((): any => {
    return (node: any, vfile: any) => {
      vfile.data = {
        definitions: collectDefinitions(node),
        linkReferences: collectLinkReference(node),
        node
      }
    }
  })

  React.useEffect(() => {
    if (isServer) {
      return
    }

    if (state.contents === contents) {
      return
    }

    // eslint-disable-next-line no-void
    void (async () => {
      const result = await processor.process(contents)
      const { definitions, linkReferences, node } = result.data as {
        definitions: DefinitionNodes
        linkReferences: LinkReferenceNode[]
        node: MarkdownNode
      }

      setState({ contents, node, definitions, linkReferences })
    })()
  }, [isServer, state.contents, contents, setState])

  if (isServer && state.contents !== contents) {
    const result = processor.processSync(contents)
    const { definitions, linkReferences, node } = result.data as {
      definitions: DefinitionNodes
      linkReferences: LinkReferenceNode[]
      node: MarkdownNode
    }

    setState({
      contents,
      node,
      definitions,
      linkReferences
    })
  }

  return [state.node, state.definitions, state.linkReferences, compoents]
}

const _Markdown: React.FC<MarkdownProps> = ({ contents, isServer = false }) => {
  const [node, definitions, linkReferences, components] = useMarkdown(
    contents,
    isServer
  )
  const rendered = React.useMemo(() => {
    return new Renderer(components).render(node)
  }, [node, components])

  return (
    <dictonary.Provider value={{ definitions, linkReferences }}>
      {rendered}
    </dictonary.Provider>
  )
}

_Markdown.displayName = 'Markdown'

_Markdown.defaultProps = {
  isServer: false
}

export const Markdown = React.memo(_Markdown)
