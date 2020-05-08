const contentful = require('contentful')

const fetchContentfulType = async (type) => {
  
  const client = contentful.createClient({
    space: 'vw6n1yg5vr5k',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '39f2b1e782d19e1d80839388bf2689fb41996d8a36e351bf502041525940ab0e'
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