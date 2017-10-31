import {TextureLoader} from 'three'
import {IMG_URLS} from './constant'

const loader = new TextureLoader()

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

export function random (min, max) {
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  if (min > max) {
    var hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}
