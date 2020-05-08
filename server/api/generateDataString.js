const generateDataString = (category, options) => {
  return `
    query($productsNum:Int = 14){
      shop {
        ${category}(first:15) {
          edges {
            node {
              id
              title
              description
              image {
                originalSrc
              }
              products(first:$productsNum) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    description
                    options {
                      name
                      values
                    }
                    variants(first: 12) {
                      pageInfo {
                        hasNextPage
                        hasPreviousPage
                      }
                      edges {
                        node {
                          id
                          title
                          selectedOptions {
                            name
                            value
                          }
                          image {
                            src
                          }
                          price
                          compareAtPrice
                        }
                      }
                    }
                    images(first: 250) {
                      pageInfo {
                        hasNextPage
                        hasPreviousPage
                      }
                      edges {
                        node {
                          src
                        }
                      }
                    }
                  }
                  cursor
                }
              }
            }
          }
        }
      }
    }`;
}

const generateCustomeDataString = (category, id, cursor) => {
return `
query($productsNum:Int = 20 $cursor:String = "${cursor}"){
  shop {
    ${category}ByHandle(handle: "${id}")  {
      id
      title
      description
      image {
        originalSrc
      }
      products(first:$productsNum, after:$cursor) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            options {
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                  compareAtPrice
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
          cursor
        }
      }
    }
  }
}`
}

function joinArrayObjs(ar) {
  var str = '';
  for (var i = 0, len = ar.length; i < len; i++) {
      str += "{ variantId : " + JSON.stringify(ar[i].variantId) + "quantity: " + JSON.stringify(ar[i].quantity) + "} ";
  }
  return "[" + str + "]";
}

const generateCheckoutMutationString = ids => {
  return `
  mutation {
    checkoutCreate(input: {
      lineItems: ${joinArrayObjs(ids)}
    }) {
      checkout {
        id
        webUrl
        lineItems(first: 5) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
  `
}
module.exports = {
  generateDataString,
  generateCustomeDataString,
  generateCheckoutMutationString
}