import {TextureLoader} from 'three'
import {IMG_URLS} from './constant'

const loader = new TextureLoader()

// Earth params
export const radius = 0.5
export const segments = 32
export const rotation = 6

export function getTexture (imageName) {
  /* let image = (window.loader && window.loader.resources[imageName])
    ? window.loader.resources[imageName].data
    : null
  let imageURL = IMAGE_URLS[imageName]

  if (image) {
    let isJPEG = imageURL.endsWith('.jpg') || imageURL.endsWith('.jpeg')
    let texture = new Texture()
    texture.image = image
    texture.format = isJPEG ? RGBFormat : RGBAFormat
    return texture
  } else {
    return loader.load(imageURL)
  } */

  return loader.load(IMG_URLS[imageName])
}
