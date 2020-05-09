const contentful = require('contentful')

const fetchContentfulType = async (type) => {
  
  const client = contentful.createClient({
    space: 'vw6n1yg5vr5k',
    environment: 'master', // defaults to 'master' if not set
    accessToken:process.env.contentfulToken
  })

  return await client.getEntries({
    content_type: type,
    select: 'fields',
    include: 3,
  })

}

module.exports = {
  fetchContentfulType
}