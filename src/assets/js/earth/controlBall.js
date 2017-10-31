import OrbitControls from 'three-orbitcontrols'

export function creatController (camera, domElement) {
  return new OrbitControls(camera, domElement)
}
