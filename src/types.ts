import { TokenType } from './constant';

export interface ParseContext {
  source: string;
  index: number;
  tokens: Token[];
}

export interface Token {
  type: TokenType;
  value?: string | number | boolean | null;
}

export type Keyword = 'true' | 'false' | 'null';
