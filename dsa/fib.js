function fibbonacci(n, mapper) {
  //console.log(mapper);
  if (mapper[n]) {
    return mapper[n];
  }
  if (n <= 1) {
    mapper[n] = n;
    return n;
  }
  let value = fibbonacci(n - 2, mapper) + fibbonacci(n - 1, mapper);
  mapper[n] = value;
  return value;
}

console.log(fibbonacci(100, {}));
