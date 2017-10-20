import {Mesh, SphereGeometry, MeshBasicMaterial, TextureLoader, BackSide} from 'three'
import {radius, segments} from '../util'
import {IMG_URLS} from '../constant'

const loader = new TextureLoader()

export function createStar () {
  return new Mesh(
    new SphereGeometry(radius, segments, segments),
    new MeshBasicMaterial({
      map: loader.load(IMG_URLS.galaxy),
      side: BackSide
    })
  )
}
