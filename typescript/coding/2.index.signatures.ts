/**
 * from
 * https://typehero.dev/challenge/index-signatures
 */

type GroceryList = {
  [props: string]: number;
};

type InappropriateActionBySituation = {
  [props: string]: string[];
};

type CharactersById = {
  [props: number]: Record<string, any>;
};
