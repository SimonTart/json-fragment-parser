import { ParseContext } from '../types';
import { isEnd } from './utils';

export function tokenize(str: string) {
  const context: ParseContext = { index: 0, source: str };
  while(!isEnd(context))
}
