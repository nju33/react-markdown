import * as React from 'react'

export interface HeadingProps {
  depth: number
}

export type HeadingFC = React.NamedExoticComponent<
  React.PropsWithChildren<HeadingProps>
>

export const Heading: HeadingFC = React.memo(function c({ children, depth }) {
  ;(c as React.FC<React.PropsWithChildren<HeadingProps>>).displayName =
    'MarkdownHeading'

  const Tag = `h${depth}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  if (depth > 0 && depth < 7) {
    return (
      <Tag className={`md__heading md__heading--depth-${depth}`}>
        {children}
      </Tag>
    )
  }

  throw new RangeError('The `depth` must be in the range of 1-6')
})
