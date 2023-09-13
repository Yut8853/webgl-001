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
    static CAMERA_PARAM =  {
            fovy: 60,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 10.0,
            x: 0.0,
            y: 0.0,
            z: 5.0,
            lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
        }

    static RENDERER_PARAM = {
            clearColor: 0x666666,
            width: window.innerWidth,
            height: window.innerHeight,
        };


    static MATERIAL_PARAM =  {
            color: 0x3399ff,
        };

    renderer!: THREE.WebGLRenderer;
    scene!: THREE.Scene;
    camera!: THREE.Camera;
    geometry!: THREE.BoxGeometry;
    material!: THREE.Material;
    box!: THREE.Mesh;
    controls!: OrbitControls;
    axesHelper!: THREE.AxesHelper;

    constructor() {

    this.render = this.render.bind(this);
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

        this.geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
        this.material = new THREE.MeshBasicMaterial(App3.MATERIAL_PARAM);

        this.box = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.box);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        const axesHelperLength = 5.0;
        this.axesHelper = new THREE.AxesHelper(axesHelperLength);
        this.scene.add(this.axesHelper);    }

    render(): void {
        requestAnimationFrame(() => {
            this.render();
        });

        this.controls.update();

        this.box.rotation.x += 0.01;
        this.box.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
    }
}
