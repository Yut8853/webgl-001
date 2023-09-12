import * as THREE from 'three';

window.addEventListener('DOMContentLoaded', () => {
    // 制御クラスのインスタンス化
    const app = new App3();
    // 初期化
    app.init();

    app.render();
}, false);

class App3 {
    //カメラ定義
    static get CAMERA_PARAM(): {
            fovy: number,
            aspect: number,
            near: number,
            far: number,
            x: number,
            y: number,
            z: number,
            lookAt: THREE.Vector3,
        } {
        return {
            fovy: 60,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 10.0,
            x: 0.0,
            y: 0.0,
            z: 5.0,
            lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
        }
    }
    

    static get RENDERER_PARAM(): {
        clearColor: number,
        width: number,
        height: number
    } {
        return {
            clearColor: 0x666666,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    static get MATERIAL_PARAM(): {
        color: number
    } {
        return {
            color: 0x3399ff,
        };
    }

    renderer!: THREE.WebGLRenderer;
    scene!: THREE.Scene;
    camera!: THREE.Camera;
    geometry!: THREE.BoxGeometry;
    material!: THREE.Material;
    box!: THREE.Mesh;

    init() {
        
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(new THREE.Color(App3.RENDERER_PARAM.clearColor));
        this.renderer.setSize(App3.RENDERER_PARAM.width, App3.RENDERER_PARAM.height);
        const wrapper = document.querySelector('.webgl');
        wrapper.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
    }
}
