import { map , pipe, prop} from 'ramda';
const adaptImages = map(image => image.fields.file.url);
export const buildFramesProps = ({ entryName, featuredContent, textContent }) => 
({
  title: entryName,
  images: adaptImages(featuredContent),
  content: textContent,
})
const getFields = props => prop('fields', props)
export const buildFramesEditorialProps = ({title, tabs, frames, video, contents}) => ({
  title : title || '',
  video,
  tabs: map(tab => getFields(tab))(tabs)[0].tapsContent.taps || [],
  frames: map(frame => buildFramesProps(getFields(frame)))(frames) || [],
  contents: map(content => getFields(content))(contents) || [],
})