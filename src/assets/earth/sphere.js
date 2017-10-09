import THREE from 'three'
import * in types from '../util.js'

export  function createSphere(radius, segments) {
          return new THREE.Mesh(
            new THREE.SphereGeometry(radius, segments, segments),
            new THREE.MeshPhongMaterial({
              map:         THREE.ImageUtils.loadTexture('images/earth4.jpg'),
              bumpMap:     THREE.ImageUtils.loadTexture('images/elev_bump_4k.jpg'),
              bumpScale:   0.005,
              specularMap: THREE.ImageUtils.loadTexture('images/water_4k.png'),
              // specular:    new THREE.Color('grey')
            })
          );
        }
