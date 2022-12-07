import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createScene = () => {
  const scene = new Scene();

  return scene;
};

export const createRenderer = (container: HTMLElement) => {
  const renderer = new WebGLRenderer({ canvas: container });
  renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2));

  return renderer;
};

export const createCamera = (container: HTMLElement) => {
  const { clientWidth, clientHeight } = container;
  const camera = new PerspectiveCamera(70, clientWidth / clientHeight, 0.1, 50);
  camera.position.z += 10;
  camera.lookAt(new Vector3());

  return camera;
};

export const createControls = (
  camera: PerspectiveCamera,
  domElement: HTMLElement
) => {
  const controls = new OrbitControls(camera, domElement);
  controls.update();

  return controls;
};

export const init = (container: HTMLElement) => {
  const scene = createScene();
  const renderer = createRenderer(container);
  const camera = createCamera(container);
  const controls = createControls(camera, renderer.domElement);
  return { scene, renderer, camera, controls };
};
