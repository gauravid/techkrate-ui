import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import earthNightMapImg from "../assets/image/earth_nightmap.jpg"; // 🌍 Night Earth texture

const GlobeScene = () => {
  const mountRef = useRef(null);
  const [selectedPin, setSelectedPin] = useState(null); // For text box display

  useEffect(() => {
    const mount = mountRef.current;

    // 🌌 Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // 🖥️ Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // 🌍 Load texture
    const textureLoader = new THREE.TextureLoader();
    const nightTexture = textureLoader.load(earthNightMapImg);

    // 🪐 Earth sphere
    const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: nightTexture,
      emissiveMap: nightTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.4,
      metalness: 0.1,
      roughness: 0.9,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // 💡 Lighting
    const pointLight = new THREE.PointLight(0x88ccff, 1.2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0x223344, 0.6));

    // 📍 Add visible white marker over India
    const pinGroup = new THREE.Group();

    // 🌐 Sphere base
    const pinBaseGeometry = new THREE.SphereGeometry(0.06, 16, 16); // slightly bigger
    const pinBaseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pinBase = new THREE.Mesh(pinBaseGeometry, pinBaseMaterial);
    pinGroup.add(pinBase);

    // 🔺 Cone pointing outward
    const coneGeometry = new THREE.ConeGeometry(0.025, 0.25, 16);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.y = 0.15;
    cone.rotation.x = -Math.PI / 2; // point outward
    pinGroup.add(cone);

    // Convert lat/lon to 3D coordinates
    const lat = 28.6;
    const lon = 77.2;
    const earthRadius = 3;
    const pinHeight = 0.2; // slightly above surface
    const radius = earthRadius + pinHeight;

    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    pinGroup.position.set(x, y, z);

    // Make the pin point outward from globe
    pinGroup.lookAt(0, 0, 0);
    pinGroup.rotateX(Math.PI); // flip cone outward

    scene.add(pinGroup);

    // 🧭 Mouse drag control
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };
    const rotationSpeed = 0.005;

    const onMouseDown = (e) => {
      isDragging = true;
      mount.style.cursor = "grabbing";
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      mount.style.cursor = "grab";
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      targetRotation.y += deltaX * rotationSpeed;
      targetRotation.x += deltaY * rotationSpeed;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    mount.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // 🎯 Raycasting (click detection)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([pinGroup], true);

      if (intersects.length > 0) {
        setSelectedPin({
          name: "New Delhi, India",
          info: "Capital of India — a city blending rich heritage and modern growth.",
        });
      } else {
        setSelectedPin(null);
      }
    };

    renderer.domElement.addEventListener("click", onClick);

    // 🌀 Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += (targetRotation.y - earth.rotation.y) * 0.1;
      earth.rotation.x += (targetRotation.x - earth.rotation.x) * 0.1;
      renderer.render(scene, camera);
    };
    animate();

    // 📏 Resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // 🧹 Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("click", onClick);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, #000010, #000000)",
          cursor: "grab",
          borderRadius: "12px",
        }}
      />
      {selectedPin && (
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.9)",
            color: "#000",
            padding: "12px 16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            width: "220px",
            fontSize: "14px",
            transition: "0.3s",
          }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>{selectedPin.name}</h4>
          <p style={{ margin: 0 }}>{selectedPin.info}</p>
        </div>
      )}
    </div>
  );
};

export default GlobeScene;
