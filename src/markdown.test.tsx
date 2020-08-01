/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import { Markdown } from './markdown'
import { MarkdownRenderer } from './renderer'
import { defaults } from './renderer-components'

describe('Markdown', () => {
  let container: HTMLElement

  beforeEach(() => {
    const result = render(
      <>
        <MarkdownRenderer value={defaults}>
          <Markdown
            isServer
            contents={`
---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Break

fooooo${'  '}
barrrr

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
  * Ac tristique libero volutpat at
  + Facilisis in pretium nisl aliquet
  - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

  // Some comments
  line 1 of code
  line 2 of code
  line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting <span class="nest"><span>.</span></span>

\`\`\`js
var foo = function (bar) {
return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

  and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

      { some code, part of Definition 2 }

  Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::

          `.trim()}
          />
        </MarkdownRenderer>
      </>
    )

    container = result.container
  })

  test('heading', () => {
    expect(container.querySelector('.md__heading--depth-1')).toBeTruthy()
    expect(container.querySelector('.md__heading--depth-2')).toBeTruthy()
    expect(container.querySelector('.md__heading--depth-3')).toBeTruthy()
    expect(container.querySelector('.md__heading--depth-4')).toBeTruthy()
    expect(container.querySelector('.md__heading--depth-5')).toBeTruthy()
    expect(container.querySelector('.md__heading--depth-6')).toBeTruthy()
  })

  test('paragraph', () => {
    expect(container.querySelector('.md__paragraph')).toBeTruthy()
  })

  test('list and listItem', () => {
    expect(container.querySelector('.md__list')).toBeTruthy()
    expect(container.querySelector('.md__list-item')).toBeTruthy()
  })

  test('blockquote', () => {
    expect(container.querySelector('.md__blockquote')).toBeTruthy()
  })

  test('code', () => {
    expect(container.querySelector('.md__code-block')).toBeTruthy()
    expect(container.querySelector('.md__code')).toBeTruthy()
  })

  test('inlineCode', () => {
    expect(container.querySelector('.md__inline-code')).toBeTruthy()
  })

  test('html', () => {
    expect(container.querySelector('.md__html')).toBeTruthy()
  })

  test('image', () => {
    expect(container.querySelector('.md__image')).toBeTruthy()
  })

  test('image-reference', () => {
    expect(container.querySelector('.md__image-reference')).toBeTruthy()
  })

  test('link', () => {
    expect(container.querySelector('.md__link')).toBeTruthy()
  })

  test('link-reference', () => {
    expect(container.querySelector('.md__link-reference')).toBeTruthy()
    expect(container.querySelector('.md__link-reference--origin')).toBeTruthy()
    expect(
      container.querySelector('.md__link-reference--reference')
    ).toBeTruthy()
  })

  test('table', () => {
    expect(container.querySelector('.md__table')).toBeTruthy()
    expect(container.querySelector('.md__table-row')).toBeTruthy()
    expect(container.querySelector('.md__table-cell')).toBeTruthy()
    expect(container.querySelector('.md__table-header')).toBeTruthy()
    expect(container.querySelector('.md__table-data')).toBeTruthy()
  })

  test('emphasis', () => {
    expect(container.querySelector('.md__emphasis')).toBeTruthy()
  })

  test('strong', () => {
    expect(container.querySelector('.md__strong')).toBeTruthy()
  })

  test('break', () => {
    expect(container.querySelector('.md__break')).toBeTruthy()
  })

  test('thematicBreak', () => {
    expect(container.querySelector('.md__thematic-break')).toBeTruthy()
  })

  test('delete', () => {
    expect(container.querySelector('.md__delete')).toBeTruthy()
  })
})
