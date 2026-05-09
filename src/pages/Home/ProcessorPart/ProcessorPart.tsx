import styles from "./ProcessorPart.module.css";
import { useRef } from "react";
import {PROCESSOR_GLTF_URL} from "../../../config/URLs.ts";
import ModelViewer from "../../../compoentns/3d/ModelViewer/ModelViewer.tsx";

function ProcessorPart() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={rootRef} className={styles.container}>
      <ModelViewer gltfFile={PROCESSOR_GLTF_URL} autoRotateEnabled={true}/>
      <span className={styles.text}>
        <span>We run on the most</span>
        <br />
        <span><b>powerful</b></span>
        <br />
        <span>processors out there.</span>
      </span>
    </div>
  );
}

export default ProcessorPart;