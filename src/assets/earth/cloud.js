  import THREE from 'three'
  import * in types from '../util.js'

  export  function createClouds(radius, segments) {
            return new THREE.Mesh(
              new THREE.SphereGeometry(types.radius + 0.02, types.segments, types.segments),
              new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture('images/fair_clouds_4k.png'),
                transparent: true
              })
            );
          }
