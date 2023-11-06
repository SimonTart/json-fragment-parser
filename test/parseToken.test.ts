import { TokenType } from '../src/constant';
import { parseTokens } from '../src/parser/parseTokens';

describe('parse complete tokens unit test', () => {
  it('parse string', () => {
    expect(
      parseTokens([
        {
          type: TokenType.String,
          value: 'nihao',
        },
      ])
    ).toEqual('nihao');
  });
  it('parse positive integer number', () => {
    expect(
      parseTokens([
        {
          type: TokenType.Number,
          value: 12,
        },
      ])
    ).toEqual(12);
  });
  it('parse object', () => {
    expect(
      parseTokens([
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
      ])
    ).toEqual({
      k1: 'v1',
      k2: 'v2',
    });
  });
  it('parse array', () => {
    expect(
      parseTokens([
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
          type: TokenType.RightBracket,
        },
      ])
    ).toEqual([1, 2]);
  });
  it('parse keywords', () => {
    expect(
      parseTokens([
        {
          type: TokenType.Boolean,
          value: true,
        },
      ])
    ).toEqual(true);

    expect(
      parseTokens([
        {
          type: TokenType.Null,
          value: null,
        },
      ])
    ).toEqual(null);
  });
});

describe('parse partial object tokens', () => {
  it('parse object when only load left brace', () => {
    expect(
      parseTokens([
        {
          type: TokenType.LeftBrace,
        },
      ])
    ).toEqual({});
  });

  it('parse object when only load key', () => {
    expect(
      parseTokens([
        {
          type: TokenType.LeftBrace,
        },
        {
          type: TokenType.String,
          value: 'k1',
        },
      ])
    ).toEqual({});
  });
  it('parse object when only load key and colon', () => {
    expect(
      parseTokens([
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
      ])
    ).toEqual({});
  });
  it('parse object when only load key and partial value', () => {
    expect(
      parseTokens([
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
      ])
    ).toEqual({ k1: 'v1' });
  });
});

describe('parse partial array tokens', () => {
  it('parse array when only load left bracket', () => {
    expect(
      parseTokens([
        {
          type: TokenType.LeftBracket,
        },
      ])
    ).toEqual([]);
  });
  it('parse array when only load left bracket and partial values', () => {
    expect(
      parseTokens([
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
      ])
    ).toEqual([1]);
  });
});
