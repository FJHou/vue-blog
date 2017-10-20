import {Mesh, SphereGeometry, MeshPhongMaterial, TextureLoader} from 'three'
import {radius, segments} from '../util.js'
import {IMG_URLS} from '../constant'

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
