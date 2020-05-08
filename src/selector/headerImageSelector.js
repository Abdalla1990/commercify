export const fetchHeaderImageSource = type => {
  return type !== undefined && type.indexOf('pdp') !== -1 ? 
  {
    src: "/kjhlkasaas.jpg"
  } : undefined

}