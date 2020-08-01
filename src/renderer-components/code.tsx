import Prism from 'prismjs'
import * as React from 'react'

export interface CodeProps {
  lang: string | null
  value: string
}

export type CodeFC = React.NamedExoticComponent<CodeProps>

export const Code: CodeFC = React.memo(function c({ lang, value }) {
  ;(c as React.FC<React.PropsWithChildren<{}>>).displayName = 'MarkdownCode'

  let html = value
  if (typeof lang === 'string') {
    html = Prism.highlight(value, Prism.languages[lang], lang)

    return (
      <pre className={`md__code-block md__code-block--${lang}`}>
        <code
          className={`md__code mb__code--${lang} language-${lang}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    )
  }

  return (
    <pre className="md__code-block">
      <code className="md__code" dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
})
