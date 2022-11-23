import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import gsap from 'gsap'
import * as dat from 'lil-gui'
import { Sphere } from 'three';



///// Start //////

// PanelDebug


// Canvas
const canvas = document.querySelector('canvas.webgl')
document.getElementById("paris").addEventListener("click", paris, false);
document.getElementById("pekin").addEventListener("click", pekin, false);
document.getElementById("newYork").addEventListener("click", newYork, false);
document.getElementById("kinshasa").addEventListener("click", kinshasa, false);
document.getElementById("rio").addEventListener("click", rio, false);


function paris() {
    gsap.to(camera.position, {
            x: 3.1496078106084195,
            y: 3.9518930904675025,
            z: -0.1477813068976283,
            duration: 4,
            ease: 'expo.out',
        }

    )

}

function pekin() {
    gsap.to(camera.position, {
            x: -1.625519755066334,
            y: 3.494105846333278,
            z: -3.2723440734800957,
            duration: 4,
            ease: 'expo.out'
        }

    )

}

function newYork() {
    gsap.to(camera.position, {
            x: 0.7975414363543777,
            y: 2.8230231251878783,
            z: 2.7237131225957234,
            duration: 4,
            ease: 'expo.out'
        }

    )

}

function kinshasa() {
    gsap.to(camera.position, {
            x: 4.788606179184865,
            y: -0.1776550339899127,
            z: -1.4274766371366157,
            duration: 4,
            ease: 'expo.out'
        }

    )



}

function rio() {
    gsap.to(camera.position, {
            x: 3.5342348393435623,
            y: -1.4945299830661518,
            z: 3.2055519864567033,
            duration: 4,
            ease: 'expo.out'
        }

    )
}





const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    loaderContainer.style.display = 'none';
    gsap.to('load', {
        opacity: 0,
        ease: 'expo.in'
    })
});

// Scene
const scene = new THREE.Scene()
const fog = new THREE.Fog('#262837', 1, 10)
scene.fog = fog

const textureLoader = new THREE.TextureLoader()

const earthTexture = textureLoader.load('/textures/earthmap.jpg')
const earthCloundTexture = textureLoader.load('/textures/earthcloudmapthumb.jpg')
const earthCloudmapTransThumbTexture = textureLoader.load('/textures/earthcloudmaptransthumb.jpg')
const earthLightsThumbTexture = textureLoader.load('/textures/earthLightsThumb.jpg')
const earthMapThumbTexture = textureLoader.load('/textures/earthmapthumb.jpg')
const earthspecthumbTexture = textureLoader.load('/textures/earthspecthumb.jpg')



///// BoxGeometry //////

const planetGeometry = new THREE.SphereGeometry(2, 64, 64)
const planetMesh = new THREE.MeshStandardMaterial({


    map: earthTexture,
    alphaMap: earthspecthumbTexture,
    aoMap: earthMapThumbTexture,
    lightMap: earthLightsThumbTexture,
    metalnessMap: earthCloundTexture,
    roughnessMap: earthCloudmapTransThumbTexture



})
const planet = new THREE.Mesh(planetGeometry, planetMesh)

//position 

scene.add(planet)


///// Lights //////

// Ambient light
const ambientLight = new THREE.AmbientLight('#FFF1E5', 0.8)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#FFF1E5', 0.8)
moonLight.position.set(4, 5, -2)
scene.add(moonLight)

const starGeometry = new THREE.BoxGeometry(0.01, 0.01, 0.01)
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
for (let i = 0; i < 2000; i++) {
    var star = new THREE.Mesh(starGeometry, starMaterial)
    scene.add(star)

    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 6

    const z = Math.sin(angle) * radius
    const x = Math.cos(angle) * radius
    const y = Math.random() * (-20 - 20) + 20

    star.position.set(x, y, z)
    star.rotation.y = (Math.random() - 0.5) * 0.4
    star.rotation.z = (Math.random() - 0.5) * 0.4

    scene.add(star)

}


///// Sizes //////

const sizes = {
    width: window.innerWidth / 1.4,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth / 1.4
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
camera.position.x = 10.264790463695132
camera.position.y = 10.693767581694678
camera.position.z = -0.8063634522760551
gsap.to(camera.position, {
        x: 4.413627918071142,
        y: 2.368210056971596,
        z: 0.6861464791526538,
        duration: 4,
        ease: 'expo.out',
    }

)




scene.add(camera)

/////  Cursor  //////

//cursor 
let curState = 0
window.addEventListener('mousedown', (event) => {
    curState = event.buttons




})
window.addEventListener('mouseup', (event) => {
    curState = event.buttons




})


const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

///// Controls  //////
const controls = new OrbitControls(camera, canvas)




///// Renderer //////

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})




renderer.setClearColor('#000')
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.lookAt(planet)
    ///// Animate //////

const clock = new THREE.Clock()
const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    console.log(camera.position);


    // if (curState == 1) {


    //     planet.rotation.y = planet.rotation.y
    // } else {
    //     planet.rotation.y = planet.rotation.y + 0.001

    // }


    //star rotation
    planet.position.y = Math.sin(elapsedTime * 2) / 20

    console.log(camera.position);

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()