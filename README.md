# React Markdown

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://react-markdown-git-storybook.nju33.vercel.app/)

<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->

## Install

```bash
yarn add react prismjs @nju33/react-markdown
```

## Example

```jsx
import { Markdown } from '@nju33/react-markdown'

// ...
return <Markdown contents={markdownContents} />
```

If you put a code, additionally import a prismjs theme too.

```jsx
import 'path/to/your-favorite-theme.css'
```

If you want to use your favorite element, you can use it.
For instance, If you would like to use my favorite Heading component pass to the `MarkdownRenderer`.

```jsx
import { MarkdownRenderer, Markdown } from '@nju33/react-markdown'

// ...
return (
  <MarkdownRenderer
    value={{
      Heading: MyFavoriteHeading
    }}>
    <Markdown contents={markdownContents} />
  </MarkdownRenderer>
)
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://nju33.com/"><img src="https://avatars2.githubusercontent.com/u/15901038?v=4?s=100" width="100px;" alt=""/><br /><sub><b>純</b></sub></a><br /><a href="https://github.com/nju33/template-react/commits?author=nju33" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->

<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
