import { map , pipe, prop} from 'ramda';
export const adaptFeaturedContent = map(
  content => pipe(
    prop('contents'),
    map(featuredContent => featuredContent.fields),
  )(content.fields)
);

