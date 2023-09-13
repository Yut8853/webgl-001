import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

window.addEventListener('DOMContentLoaded', () => {
    // 制御クラスのインスタンス化
    const app = new App3();
    // 初期化
    app.init();

    app.render();
}, false);

class App3 {
    //カメラ定義
    static CAMERA_PARAM : {
        fovy: number;
        aspect: number;
        near: number;
        far: number;
        x: number;
        y: number;
        z: number;
        lookAt: THREE.Vector3;
    } = {
        fovy: 60,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 10.0,
        x: 0.0,
        y: 0.0,
        z: 5.0,
        lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };

    static RENDERER_PARAM: {
        clearColor: number;
        width: number;
        height: number;
    } = {
        clearColor: 0x666666,
        width: window.innerWidth,
        height: window.innerHeight,
    }

    static DIRECTIONAL_LIGHT_PARAM: {
        color: number;
        intensity: number;
        x: number;
        y: number;
        z: number;
    } = {
        color: 0xffffff,
        intensity: 1.0,
        x: 1.0,
        y: 1.0,
        z: 1.0,
    }

    static AMBIENT_LIGHT_PARAM: {
        color: number;
        intensity: number;
    } = {
        color: 0xffffff,
        intensity: 0.2,
    }

    static MATERIAL_PARAM : {
        color: number;
    } = {
        color: 0xff00000,
    }

    renderer!: THREE.WebGLRenderer;
    scene!: THREE.Scene;
    camera!: THREE.Camera;
    geometry!: THREE.BoxGeometry;
    material!: THREE.Material;
    box!: THREE.Mesh;
    controls!: OrbitControls;
    axesHelper!: THREE.AxesHelper;
    isDown: boolean = false;
    
    constructor() {
        
        this.render = this.render.bind(this);
        this.keyListeners()
    }

    keyListeners(): void {
        window.addEventListener('keydown',(keyEvent) => {
            if(keyEvent.key === ' ') {
                this.isDown = true;
            }
        })
        window.addEventListener('keyup',(keyEvent) => {
            if(keyEvent.key === ' ') {
                this.isDown = false;
            }
        })
    }

    init(): void {
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(new THREE.Color(App3.RENDERER_PARAM.clearColor));
        this.renderer.setSize(App3.RENDERER_PARAM.width, App3.RENDERER_PARAM.height);
        const wrapper = document.querySelector('.webgl');
        if (wrapper) {
            wrapper.appendChild(this.renderer.domElement);
        }

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            App3.CAMERA_PARAM.fovy,
            App3.CAMERA_PARAM.aspect,
            App3.CAMERA_PARAM.near,
            App3.CAMERA_PARAM.far
        );
        this.camera.position.set(
            App3.CAMERA_PARAM.x,
            App3.CAMERA_PARAM.y,
            App3.CAMERA_PARAM.z
        );
        this.camera.lookAt(App3.CAMERA_PARAM.lookAt);

        const directionalLight = new THREE.DirectionalLight(
            App3.DIRECTIONAL_LIGHT_PARAM.color,
            App3.DIRECTIONAL_LIGHT_PARAM.intensity
        );
        directionalLight.position.set(
            App3.DIRECTIONAL_LIGHT_PARAM.x,
            App3.DIRECTIONAL_LIGHT_PARAM.y,
            App3.DIRECTIONAL_LIGHT_PARAM.z
        );
        this.scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(
            App3.AMBIENT_LIGHT_PARAM.color,
            App3.AMBIENT_LIGHT_PARAM.intensity
        );
        this.scene.add(ambientLight);

        this.geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
        this.material = new THREE.MeshLambertMaterial(App3.MATERIAL_PARAM);

        this.box = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.box);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        const axesHelperLength = 5.0;
        this.axesHelper = new THREE.AxesHelper(axesHelperLength);
        this.scene.add(this.axesHelper);
    }

    render(): void {
        requestAnimationFrame(() => {
            this.render();
        });

        if(this.isDown) {
            this.box.rotation.x += 0.01;
            this.box.rotation.y += 0.01;
        }

        this.controls.update();

        this.renderer.render(this.scene, this.camera);
    }
}
