function checkRecord(s: string): boolean {
  return (s.match(/A/g) ?? []).length < 2 && !/LLL/.test(s);
}

console.log(checkRecord("PPALLLL"));
