export function isWhitespace(char: string) {
  return [' ', '\n', '\r', '\t'].includes(char);
}

function isNumberStart(char: string): boolean {
  return Boolean(char.match(/^(-|\d)$/));
}
