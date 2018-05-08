import {createClouds} from './cloud'
import {createSphere} from './sphere'
// import {createStar} from './star'
import {creatController} from './controlBall'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  Vector2,
  Raycaster,
  SpriteMaterial,
  Sprite,
  Points,
  SphereGeometry
} from 'three'

import * as three from  'three'
console.log(three)


var spriteMaterial = new SpriteMaterial( { color: 0xffffff, fog: true } );
console.log(spriteMaterial)


export default class Earth {
  constructor (el, opts) {
    this.container = typeof el === 'string' ? document.getElementById(el) : el
    this.clouds = createClouds()
    this.sphere = createSphere()
    // this.star = createStar()
    this.controller = null
    this.scene = null
    this.camera = null
    this.render = null
    this.width = this.container.clientWidth
    this.height = this.container.offsetHeight
    this._init()
  }
  _init () {
    this._createPoints()
    this._createScence()
    this._createCamera()
    this._createRender()
    this._creatLight()
    this._creatController()
    this._render()
    this._bindMouseEvent()
  }
  _creatController () {
    this.controller = creatController(this.camera, this.container)
    let controller = this.controller
    controller.enablePan = false
    controller.zoomSpeed = 0.2
    controller.rotateSpeed = 0.6
    controller.minDistance = 1.5
    controller.maxDistance = 2.5
  }
  _createScence () {
    this.scene = new Scene()
    // this.scene.add(this.star)
    this.scene.add(this.sphere)
    this.scene.add(this.clouds)
    this.scene.add(this.point)
  }
  _createPoints () {
    let geometry = new SphereGeometry( 5, 32, 32 )
    this.point = new Points(geometry)
    // console.log(intersect[ 0 ].point)
    this.point.position.copy( {
      x: -0.05113675741487386,
      y: 0.23462747519765664,
      z: 0.4375744039151323
    } );
    // var particle = new Sprite(spriteMaterial);
    // console.log(particle)
    // particle.position.copy( intersect[ 0 ].point );
    // particle.scale.x = particle.scale.y = 0.1;
    
  }

  _createCamera () {
    this.camera = new PerspectiveCamera(45, this.width / this.height, 0.01, 1000)
    this.camera.position.z = 2.5
    this.scene.add(this.camera)
  }
  _createRender () {
    this.render = new WebGLRenderer({
      // 透明
      alpha: true,
      antialias: true
    })
    this.render.setSize(this.width, this.height)
    this.container.appendChild(this.render.domElement)
  }
  _creatLight () {
    let ambientLight = new AmbientLight(0x333333)
    let directionalLight = new DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 0, 10)
    this.scene.add(ambientLight)
    this.scene.add(directionalLight)
  }
  _render () {
    requestAnimationFrame(this._render.bind(this))
    this.sphere.rotation.y += 0.001
    this.clouds.rotation.y += 0.0015
    this.point.rotation.y += 0.001
    this.render.render(this.scene, this.camera)
  }
  _bindMouseEvent () {
    let mouse = new Vector2();
    let raycaster = new Raycaster();
    let renderOffset = this.render.domElement.getBoundingClientRect();

    this.container.addEventListener('mousedown', (e) => {
      mouse.x = ( (e.clientX - renderOffset.x) / this.render.domElement.clientWidth ) * 2 - 1;
      mouse.y = -(( (e.clientY - renderOffset.y) / this.render.domElement.clientHeight ) * 2 - 1);

      raycaster.setFromCamera( mouse, this.camera );
      let intersect = raycaster.intersectObject(this.sphere);
      

    })
  }
}


