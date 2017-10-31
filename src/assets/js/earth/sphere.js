import {Mesh, SphereGeometry, MeshPhongMaterial} from 'three'
import {getTexture} from '../util'
import {radius, segments} from '../constant'

export function createSphere () {
  return new Mesh(
    new SphereGeometry(radius, segments, segments),
    new MeshPhongMaterial({
      map: getTexture('earth'),
      bumpMap: getTexture('earthBump'),
      bumpScale: 0.005,
      specularMap: getTexture('earthSpec'),
      fog: false
    })
  )
}
