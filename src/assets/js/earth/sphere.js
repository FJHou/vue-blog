import {Mesh, SphereGeometry, MeshPhongMaterial, TextureLoader} from 'three'
import {radius, segments} from '../util'
import {IMG_URLS} from '../constant'

const loader = new TextureLoader()

export function createSphere () {
  return new Mesh(
    new SphereGeometry(radius, segments, segments),
    new MeshPhongMaterial({
      map: loader.load(IMG_URLS.earth),
      bumpMap: loader.load(IMG_URLS.earthBump),
      bumpScale: 0.005,
      specularMap: loader.load(IMG_URLS.water)
    })
  )
}
