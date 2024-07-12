/**
 * from
 * https://typehero.dev/challenge/indexed-types
 */

type Cars = ["Bugatti", "Ferarri", "Lambo", "Porsche", "Toyota Corolla"];

type Donations = {
  Bono: 15_000_000;
  "J.K. Rowling": 160_000_000;
  "Taylor Swift": 45_000_000;
  "Elton John": 600_000_000;
  "Angelina Jolie and Brad Pitt": 100_000_000;
};

type TheCoolestCarEverMade = Cars[4];
type TruckDriverBonusGiver = Donations["Taylor Swift"];
