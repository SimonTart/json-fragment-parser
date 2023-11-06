import { tokenize } from './tokenizer/tokenize';
import { parseTokens } from './parser/parseTokens';

export function jsonParse(str: string) {
  const tokens = tokenize(str);
  return parseTokens(tokens);
}
