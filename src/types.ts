import { TokenType } from './constant';

export interface ParseContext {
  source: string;
  index: number;
}

export interface Token {
  type: TokenType;
  value?: string | number;
}
