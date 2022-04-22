# Setup Eslint for React with Typescript

**17 APR 2022 Hai Tran update**

## Setup NextJS project

```
npm init -y
```

update package.json

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion next react react-dom react-table react-icons @chakra-ui/icons
```

support typescript

```
npm i -D typescript
```

update package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
```

## Setup eslint terminal

install

```
npm install eslint --save-dev

```

configure and create **.eslintrc.js** by this command and selection options

```
npm init @eslint/config

```

example configuration

```
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

```

check from terminal

```
npx eslint yourfile.js
```

## Setup eslint for vscode

```
extension and install eslint
```

**Restart Eslint** from vscode command if needed.

## Setup prettier code formatter

- install prettier extension for vscode
- configure vscode `ctr shift p` and type `Document Format` to select code formater as prettier

## Getting started with Chakra UI

install chakra ui for react

```
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

create theme.js

```
// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
```

add ColorModeScript to index.js

```
// index.js

import { ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <>
    {/* 👇 Here's the script */}
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root'),
)
```

## Configure tsconfig.json

## Setup vim for vscode

## How AmplifyProvider and Theme work with SCSS

**22 APR 200 Hai Tran**
Quote from the principale design engineer from AWS

```
When you use the <AmplifyProvider> it wraps all the children in a div with that data attribute, and then adds all the CSS variables the theme needs. Looking at that SCSS [data-amplify-theme] .docs-nav-link I don't think we actually need the [data-amplify-theme] part of the selector, it might be leftover from some refactoring.
That code is to make the theme switcher on the homepage of the site work. Rather than passing in entirely new theme objects to the AmplifyProvider, a theme can have overrides that change the theme based on certain conditions (like targeting a different selector in CSS, or for light/dark mode). If you look at theme.ts in the docs you will see some overrides with selectors, then in the homepage when you click on a theme button it applies that data attribute and the new theme css vars get applied. https://ui.docs.amplify.aws/theming#overrides

```

This is a great topic to dive in and share

### Hello SCSS

- selector
- @media
- variable
- document.documentElement.setAttribute()

### How AmplifyProvider and Theme work with SCSS

- Override by theme object
- OVerride by SCSS variable
- How they work together

## Next router

-

## Export static and deploy to S3

setup

```
"scripts": {
  "build": "next build && next export"
}
```

```
npm run build
```

## Amplify host

should clean package.json file

```
  "scripts": {
    "dev": "next dev -p 3000",
    "preflutter:build": "yarn flutter:clean",
    "flutter:build": "(cd flutter/authenticator && flutter build web)",
    "postflutter:build": "yarn flutter:copy",
    "flutter:clean": "rm -rf public/flutter/authenticator",
    "flutter:copy": "cp -r ./flutter/authenticator/build/web public/flutter/authenticator",
    "build": "next build && next export",
    "lint": "next lint",
    "start": "next start",
    "test": "$_ run build"
  },
```
