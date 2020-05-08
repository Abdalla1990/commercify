import { map , pipe, filter, find, propEq} from 'ramda';

const adaptFeaturedContent = map( featuredContent => featuredContent.fields);

const extractModule = map(cm => cm.cModulePage);

export const findTop5Module = modules => find(propEq('entryTitle', 'top5'))(extractModule(modules));

export const buildTop5Props = ({ title, description, featuredContent }) => {

  return ({
  title: title,
  description: description,
  featuredContent:  adaptFeaturedContent(featuredContent)
  })
}

export const fetchMatchingTitles = (featuredContent, collections) => find(
  collection => collection.artist === featuredContent.title
)(collections);

