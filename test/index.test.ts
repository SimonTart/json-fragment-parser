import { jsonParse } from '../src';

describe('parse complete JSON string', () => {
  const obj = {
    string: 'Hello, world!',
    number: 42,
    float: 3.14159,
    boolean: true,
    nullValue: null,
    nestedObject: {
      property1: 'Nested property',
      property2: 123,
    },
    array: ['apple', 42, { nestedArray: [1, 2, 3] }, null],
    specialCharacters: 'Special characters: " \n \t \\',
    emptyObject: {},
    emptyArray: [],
    largeObject: {
      property1: 'Value1',
      property2: 'Value2',
      property3: {
        nested1: 123,
        nested2: 'Nested Value',
      },
    },
    customDataType: {
      customField: 'Custom Value',
    },
  };
  it('should parse json', () => {
    expect(jsonParse(JSON.stringify(obj))).toEqual(obj);
  });
});

describe('parse complete JSON string', () => {
  it('should parse json', () => {
    expect(
      jsonParse(`
    {
    "nestedObject": {
      "property1": "Nested property",`)
    ).toEqual({
      nestedObject: {
        property1: 'Nested property',
      },
    });

    expect(
      jsonParse(`
    {
    "nestedObject": {
      "property1": "Nested property`)
    ).toEqual({
      nestedObject: {
        property1: 'Nested property',
      },
    });

    expect(
      jsonParse(`
    {
    "nestedObject": {
      "property1": "Nested property",
    },
    "array": [null, 1, "1`)
    ).toEqual({
      nestedObject: {
        property1: 'Nested property',
      },
      array: [null, 1, '1'],
    });

    expect(
      jsonParse(`
    {
    "nestedObject": {
      "property1": "Nested property",
       "array": [null, 1, "1`)
    ).toEqual({
      nestedObject: {
        property1: 'Nested property',
        array: [null, 1, '1'],
      },
    });

    expect(
      jsonParse(`
    {
           "array": [null, 1, "1", { "k1" : "v1`)
    ).toEqual({
      array: [null, 1, '1', { k1: 'v1' }],
    });
  });
});
