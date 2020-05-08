import { pipe, map, propEq, filter, find, head } from "ramda";

export const artistsList = [
  "KANIKA_PETRIE",
  "ADEL_ALGAMAL",
  "ILHAM_HASSAN",
  "IRA_POPLAVSKAYA",
  // "NORA_AL_GALLAD"
];
export const aspectsList = [
  "SQAURE_1-1",
  "HORIZONTAL_2-3",
  "VERTICAL_3-4",
  "HORIZONTAL_3-4",
  "VERTICAL_2-3"
];

export const selectInitialRelatedProducts = (path, collections) =>
  pipe(
    extractPathName,
    extractedPath => filter(propEq("artist", extractedPath[2]), collections),
    map(shapeSelectedCollection),
    head
  )(path);

const extractPathName = path => path.split("/");
const shapeSelectedCollection = ({
  artist,
  products,
  id,
  description,
  cursor,
  hasNextPage
}) => ({ artist, products, id, description, cursor, hasNextPage });
const fetchArtists = collections =>
  filter(
    collection => find(artist => artist === collection.artist)(artistsList),
    collections
  );
const fetchAspects = collections =>
  filter(
    collection => find(aspect => aspect === collection.artist)(aspectsList),
    collections
  );
export const selectFilters = (path, collections) => ({
  artists: fetchArtists(collections),
  aspect_ratios: fetchAspects(collections)
});
