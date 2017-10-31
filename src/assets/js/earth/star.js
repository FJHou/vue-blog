import {Mesh, SphereGeometry, MeshBasicMaterial, BackSide} from 'three'
import {radius, segments} from '../util'

export function createStar () {
  return new Mesh(
    new SphereGeometry(radius, segments, segments),
    new MeshBasicMaterial({
      color: new Color(255, 255, 255, 0),
      side: BackSide
    })
  )
}
