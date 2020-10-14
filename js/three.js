import * as THREE from '../node_modules/three/build/three.module.js';
import {OBJLoader2} from '../node_modules/three/examples/jsm/loaders/OBJLoader2.js';
import {MTLLoader} from '../node_modules/three/examples/jsm/loaders/MTLLoader.js';
import {MtlObjBridge} from '../node_modules/three/examples/jsm/loaders/obj2/bridge/MtlObjBridge.js';
function main() {
    const canvas = document.querySelector('#canvas01');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 50;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 0);
    camera.lookAt(new THREE.Vector3(0,0,0));
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    {
        const planeSize = 40;

        const loader = new THREE.TextureLoader();
        const texture = loader.load('../img/background.png');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        const repeats = planeSize / 2;
        texture.repeat.set(repeats, repeats);

        const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
        const planeMat = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(planeGeo, planeMat);
        mesh.rotation.x = Math.PI * -.5;
        scene.add(mesh);
    }

    {
        const skyColor = 0xB1E1FF;  // light blue
        const groundColor = 0xB97A20;  // brownish orange
        const intensity = 1;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        scene.add(light);
    }

    {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 10, 0);
        light.target.position.set(-5, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }

    {
        const mtlLoader = new MTLLoader();
        mtlLoader.load('../models/dice.mtl', (mtlParseResult) => {
        const dice1 = new OBJLoader2();
        const dice2 = new OBJLoader2();
        const dice3 = new OBJLoader2();
        const dice4 = new OBJLoader2();
        const dice5 = new OBJLoader2();
        const dice6 = new OBJLoader2();
        const materials =  MtlObjBridge.addMaterialsFromMtlLoader(mtlParseResult);
        dice1.addMaterials(materials);  
        dice1.load('../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 1
            root.position.x = -4
            root.position.z = -2
        });
        dice2.addMaterials(materials);  
        dice2.load('../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 1
            root.position.x = 0
            root.position.z = -2
        });
        dice3.addMaterials(materials);  
        dice3.load('../models/dice.obj', (root) => {
        scene.add(root);
            root.position.y = 1
            root.position.x = 4
            root.position.z = -2
        });
        dice4.addMaterials(materials);  
        dice4.load('../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 1
            root.position.x = -4
            root.position.z = 2
        });
        dice5.addMaterials(materials);  
        dice5.load('../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 1
            root.position.x = 0
            root.position.z = 2
        });
        dice6.addMaterials(materials);  
        dice6.load('../models/dice.obj', (root) => {
            scene.add(root);
            root.position.y = 1
            root.position.x = 4
            root.position.z = 2
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
}

main();