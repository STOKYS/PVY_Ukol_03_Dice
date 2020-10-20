import * as THREE from '../node_modules/three/build/three.module.js';
import {
    OBJLoader2
} from '../node_modules/three/examples/jsm/loaders/OBJLoader2.js';
import {
    MTLLoader
} from '../node_modules/three/examples/jsm/loaders/MTLLoader.js';
import {
    MtlObjBridge
} from '../node_modules/three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';

const canvas = document.querySelector('#canvas01');
const renderer = new THREE.WebGLRenderer({
    canvas
});

const fov = 50;
const aspect = 1;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 5, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

{
    const skyColor = 0xFFFFFF;
    const groundColor = 0xCCCCCC;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
}

{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 0, 0);
    light.target.position.set(0, 0, 0);
    scene.add(light);
    scene.add(light.target);
}

{
    const mtlLoader = new MTLLoader();
    mtlLoader.load('/../../models/dice.mtl', (mtlParseResult) => {
        let times = 0;
        let interval = null;
        const dice = new OBJLoader2();
        const materials = MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
        dice.addMaterials(materials);
        dice.load('/../../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 0
            root.position.x = 0
            root.position.z = 0

            let game = 0

            let xInterval = null
            let yInterval = null

            let arrX = []
            let arrRotX = [180, 90, 270, 90, 90, 0]
            let arrRotY = [0, 90, 0, 0, 270, 0]

            let quantity = 0;
            let all = 0;
            let average = 0;

            let slider = document.getElementById("speed");
            let output = document.getElementById("demo");
            let speed = 0.01

            slider.oninput = function () {
                speed = (this.value) / 1000
                output.innerText = speed + " rads   (" + (speed * 180 / Math.PI).toFixed(3) + "°) per 2 miliseconds";
            }

            document.getElementById("roll_option02").addEventListener("click", function () {
                document.getElementById("roll_option02").disabled = true
                document.getElementById("roll_option01").disabled = false
                document.getElementById("form_box").style.display = "none"
                root.rotation.x = 0
                root.rotation.y = 0
                game = 1
            })

            document.getElementById("roll_option01").addEventListener("click", function () {
                document.getElementById("roll_option01").disabled = true
                document.getElementById("roll_option02").disabled = false
                document.getElementById("form_box").style.display = "block"
                root.rotation.x = 0
                root.rotation.y = 0
                game = 0
            })

            document.getElementById("roll").addEventListener("click", function () {
                if (game == 0) {
                    times++
                    if (times % 2 != 0) {
                        interval = setInterval(roll, 2)
                    } else {
                        clearInterval(interval)
                        calculate()
                    }
                } else {
                    clearInterval(xInterval)
                    clearInterval(yInterval)
                    getTo()
                }

            })

            function calculate() {
                let x = 0
                if (root.rotation.x >= (315 * Math.PI / 180) || root.rotation.x < (45 * Math.PI / 180)) {
                    x = 6
                } else if (root.rotation.x >= (45 * Math.PI / 180) && root.rotation.x < (135 * Math.PI / 180)) {
                    if (root.rotation.y >= (315 * Math.PI / 180) || root.rotation.y < (45 * Math.PI / 180)) {
                        x = 4
                    } else if (root.rotation.y >= (45 * Math.PI / 180) && root.rotation.y < (135 * Math.PI / 180)) {
                        x = 2
                    } else if (root.rotation.y >= (135 * Math.PI / 180) && root.rotation.y < (225 * Math.PI / 180)) {
                        x = 3
                    } else if (root.rotation.y >= (225 * Math.PI / 180) && root.rotation.y < (315 * Math.PI / 180)) {
                        x = 5
                    }
                } else if (root.rotation.x >= (135 * Math.PI / 180) && root.rotation.x < (225 * Math.PI / 180)) {
                    x = 1
                } else if (root.rotation.x >= (225 * Math.PI / 180) && root.rotation.x < (315 * Math.PI / 180)) {
                    if (root.rotation.y >= (315 * Math.PI / 180) || root.rotation.y < (45 * Math.PI / 180)) {
                        x = 3
                    } else if (root.rotation.y >= (45 * Math.PI / 180) && root.rotation.y < (135 * Math.PI / 180)) {
                        x = 5
                    } else if (root.rotation.y >= (135 * Math.PI / 180) && root.rotation.y < (225 * Math.PI / 180)) {
                        x = 4
                    } else if (root.rotation.y >= (225 * Math.PI / 180) && root.rotation.y < (315 * Math.PI / 180)) {
                        x = 2
                    }
                }
                document.getElementById("output").innerText = x
                arrX.push(x)
                if (arrX.length > 25) {
                    arrX.splice(0, 1)
                    arrX[0] = "..."
                }
                all += x
                quantity++
                average = (all / quantity)
                document.getElementById("average").innerText = average.toFixed(2)
                document.getElementById("old").innerText = arrX
            }

            function roll() {
                let random = (Math.floor(Math.random() * 4) + 1);
                if (random % 4 == 0) {
                    root.rotation.y += speed
                } else {
                    root.rotation.x += speed
                }
                if (root.rotation.x >= 2 * Math.PI) {
                    root.rotation.x = 0
                }
                if (root.rotation.y >= 2 * Math.PI) {
                    root.rotation.y = 0
                }
            }

            function getTo() {
                let random = (Math.floor(Math.random() * 6) + 1)
                document.getElementById("output").innerText = random
                arrX.push(random)
                if (arrX.length > 25) {
                    arrX.splice(0, 1)
                    arrX[0] = "..."
                }
                all += random
                quantity++
                average = (all / quantity)
                document.getElementById("average").innerText = average.toFixed(2)
                document.getElementById("old").innerText = arrX
                let targetX = ((arrRotX[random - 1]) * Math.PI / 180);
                let targetY = ((arrRotY[random - 1]) * Math.PI / 180);
                if (targetX != root.rotation.x) {
                    if (targetX > root.rotation.x) {
                        xInterval = setInterval(function () {
                            fixX(targetX, 1)
                        }, 20)
                    } else {
                        xInterval = setInterval(function () {
                            fixX(targetX, -1)
                        }, 20)
                    }
                }
                if (targetY != root.rotation.y) {
                    if (targetY > root.rotation.y) {
                        yInterval = setInterval(function () {
                            fixY(targetY, 1)
                        }, 20)
                    } else {
                        yInterval = setInterval(function () {
                            fixY(targetY, -1)
                        }, 20)
                    }
                }
            }

            function fixX(target, num) {
                if ((root.rotation.x <= (target + 0.025)) && (root.rotation.x >= (target - 0.025))) {
                    clearInterval(xInterval)
                } else {
                    if (root.rotation.x > 2 * Math.PI) {
                        root.rotation.x = 0
                    } else if (root.rotation.x < 0) {
                        root.rotation.x = 2 * Math.PI
                    }
                    root.rotation.x += (0.025 * num)
                }

            }

            function fixY(target, num) {
                if ((root.rotation.y <= (target + 0.025)) && (root.rotation.y >= (target - 0.025))) {
                    clearInterval(yInterval)
                } else {
                    if (root.rotation.y > 2 * Math.PI) {
                        root.rotation.y = 0
                    } else if (root.rotation.y < 0) {
                        root.rotation.y = 2 * Math.PI
                    }
                    root.rotation.y += (0.025 * num)
                }
            }
        });
    });

}


function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

function render() {

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

requestAnimationFrame(render);