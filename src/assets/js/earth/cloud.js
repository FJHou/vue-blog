import {Mesh, SphereGeometry, MeshPhongMaterial, TextureLoader} from 'three'
import * as types from '../util.js'
import {IMG_URLS} from '../constant'

const loader = new TextureLoader()

export function createClouds (radius, segments) {
  return new Mesh(
    new SphereGeometry(types.radius + 0.02, types.segments, types.segments),
    new MeshPhongMaterial({
      map: loader.load(IMG_URLS.clouds),
      transparent: true
    })
  )
}
