import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const handleSuccess = async (gltf: GLTF) => {
          let character = gltf.scene;
          (window as any).__character__ = character;
          await renderer.compileAsync(character, camera, scene);
          character.traverse((child: any) => {
            if (child.isMesh) {
              const mesh = child as THREE.Mesh;
              child.castShadow = true;
              child.receiveShadow = true;
              mesh.frustumCulled = true;
            }
          });

          // Setup Legion logo on the back of the monitor
          const monitor =
            character.getObjectByName("Plane.004") ||
            character.getObjectByName("Plane004");
          if (monitor) {
            const textureLoader = new THREE.TextureLoader();
            const legionTexture = textureLoader.load("/images/legion_logo.png");
            legionTexture.colorSpace = THREE.SRGBColorSpace;

            const logoWidth = 1.35;
            const logoHeight = logoWidth / 2.79;
            const logoGeo = new THREE.PlaneGeometry(logoWidth, logoHeight);
            const logoMat = new THREE.MeshBasicMaterial({
              map: legionTexture,
              transparent: true,
              opacity: 0.95,
              side: THREE.DoubleSide,
              depthTest: true,
            });
            const logoMesh = new THREE.Mesh(logoGeo, logoMat);
            logoMesh.name = "legionLogo";
            // Position on the back casing of the monitor (centered horizontally and sized like a real logo)
            logoMesh.position.set(-0.92, 2.7, 0.45);
            monitor.add(logoMesh);
          }

          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();
          ScrollTrigger.refresh();

          const footR =
            character.getObjectByName("footR") ||
            character.getObjectByName("foot.R");
          if (footR) footR.position.y = 3.36;

          const footL =
            character.getObjectByName("footL") ||
            character.getObjectByName("foot.L");
          if (footL) footL.position.y = 3.36;

          dracoLoader.dispose();
        };

        // Try direct GLB first
        loader.load(
          "/models/character.glb",
          handleSuccess,
          undefined,
          async () => {
            // Fallback to encrypted file
            try {
              const encryptedBlob = await decryptFile(
                "/models/character.enc",
                "MyCharacter12"
              );
              const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
              loader.load(blobUrl, handleSuccess, undefined, (error) => {
                console.error("Error loading GLTF model:", error);
                reject(error);
              });
            } catch (err) {
              console.error("Decryption error:", err);
              reject(err);
            }
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
