const countMultiples = (limit: number) => {
  const n3 = BigInt(Math.floor((limit - 1) / 3));
  const n5 = BigInt(Math.floor((limit - 1) / 5));
  const n15 = BigInt(Math.floor((limit - 1) / 15));
  const asubn3 = 3n + (n3 - 1n) * 3n;
  const asubn5 = 5n + (n5 - 1n) * 5n;
  const asubn15 = 15n + (n15 - 1n) * 15n;
  const answer =
    (n3 * (3n + asubn3)) / 2n +
    (n5 * (5n + asubn5)) / 2n -
    (n15 * (15n + asubn15)) / 2n;
  console.log(`${answer}`);
};

countMultiples(4);
