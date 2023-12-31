# JSON Fragment Parser
Primarily used in scenarios such as generating JSON with AI models like ChatGPT, it can parse the content of an incomplete JSON generated by AI, and then be used to render data early on, enhancing user experience.


Feat:

1. Parse partial JSON string
2. Supports Node and all browsers
3. Instantly parse JSON string that generated by AI


[中文文档](./ZH.md)

[![CI](https://github.com/SimonTart/json-fragment-parser/actions/workflows/main.yml/badge.svg)](https://github.com/SimonTart/json-fragment-parser/actions/workflows/main.yml)

# Install
```bash
npm install --save json-fragment-parser
 ```

# Usage
```js
import { jsonParse } from 'json-fragment-parser';
const objData = jsonParse('{ title: "hello world", content: "hello ');
// { title: "hello world", content: "hello" }

const arrData = jsonParse('["apple", "ora');
// ["apple", "ora"]
```

# Demo
https://codesandbox.io/s/json-fragment-parser-demo-3pnksv?file=/src/App.js
