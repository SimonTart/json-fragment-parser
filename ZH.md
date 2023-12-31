# JSON Fragment Parser
主要用在像 ChatGPT 等 AI 模型生成 JSON 的场景下，可以解析 AI 生成的一个不完整的 JSON 的内容，然后用于及早渲染数据，提高用户体验。

Feat:

1. 可以解析不完整的 JSON string
2. 支持Node 和所有的浏览器
3. 实时解析  AI 生成的 JSON string

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