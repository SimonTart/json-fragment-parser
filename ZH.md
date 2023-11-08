# JSON Fragment Parser
主要用在像 ChatGPT 等 AI 模型生成 JSON 的场景下，可以解析 AI 生成的一个不完整的 JSON 的内容，然后用于及早渲染数据，提高用户体验。

# Install
```bash
npm install --save json-fragment-parser
 ```

# Usage
```js
import { jsonFragmenParser } from 'json-fragment-parser';
const objData = jsonFragmenParser('{ title: "hello world", content: "hello ');
// { title: "hello world", content: "hello" }

const arrData = jsonFragmenParser('["apple", "ora');
// ["apple", "ora"]
```

# Demo
https://codesandbox.io/s/json-fragment-parser-demo-3pnksv?file=/src/App.js