import { tokenize } from './tokenizer/tokenize';
import { parseTokens } from './parser/parseTokens';

export function jsonParse<T>(str: string) {
  const tokens = tokenize(str);
  return parseTokens(tokens) as T;
}
