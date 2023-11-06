import { ParseContext } from '../types';

export function isEnd(context: ParseContext) {
  return context.index >= context.source.length;
}

export function isIndexEnd(context: ParseContext, index: number) {
  return index >= context.source.length;
}
