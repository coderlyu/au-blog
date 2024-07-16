/**
 * from
 * https://typehero.dev/challenge/keyof
 */

const casettesByArtist = {
  "Alanis Morissette": 2,
  "Mariah Carey": 8,
  Nirvana: 3,
  Oasis: 2,
  Radiohead: 3,
  "No Doubt": 3,
  "Backstreet Boys": 3,
  "Spice Girls": 2,
  "Green Day": 2,
  "Pearl Jam": 5,
  Metallica: 5,
  "Guns N' Roses": 2,
  U2: 3,
  Aerosmith: 4,
  "R.E.M.": 4,
  Blur: 3,
  "The Smashing Pumpkins": 5,
  "Britney Spears": 3,
  "Whitney Houston": 3,
};

const getCasetteCount = (artist: Artist) => {
  return casettesByArtist[artist];
};

type Artist = keyof typeof casettesByArtist;
