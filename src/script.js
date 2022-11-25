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
document.getElementById("perth").addEventListener("click", perth, false);
document.getElementById("marrakech").addEventListener("click", marakech, false);
document.getElementById("newYork").addEventListener("click", newYork, false);
document.getElementById("rio").addEventListener("click", rio, false);
const dot = document.getElementsByClassName("dot")


function paris() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.out'
            }

        )
        .to(camera.position, {
                x: 2.198711992207561,
                y: 2.5309250398609526,
                z: -0.09708496144180537,
                duration: 1.5,
                ease: 'sine.out',
            }

        )

    const parisDiv = document.getElementsByClassName("parisDiv")


    gsap.to(parisDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',
        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,
    })



}



function pekin() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.ot'
            }

        )
        .to(camera.position, {
                x: -0.9985264262093656,
                y: 1.880411024301063,
                z: -1.9329508821241765,
                duration: 1.5,
                duration: 1.5,
                ease: 'sine.out'
            }

        )
    const pekinDiv = document.getElementsByClassName("pekinDiv")


    gsap.to(pekinDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',

        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,
    })


}

function newYork() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.ot'
            }

        ).to(camera.position, {
                x: 0.5085394127015427,
                y: 1.6707533115916855,
                z: 1.8207113632967111,
                duration: 1.5,
                ease: 'sine.out'
            }

        )
    const newYorkDiv = document.getElementsByClassName("newYorkDiv")


    gsap.to(newYorkDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',
        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,



    })

}

function perth() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.ot'
            }

        ).to(camera.position, {
            x: -0.916295041826343,
            y: -1.2540765000710614,
            z: -1.9147821474383242,
            duration: 1.5,
            ease: 'sine.out'
        })
        .to(ambientLight.position, {
            x: -0.916295041826343,
            y: -1.2540765000710614,
            z: -1.9147821474383242,
            duration: 1.5,
            ease: 'sine.out'
        })
    const perthDiv = document.getElementsByClassName("perthDiv")


    gsap.to(perthDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',
        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,



    })


}

function marakech() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.ot'
            }

        ).to(camera.position, {
            x: 2.1474317791605753,
            y: 1.3809723537339964,
            z: 0.26353936491437174,
            duration: 1.5,
            ease: 'sine.out'
        })
    const maraDiv = document.getElementsByClassName("maraDiv")


    gsap.to(maraDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',
        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,



    })


}

function rio() {
    const camPos = camera.position.x
    gsap.timeline()
        .to(camera.position, {
                x: camPos + 4,
                duration: 1.5,
                ease: 'sine.ot'
            }

        ).to(camera.position, {
            x: 1.8537427679803309,
            y: -1.0000599261138936,
            z: 1.6921121926180542,
            duration: 1.5,
            ease: 'sine.out'
        })
    const rioDiv = document.getElementsByClassName("rioDiv")


    gsap.to(rioDiv, {
            x: "0",
            duration: 4,
            ease: 'sine.out',

        }

    )
    gsap.to(dot, {
        opacity: 1,
        delay: 3,



    })

}




const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {

    gsap.to(loaderContainer, {
        opacity: 0,
        display: "none"
    })
    gsap.to(camera.position, {
            x: 4.413627918071142,
            y: 2.368210056971596,
            z: 0.6861464791526538,
            duration: 2,
            ease: 'power4.out',
        }

    )
});

// Scene
const scene = new THREE.Scene()
const fog = new THREE.Fog('#12161F', 1, 10)
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

// scene.add(planet)


///// Lights //////



// const gui = new dat.GUI()
// gui.add(planet.position, 'x').min(0).max(1).step(0.001)
// gui.add(planet.position, 'y').min(0).max(10).step(0.001)
// gui.add(planet.position, 'z').min(0).max(10).step(0.001)

// Directional light



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
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
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


// Ambient light
const ambientLight = new THREE.AmbientLight('#FFF1E5', 0.8)
scene.add(ambientLight)

const moonLight = new THREE.DirectionalLight('#FFF1E5', 0.8)
moonLight.position.set(4, 0, 3.9)

camera.add(moonLight)

camera.position.x = 19.534899115961615
camera.position.y = 10.48179489422567
camera.position.z = 3.0369104258040345






scene.add(camera)

/////  Cursor  //////

//cursor 
let curState = 0
document.getElementById("canvas").style.cursor = "pointer"

window.addEventListener('mousedown', (event) => {
    curState = event.buttons
    document.getElementById("canvas").style.cursor = "grab"
    const mp = document.getElementsByClassName("desc")
    const dot = document.getElementsByClassName("dot")
    gsap.to(dot, {
        opacity: 0
    })

    // gsap.to(mp, {
    //     x: "100vw",
    //     duration: 1.5,
    //     ease: 'sine.out'
    // })


})



window.addEventListener('mouseup', (event) => {
    curState = event.buttons
    document.getElementById("canvas").style.cursor = "pointer"


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
controls.enableDamping = true
controls.enableZoom = true


///// Renderer //////

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})




renderer.setClearColor('#12161F')
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.lookAt(planet)
    ///// Animate //////

const clock = new THREE.Clock()
const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    controls.update()


    console.log(camera.position)

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()