import {createClouds} from './cloud'
import {createSphere} from './sphere'
import {createStar} from './star'
const THREE = require('three')

export default class Earth {
  constructor (el, opts) {
    this.container = typeof el === 'string' ? document.getElementById(el) : el
    this.clouds = createClouds()
    this.sphere = createSphere()
    this.star = createStar()
    this.scene = null
    this.camera = null
    this.render = null
    this.width = this.container.clientWidth
    this.height = this.container.offsetHeight
    this._init()
  }
  _init () {
    this._createScence()
    this._createCamera()
    this._createRender()
    this._creatLight()
    this._render()
  }
  _createScence () {
    this.scene = new THREE.Scene()
    this.scene.add(this.sphere)
    this.scene.add(this.clouds)
    console.log(this.star)
    this.scene.add(this.star)
  }
  _createCamera () {
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.01, 1000)
    this.camera.position.z = 2.5
    this.scene.add(this.camera)
  }
  _createRender () {
    this.render = new THREE.WebGLRenderer()
    this.render.setSize(this.width, this.height)
    this.container.appendChild(this.render.domElement)
  }
  _creatLight () {
    let ambientLight = new THREE.AmbientLight(0x333333)
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 0, 10)
    this.scene.add(ambientLight)
    this.scene.add(directionalLight)
  }
  _render () {
    requestAnimationFrame(this._render.bind(this))
    this.sphere.rotation.y += 0.001
    this.clouds.rotation.y += 0.003
    this.render.render(this.scene, this.camera)
  }
}
