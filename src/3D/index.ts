import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { init } from "./structure";

export class App {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private size: { width: number; heigth: number };
  private controls: OrbitControls;
  constructor(container: HTMLElement) {
    this.size = {
      width: container.clientWidth,
      heigth: container.clientHeight,
    };
    const { camera, scene, renderer, controls } = init(container);
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.controls = controls;
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshNormalMaterial();
    const mesh = new Mesh(geometry, material);
    const ligth = new AmbientLight();
    this.scene.add(mesh);
    this.scene.add(ligth);
    this.render();
    const animate = () => {
      requestAnimationFrame(animate);

      this.render();
    };
    this.setSize();
    animate();
  }

  private setContainerSize() {
    this.size = { width: window.innerWidth, heigth: window.innerHeight };
  }
  private setSize() {
    this.setContainerSize();
    const { heigth, width } = this.size;
    this.renderer.setSize(width, heigth);
    this.camera.aspect = width / heigth;
    this.camera.updateProjectionMatrix();
    this.render();
  }
  private listeners() {
    window.addEventListener("resize", this.setSize);
  }
  render() {
    const { camera, scene } = this;
    this.renderer.render(scene, camera);
  }
}
