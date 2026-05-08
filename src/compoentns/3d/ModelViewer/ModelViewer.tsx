import styles from "./ModelViewer.module.css";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
} from "three";

export interface ModelViewerPropsI {
  gltfFile: string;
}

function ModelViewer({ gltfFile }: ModelViewerPropsI) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new Scene();

    const camera = new PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight || 1,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 3);

    const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.outputColorSpace = SRGBColorSpace;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(new AmbientLight(0xffffff, 60));
    const dir = new DirectionalLight(0xffffff, 3);
    dir.position.set(5, 10, 5);
    scene.add(dir);

    const loader = new GLTFLoader();
    loader.load(
      gltfFile,
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("GLTF load error:", error);
      }
    );

    let raf = 0;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      const w = canvas.clientWidth || 1;
      const h = canvas.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      controls.dispose();
      renderer.dispose();
    };
  }, [gltfFile]);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default ModelViewer;