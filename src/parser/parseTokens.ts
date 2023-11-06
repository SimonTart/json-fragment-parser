import { Token } from '../types';
import { TokenType } from '../constant';

function parseArray(tokens: Token[]) {
  let result: any[] = [];
  while (tokens.length > 0) {
    switch (tokens[0].type) {
      case TokenType.RightBracket:
        tokens.shift();
        return result;
      case TokenType.Comma:
        tokens.shift();
        break;
      default:
        result.push(parseTokens(tokens));
        break;
    }
  }
  return result;
}

function parseObject(tokens: Token[]) {
  let result: Record<string, any> = {};
  let key: string | undefined;
  let value: any;
  while (tokens.length > 0) {
    switch (tokens[0].type) {
      case TokenType.RightBrace:
        tokens.shift();
        return result;
      case TokenType.Comma:
        tokens.shift();
        break;
      case TokenType.Colon:
        tokens.shift();
        if (tokens.length > 0) {
          value = parseTokens(tokens);
          result[key!] = value;
        }
        break;
      case TokenType.String:
        key = tokens.shift()!.value as string;
        break;
      default:
        throw new Error(`Invalid JSON String`);
    }
  }

  return result;
}
export function parseTokens(tokens: Token[]) {
  const token = tokens.shift()!;
  switch (token.type) {
    case TokenType.Boolean:
    case TokenType.Number:
    case TokenType.Null:
    case TokenType.String:
      return token.value;
    case TokenType.LeftBracket:
      return parseArray(tokens);
    case TokenType.LeftBrace:
      return parseObject(tokens);
    default:
      throw new Error(`Invalid JSON String`);
  }
  throw new Error(`Invalid JSON String`);
}
