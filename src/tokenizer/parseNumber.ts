import { TokenType } from '../constant';
import { ParseContext } from '../types';
import { isEnd } from './utils';

export function parsesNegative(context: ParseContext) {
  const { index, source } = context;
  let i = index;
  let isNegative = false;
  if (source[i] === '-') {
    isNegative = true;
    i++;
  }
  context.index = i;
  return isNegative;
}

export function parseInteger(context: ParseContext) {
  const { index, source } = context;
  let integer = '';
  let i = index;
  while (!isEnd(context)) {
    if (source[i].match(/^\d$/)) {
      integer += source[i]!;
      i++;
    } else {
      break;
    }
  }
  context.index = i;
  return integer;
}

export function parseFraction(context: ParseContext) {
  const { index, source } = context;
  let fraction = '';
  let i = index;
  if (!isEnd(context) && source[i] === '.') {
    i++;
    while (!isEnd(context)) {
      if (source[i]!.match(/^\d$/)) {
        fraction += source[i]!;
        i++;
      } else {
        break;
      }
    }
  }

  context.index = i;
  return fraction;
}

export function parseExponent(context: ParseContext) {
  const { index, source } = context;
  let i = index;
  let isExponentNegative = false;
  let exponent = '';
  if (!isEnd(context) && ['e', 'E'].includes(source[i]!)) {
    i++;

    if (source[i] === '+') {
      i++;
    } else if (source[i] === '-') {
      isExponentNegative = true;
      i++;
    }

    while (!isEnd(context)) {
      if (source[i]!.match(/^\d$/)) {
        exponent += source[i]!;
        i++;
      } else {
        break;
      }
    }
  }
  context.index = i;
  return {
    isExponentNegative,
    exponent,
  };
}

export function parseNumber(context: ParseContext) {
  const isNegative = parsesNegative(context);
  const integer = parseInteger(context);
  const fraction = parseFraction(context);
  const { isExponentNegative, exponent } = parseExponent(context);
  if (!integer) {
    return;
  }
  let value = Number(
    (isNegative ? '-' : '') +
      integer +
      (fraction ? `.${fraction}` : '') +
      (exponent ? `e${isExponentNegative ? '-' : ''}${exponent}` : '')
  );
  return {
    type: TokenType.Number,
    value,
  };
}
