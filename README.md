# JSON Fragment Parser
Primarily used in scenarios such as generating JSON with AI models like ChatGPT, it can parse the content of an incomplete JSON generated by AI, and then be used to render data early on, enhancing user experience.

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
... Todo
