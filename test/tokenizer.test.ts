import { tokenize } from '../src/tokenizer/tokenize';
import { TokenType } from '../src/constant';

describe('tokenizer complete string unit test', () => {
  it('parse string', () => {
    expect(tokenize('"nihao"')).toEqual([
      {
        type: TokenType.String,
        value: 'nihao',
      },
    ]);
  });
  it('parse positive integer number', () => {
    expect(tokenize('12')).toEqual([
      {
        type: TokenType.Number,
        value: 12,
      },
    ]);
  });
  it('parse positive float number', () => {
    expect(tokenize('12.12')).toEqual([
      {
        type: TokenType.Number,
        value: 12.12,
      },
    ]);
  });
  it('parse negative integer number', () => {
    expect(tokenize('-12')).toEqual([
      {
        type: TokenType.Number,
        value: -12,
      },
    ]);
  });
  it('parse negative float number', () => {
    expect(tokenize('-12.12')).toEqual([
      {
        type: TokenType.Number,
        value: -12.12,
      },
    ]);
  });
  it('parse object', () => {
    expect(tokenize('{ "k1": "v1", "k2": "v2" }')).toEqual([
      {
        type: TokenType.LeftBrace,
      },
      {
        type: TokenType.String,
        value: 'k1',
      },
      {
        type: TokenType.Colon,
      },
      {
        type: TokenType.String,
        value: 'v1',
      },
      {
        type: TokenType.Comma,
      },
      {
        type: TokenType.String,
        value: 'k2',
      },
      {
        type: TokenType.Colon,
      },
      {
        type: TokenType.String,
        value: 'v2',
      },
      {
        type: TokenType.RightBrace,
      },
    ]);
  });
  it('parse array', () => {
    expect(tokenize('[1, 2, null]')).toEqual([
      {
        type: TokenType.LeftBracket,
      },
      {
        type: TokenType.Number,
        value: 1,
      },
      {
        type: TokenType.Comma,
      },
      {
        type: TokenType.Number,
        value: 2,
      },
      {
        type: TokenType.Comma,
      },
      {
        type: TokenType.Null,
        value: null,
      },
      {
        type: TokenType.RightBracket,
      },
    ]);
  });
  it('parse keywords', () => {
    expect(tokenize('true')).toEqual([
      {
        type: TokenType.Boolean,
        value: true,
      },
    ]);
    expect(tokenize('false')).toEqual([
      {
        type: TokenType.Boolean,
        value: false,
      },
    ]);
    expect(tokenize('null')).toEqual([
      {
        type: TokenType.Null,
        value: null,
      },
    ]);
  });
});

describe('tokenizer partial string unit test', () => {
  it('parse string', () => {
    expect(tokenize('"ni')).toEqual([
      {
        type: TokenType.String,
        value: 'ni',
      },
    ]);
  });
  it('parse positive float number', () => {
    expect(tokenize('12.')).toEqual([
      {
        type: TokenType.Number,
        value: 12,
      },
    ]);
  });
  it('parse negative integer number', () => {
    expect(tokenize('-')).toEqual([]);
  });
  it('parse negative float number', () => {
    expect(tokenize('-12.')).toEqual([
      {
        type: TokenType.Number,
        value: -12,
      },
    ]);
  });
  it('parse object', () => {
    expect(tokenize('{ "k1": "v1", "k2": "v2')).toEqual([
      {
        type: TokenType.LeftBrace,
      },
      {
        type: TokenType.String,
        value: 'k1',
      },
      {
        type: TokenType.Colon,
      },
      {
        type: TokenType.String,
        value: 'v1',
      },
      {
        type: TokenType.Comma,
      },
      {
        type: TokenType.String,
        value: 'k2',
      },
      {
        type: TokenType.Colon,
      },
      {
        type: TokenType.String,
        value: 'v2',
      },
    ]);
  });
  it('parse array', () => {
    expect(tokenize('[1, -1.')).toEqual([
      {
        type: TokenType.LeftBracket,
      },
      {
        type: TokenType.Number,
        value: 1,
      },
      {
        type: TokenType.Comma,
      },
      {
        type: TokenType.Number,
        value: -1,
      },
    ]);
  });
  it('parse keywords', () => {
    expect(tokenize('t')).toEqual([
      {
        type: TokenType.Boolean,
        value: true,
      },
    ]);
    expect(tokenize('f')).toEqual([
      {
        type: TokenType.Boolean,
        value: false,
      },
    ]);
    expect(tokenize('nu')).toEqual([
      {
        type: TokenType.Null,
        value: null,
      },
    ]);
  });
});
