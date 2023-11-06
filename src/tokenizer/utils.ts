import { ParseContext } from '../types';

export function isEnd(context: ParseContext) {
  return context.index === context.source.length;
}
