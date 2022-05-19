import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/FBXLoader.js';
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/postprocessing/EffectComposer.js';

let scene, camera, renderer, cube, controls,forest,masa_scaun1,fbxLoader,sun,mixer,mixer2,mixer3,magic,mixer4,mixer5,person;
let clock = new THREE.Clock();
let clock2 = new THREE.Clock();
let clock3 = new THREE.Clock();
let clock4 = new THREE.Clock();
let clock5 = new THREE.Clock();

function init() {
    // Crearea unei scene
    scene = new THREE.Scene();
    forest = new THREE.Group();
    person = new THREE.Group();
    const loader = new GLTFLoader();
    scene.background = new THREE.Color(0xc8e0c8);
    const fbxLoader = new FBXLoader()
    var time = 0;
    // // Crearea unei camere
    // camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // scene = new THREE.Scene();

    //Camera init
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 10);
    scene.add(camera);

    // Crearea unui renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);

    // Randarea render-ului in documentul HTML
    document.body.appendChild(renderer.domElement);

    //Crearea unei variabile OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);

    const light = createLights();
//
//     masa_scaun1=masa_scaun.clone()
    //masa_scaun1.position.set(5,0,0)
    scene.add(light);
    // scene.add(masa_scaun)
    scene.add(forest);
    scene.add(person);

    for (let i = 0; i < 20; i++) {
        loader.load('models/pine_tree/scene.gltf', function (gltf) {
            gltf.scene.scale.set(0.01, 0.015, 0.01);

            const x = Math.floor(Math.random() * (4 - -4) + -4);
            const z = Math.floor(Math.random() * (4 - -4) + -4);
            gltf.scene.position.set(x,0,z);
            forest.add(gltf.scene);


        }, undefined, function (error) {
            console.error(error);
        });
    }
    loader.load('models/ground_decimated_3d_scan/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.006, 0.006, 0.006);


        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/bush/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.005, 0.005, 0.005);
        gltf.scene.position.set(0.5, -0.1, -5);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/lake_scene/scene.gltf', function (gltf) {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(6.5, -0.95, 0);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/hand_painted_lotus_plant/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.8, 0.8, 0.8);
        gltf.scene.position.set(5, 0.2, 2);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/victorian_row_boat/scene.gltf', function (gltf) {
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(6.5, 0.4, 1);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/forest_hut/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.6, 0.6, 0.6);
        gltf.scene.position.set(-7, 0, -5);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/unicorn/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.25, 0.25, 0.25);
        gltf.scene.position.set(-4.5, 0, 0);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/crystal_deer/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.15, 0.15, 0.15);
        gltf.scene.position.set(-6, 1, -1);

        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/unicorn_rabbit/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        gltf.scene.position.set(-9, 0.2, -1);
        gltf.scene.rotation.set(0,-20,0);
        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });

    loader.load('models/viking_bench/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.006, 0.006, 0.006);
        gltf.scene.position.set(-9, 0, -2.5);
        gltf.scene.rotation.set(0,-30,0);
        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });
    loader.load('models/horse_textured_low_poly/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.0025, 0.0025, 0.0025);
        gltf.scene.position.set(3, 0, -6);
        gltf.scene.rotation.set(0,-30,0);
        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });
    for (let i = 0; i < 20; i++) {
    loader.load('models/flower04/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.02, 0.02, 0.02);
        const x = Math.floor(Math.random() * (4 - -9) + -9);
        const z = Math.floor(Math.random() * (7 - -3) + -3);
        gltf.scene.position.set(x, 0.1, z);
        // gltf.scene.rotation.set(0,-30,0);
        forest.add(gltf.scene);


    }, undefined, function (error) {
        console.error(error);
    });}
    const loader_ch = new FBXLoader();
    const loader_ch2 = new FBXLoader();
    const loader_ch3 = new FBXLoader();
    const loader_ch4 = new FBXLoader();
    loader_ch.load("models/Standing 2H Magic Attack 01.fbx", function (obj) {
        obj.scale.set(0.005, 0.005, 0.005);
        obj.position.set(3, 0, 5);
        obj.rotation.set(0, -(1 / 2) * Math.PI, 0);


        mixer = new THREE.AnimationMixer(obj);

        const action = mixer.clipAction(obj.animations[0]);
        action.play();
        obj.traverse(function (c) {
            if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
            }
        });
        forest.add(obj);
    });


    //loader_ch.setPath("model/Studenti/");
    loader_ch2.load("models/Pull Plant.fbx", function (obj) {
        obj.scale.set(0.008, 0.008, 0.008);
        obj.position.set(1, -0.1, -5);
        obj.rotation.set(0, -(1 / 2) * Math.PI, 0);


        mixer2 = new THREE.AnimationMixer(obj);

        const action = mixer2.clipAction(obj.animations[0]);
        action.play();
        obj.traverse(function (c) {
            if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
            }
        });

        forest.add(obj);

    });
    loader_ch3.load("models/Standing Death Right 02.fbx", function (obj) {
        obj.scale.set(0.008, 0.008, 0.008);
        obj.position.set(-3, 0, 5);
        obj.rotation.set(0, -(1 / 2) * Math.PI, 0);


        mixer3 = new THREE.AnimationMixer(obj);

        const action = mixer3.clipAction(obj.animations[0]);
        action.play();
        obj.traverse(function (c) {
            if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
            }
        });

        forest.add(obj);
    });
    //const loader_ch2 = new FBXLoader();
    //loader_ch.setPath("model/Studenti/");
    loader_ch2.load("models/Female Stop Walking.fbx", function (obj) {
        obj.scale.set(0.006, 0.006, 0.006);
        obj.position.set(4, 0 , 1);
        obj.rotation.set(0, -(1 / 2) * Math.PI, 0);


        mixer4 = new THREE.AnimationMixer(obj);

        const action = mixer4.clipAction(obj.animations[0]);
        action.play();
        obj.traverse(function (c) {
            if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
            }
        });

        forest.add(obj);
        person.add(obj);
        document.addEventListener("keydown", onDocumentKeyDown, false);
    });
    loader_ch4.load("models/Sitting And Pointing.fbx", function (obj) {
        obj.scale.set(0.0065, 0.0065, 0.0065);
        obj.position.set(-8.9, 0.12, -2);
        obj.rotation.set(0, 20, 0);


        mixer5 = new THREE.AnimationMixer(obj);

        const action = mixer5.clipAction(obj.animations[0]);
        action.play();
        obj.traverse(function (c) {
            if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
            }
        });
        forest.add(obj);
    });

    var alphaMap = new THREE.TextureLoader().load('textures/sun1.jpg');
    var material_sun1 = new THREE.MeshStandardMaterial({ map: alphaMap });

    const geometry_sun = new THREE.SphereGeometry( 15, 32, 16 );

    sun = new THREE.Mesh( geometry_sun, material_sun1 );
    sun.position.set(0,7,-6);
    sun.scale.set(0.1,0.1,0.1);

    scene.add( sun );
    var texture_magic = new THREE.TextureLoader().load('textures/magic1.jpg');
    var material_magic = new THREE.MeshStandardMaterial({ map: texture_magic });

    const geometry_magic = new THREE.SphereGeometry( 15, 32, 16 );

    magic = new THREE.Mesh( geometry_magic, material_magic );
    magic.position.set(2, 1, 5);
    magic.scale.set(0.01,0.01,0.01);

    scene.add( magic );

    alphaMap.offset.y = time*0.0015;


    //
    // camera.position.x = 50;
    // camera.position.y = 50;

    controls.update();
}

function onDocumentKeyDown(event) {

    // up
    if (event.keyCode == 37) {
        person.position.z += 1;
        // down
    } else if (event.keyCode == 39) {
        person.position.z -= 1;
        // left
    } else if (event.keyCode == 38) {
        person.position.x -= 1;
        // right
    } else if (event.keyCode == 40) {
        person.position.x += 1;
        // space
    } else if (event.keyCode == 32) {
        person.position.x = 0.0;
        person.position.z = 0.0;
    }
    animate();
};
function createLights() {
    // Crearea unei lumini directionale
    const light = new THREE.DirectionalLight('white', 6);

    // Pozitionarea luminii
    light.position.set(360, 180, 180);

    return light;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate() {
    requestAnimationFrame(animate);
    sun.rotation.x += 0.005; //viteza de rotatie
    sun.rotation.y += 0.005;
    magic.rotation.x += 0.005; //viteza de rotatie
    magic.rotation.y += 0.005;
    controls.update();

    renderer.render(scene, camera);
    if (mixer) mixer.update(clock.getDelta());
    if (mixer2) mixer2.update(clock2.getDelta());
    if (mixer3) mixer3.update(clock3.getDelta());
    if (mixer4) mixer4.update(clock4.getDelta());
    if (mixer5) mixer5.update(clock5.getDelta());
    // stats.update();
}
window.addEventListener('resize', onWindowResize, false);

init();

controls.enableKeys = true;
animate();
animate();
animate();
