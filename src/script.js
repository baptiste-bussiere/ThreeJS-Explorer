import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'




///// Start //////

// PanelDebug

// const gui = new dat.GUI()
// gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const fog = new THREE.Fog('#262837', 1, 15)
scene.fog = fog


///// BoxGeometry //////

const planetGeometry = new THREE.SphereGeometry(2,32,32)
const planetMesh = new THREE.MeshStandardMaterial({color : 0xff0000, wireframe: true})
const planet = new THREE.Mesh(planetGeometry, planetMesh)


//position 

scene.add(planet)


///// Lights //////

// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, - 2)
scene.add(moonLight)

///// Sizes //////

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

///// Camera //////


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 5
scene.add(camera)

/////  Cursor  //////

//cursor 
const cursor = {
    x: 0,
    y: 0
}



window.addEventListener('mouseup', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = event.clientY / sizes.height - 0.5
        console.log(cursor.x)
    })

///// Controls  //////


// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

///// Renderer //////

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


renderer.setClearColor('#262837')
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

///// Animate //////

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Planet rotation
    planet.position.y = Math.sin(elapsedTime *2) /10
    planet.rotation.x = cursor.y
    planet.rotation.y = cursor.x
 



    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()