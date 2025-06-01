/**
 * Compute `Limit`th element of fibonacci series by summing last 2 sub-arrays
 */
export type Compute<
  Limit extends number,
  Sequence extends number[][] = [[0], [0]],
> = Sequence["length"] extends Limit
  ? // When number of elements in `Sequence` reaches `Limit`,
    // result has been calculated as the length of the last element
    Sequence extends [...any, infer Last extends any[]]
    ? Last["length"]
    : 0
  : // When number of elements in `Sequence` not reached,
    // continue calculating result by joining elements of
    // last 2 sub-arrays and recursively call `Compute`
    //
    // NOTE: fib series is calculated entirely by summing
    // number of elements of last 2 sub-arrays as the newest
    // latest value in the sequence
    Sequence extends [...any, infer A extends any[], infer B extends any[]]
    ? Compute<Limit, [...Sequence, [...A, ...B]]>
    : never;

type Fibonacci<N extends number> = N extends 0
  ? 0
  : N extends 1
    ? 1
    : // Minimum of 2 values required to compute all other fib values
      Compute<N>;

type res = Fibonacci<19>;

