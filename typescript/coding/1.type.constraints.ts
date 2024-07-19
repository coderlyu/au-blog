/**
 * from
 * https://typehero.dev/challenge/generic-type-constraints
 */
type AllowString<T extends string> = T;
type AllowNumber<T extends number> = T;

type CreateLogger<T extends (_: number) => void> = {
  log: T;
  exit: () => void;
};
