/**
 * Compute `Limit`th element of fibonacci series by summing last 2 sub-arrays
 */
export type Compute2<
  N extends number,
  Sequence extends number[][] = [[0], [0]],
> = Sequence["length"] extends N
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
    ? Compute2<N, [...Sequence, [...A, ...B]]>
    : never;

type Fibonacci<N extends number> = N extends 0
  ? 0
  : N extends 1
    ? 1
    : // Minimum of 2 values required to compute all other fib values
      Compute2<N>;

// 4181
type fib = Fibonacci<19>;

export type Compute3<
  N extends number,
  Sequence extends number[][] = [[0], [0], [0, 0]],
> = Sequence["length"] extends N
  ? // When number of elements in `Sequence` reaches `N`,
    // result has been calculated as the length of the last element
    Sequence extends [...any, infer Last extends any[]]
    ? Last["length"]
    : 0
  : // When number of elements in `Sequence` not reached,
    // continue calculating result by joining elements of
    // last 3 sub-arrays and recursively call `Compute`
    //
    // NOTE: trib series is calculated entirely by summing
    // number of elements of last 3 sub-arrays as the newest
    // latest value in the sequence
    Sequence extends [
        ...any,
        infer A extends any[],
        infer B extends any[],
        infer C extends any[],
      ]
    ? Compute3<N, [...Sequence, [...A, ...B, ...C]]>
    : never;

type Tribonacci<N extends number> = N extends 0
  ? 0
  : N extends 1
    ? 1
    : N extends 2
      ? 1
      : // Minimum of 3 values required to compute all other fib values
        Compute3<N>;

// 3136
type trib = Tribonacci<15>;
