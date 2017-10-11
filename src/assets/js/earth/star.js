import THREE from 'three'
import {radius, segments} from '../util'

export function createStars(radius, segments) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, segments),
    new THREE.MeshBasicMaterial({
      map:  THREE.ImageUtils.loadTexture('images/3524.jpg'),
      side: THREE.BackSide
    })
  );
}
