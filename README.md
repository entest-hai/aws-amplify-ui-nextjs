# Setup Eslint for React with Typescript 
**17 APR 2022 Hai Tran**

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