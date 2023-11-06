import { Keyword, ParseContext } from '../types';
import { isEnd, isIndexEnd } from './utils';
import { isWhitespace } from '../char';
import { isNumberStart, parseNumber } from './parseNumber';
import { isStringrStart, parseString } from './parseString';
import { TokenType } from '../constant';

function skipSpaces(contxt: ParseContext) {
  const { index, source } = contxt;
  let i: number;

  for (i = index; i < source.length; i++) {
    const char = source[i] as string;

    if (!isWhitespace(char)) {
      break;
    }
  }

  contxt.index = i;
}

function parseKeyword(context: ParseContext, keyword: Keyword) {
  const { source, index } = context;

  let i = 0;
  while (!isIndexEnd(context, i) && i < keyword.length) {
    if (source[index + i] !== keyword[i]) {
      throw new SyntaxError(`Failed to parse value at position: ${index}`);
    }
    if (i === keyword.length - 1) {
      break;
    } else {
      i++;
    }
  }
  let tokenType: TokenType;
  let value: boolean | null;
  switch (keyword) {
    case 'false':
    case 'true':
      tokenType = TokenType.Boolean;
      value = keyword === 'true' ? true : false;
      break;
    case 'null':
      tokenType = TokenType.Null;
      value = null;
      break;
    default:
      throw new Error(`Unknown keyword: ${keyword}`);
  }
  context.tokens.push({
    type: tokenType,
    value,
  });
  context.index = index + i;
}
export function tokenize(str: string) {
  const context: ParseContext = { index: 0, source: str, tokens: [] };
  while (!isEnd(context)) {
    if (isNumberStart(context)) {
      parseNumber(context);
    } else if (isStringrStart(context)) {
      parseString(context);
    } else {
      const char = context.source[context.index];
      if (isWhitespace(char)) {
        skipSpaces(context);
        continue;
      }
      switch (char) {
        case '[': {
          context.tokens.push({
            type: TokenType.LeftBracket,
          });
          break;
        }
        case ']': {
          context.tokens.push({
            type: TokenType.RightBracket,
          });
          break;
        }
        case '{': {
          context.tokens.push({
            type: TokenType.LeftBrace,
          });
          break;
        }
        case '}': {
          context.tokens.push({
            type: TokenType.RightBrace,
          });
          break;
        }
        case ',': {
          context.tokens.push({
            type: TokenType.Comma,
          });
          break;
        }
        case ':': {
          context.tokens.push({
            type: TokenType.Colon,
          });
          break;
        }
        case 't': {
          parseKeyword(context, 'true');
          break;
        }
        case 'f': {
          parseKeyword(context, 'false');
          break;
        }
        case 'n': {
          parseKeyword(context, 'null');
          break;
        }
        default: {
          throw new SyntaxError(
            `Unexpected character: "${char}" ` + `at position: ${context.index}`
          );
        }
      }
      context.index++;
    }
  }

  return context.tokens;
}
