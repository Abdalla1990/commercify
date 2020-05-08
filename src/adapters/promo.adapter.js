import { adaptFeaturedContent } from './featuredContent.adapter'

const adaptVerticalPromo = ({ cta, image, title }) => 
({
  cta: {
    url: cta.fields.url,
    text: cta.fields.title
  },
  image: {
    url: image.fields.file.url,
  },
  title: title,
})

export const buildPromoProps = ({ cta, image, layout, title, verticalPromo, featuredContent }) => 
({
  cta: {
    url: cta.fields.url,
    text: cta.fields.title
  },
  image: {
    url: image.fields.file.url,
  },
  layout: layout,
  title: title,
  vertical :  verticalPromo && adaptVerticalPromo(verticalPromo.fields),
  featuredContent:  adaptFeaturedContent(featuredContent)
})
