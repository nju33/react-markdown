import * as React from 'react'
import { DefinitionNodes, LinkReferenceNode } from './interfaces'

const dictonary = React.createContext<{
  definitions: DefinitionNodes
  linkReferences: LinkReferenceNode[]
}>({ definitions: [], linkReferences: [] })

export { dictonary }
