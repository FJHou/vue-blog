import {Mesh, SphereGeometry, MeshPhongMaterial, TextureLoader} from 'three'
import {IMG_URLS, radius, segments} from '../constant'

const loader = new TextureLoader()

export function createClouds () {
  return new Mesh(
    new SphereGeometry(radius + 0.02, segments, segments),
    new MeshPhongMaterial({
      map: loader.load(IMG_URLS.clouds),
      transparent: true
    })
  )
}
