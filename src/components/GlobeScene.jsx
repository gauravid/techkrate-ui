import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const GlobeScene = () => {
  const mountRef = useRef(null);
  const [selectedPin, setSelectedPin] = useState(null);
  const [pins2D, setPins2D] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mount = mountRef.current;
    if (!mount) return;

    // 🌌 Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    
    // Adjust camera for mobile
    camera.position.z = window.innerWidth < 768 ? 5 : 4;

    // 🖥️ Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    mount.appendChild(renderer.domElement);

    // 💡 Lighting
    const pointLight = new THREE.PointLight(0x88ccff, 1.2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0x223344, 0.6));

    // 🌐 Globe setup
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const textureLoader = new THREE.TextureLoader();
    const nightTexture = textureLoader.load(
      "https://unpkg.com/three-globe/example/img/earth-night.jpg"
    );

    const earthRadius = 1.5;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: nightTexture,
      emissiveMap: nightTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.4,
      metalness: 0.1,
      roughness: 0.9,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earth);

    // 📍 Indian cities
    const indianCities = [
      { name: "New Delhi", lat: 28.6139, lon: 77.209, info: "Capital of India" },
      { name: "Mumbai", lat: 19.076, lon: 72.8777, info: "Financial capital & Bollywood hub" },
      { name: "Bangalore", lat: 12.9716, lon: 77.5946, info: "IT capital of India" },
      { name: "Chennai", lat: 13.0827, lon: 80.2707, info: "Gateway to South India" },
      { name: "Pune", lat: 18.5204, lon: 73.8567, info: "Oxford of the East" },
      { name: "Jaipur", lat: 26.9124, lon: 75.7873, info: "Pink City & royal heritage" },
      { name: "Surat", lat: 21.1702, lon: 72.8311, info: "Diamond city of India" },
    ];

    const latLonToVector3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const cityPositions = indianCities.map(city => ({
      ...city,
      position3D: latLonToVector3(city.lat, city.lon, earthRadius)
    }));

    // 🧭 Rotation controls (Mouse & Touch)
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };
    const rotationSpeed = 0.005;

    // Mouse events
    const onMouseDown = (e) => {
      isDragging = true;
      mount.style.cursor = "grabbing";
      previousPosition = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseUp = () => {
      isDragging = false;
      mount.style.cursor = "grab";
    };
    
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousPosition.x;
      const deltaY = e.clientY - previousPosition.y;
      globeGroup.rotation.y += deltaX * rotationSpeed;
      globeGroup.rotation.x += deltaY * rotationSpeed;
      previousPosition = { x: e.clientX, y: e.clientY };
    };

    // Touch events for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousPosition = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      }
    };
    
    const onTouchEnd = () => {
      isDragging = false;
    };
    
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      const deltaX = e.touches[0].clientX - previousPosition.x;
      const deltaY = e.touches[0].clientY - previousPosition.y;
      globeGroup.rotation.y += deltaX * rotationSpeed;
      globeGroup.rotation.x += deltaY * rotationSpeed;
      previousPosition = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
    };

    // Add event listeners
    mount.addEventListener("mousedown", onMouseDown);
    mount.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    // 🌀 Animate
    const animate = () => {
      requestAnimationFrame(animate);
      const rect = renderer.domElement.getBoundingClientRect();
      const updatedPins = cityPositions.map(city => {
        const pos = city.position3D.clone();
        pos.applyMatrix4(globeGroup.matrixWorld);

        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const pinDirection = pos.clone().normalize();
        const dotProduct = pinDirection.dot(cameraDirection.negate());

        const screenPos = pos.project(camera);
        return {
          ...city,
          x: (screenPos.x * 0.5 + 0.5) * rect.width,
          y: (-(screenPos.y * 0.5) + 0.5) * rect.height,
          visible: dotProduct > 0 && screenPos.z < 1,
        };
      });

      setPins2D(updatedPins);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      // Adjust camera zoom on resize
      camera.position.z = window.innerWidth < 768 ? 5 : 4;
      checkMobile();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", checkMobile);
      mount.removeEventListener("mousedown", onMouseDown);
      mount.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  // Calculate info box position based on screen size
  const getInfoBoxStyle = () => {
    if (!selectedPin) return {};
    
    const baseStyle = {
      position: "absolute",
      pointerEvents: "auto",
      zIndex: 1000,
    };

    if (isMobile) {
      // Center at bottom on mobile
      return {
        ...baseStyle,
        left: "50%",
        bottom: "20px",
        transform: "translateX(-50%)",
      };
    } else {
      // Position near pin on desktop
      return {
        ...baseStyle,
        left: `${selectedPin.x}px`,
        top: `${selectedPin.y}px`,
        transform: "translate(20px, -150%)",
      };
    }
  };

  const getInfoBoxContentStyle = () => {
    return {
      background: "rgba(255,255,255,0.98)",
      color: "#000",
      padding: isMobile ? "16px 20px" : "20px 24px",
      borderRadius: isMobile ? "12px" : "16px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
      width: isMobile ? "calc(100vw - 40px)" : "300px",
      maxWidth: isMobile ? "350px" : "300px",
      border: "1px solid rgba(0,0,0,0.1)",
      animation: isMobile ? "slideUp 0.4s ease forwards" : "slideIn 0.4s ease forwards",
    };
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
          background: "black",
          cursor: "grab",
          touchAction: "none", // Prevent default touch behavior
        }}
      />

      {/* 📍 Pins */}
      {pins2D.map(
        (pin, i) =>
          pin.visible && (
            <div
              key={i}
              onClick={() => setSelectedPin(pin)}
              style={{
                position: "absolute",
                left: `${pin.x}px`,
                top: `${pin.y}px`,
                transform: "translate(-50%, -100%)",
                cursor: "pointer",
                zIndex: 100,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -100%) scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(-50%, -100%) scale(1)";
              }}
            >
              <svg 
                width={isMobile ? "14" : "16"} 
                height={isMobile ? "21" : "24"} 
                viewBox="0 0 24 36"
              >
                <path
                  d="M12 0C7.6 0 4 3.6 4 8c0 5.4 8 20 8 20s8-14.6 8-20c0-4.4-3.6-8-8-8z"
                  fill="black"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          )
      )}

      {/* 🪄 Info box with responsive positioning */}
      {selectedPin && (
        <div className="info-box" style={getInfoBoxStyle()}>
          <div style={getInfoBoxContentStyle()}>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "start" 
            }}>
              <h3 style={{ 
                margin: "0 0 8px 0", 
                fontSize: isMobile ? "18px" : "20px", 
                fontWeight: "600" 
              }}>
                📍 {selectedPin.name}
              </h3>
              <button
                onClick={() => setSelectedPin(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: isMobile ? "28px" : "22px",
                  cursor: "pointer",
                  color: "#777",
                  padding: "0",
                  width: isMobile ? "32px" : "auto",
                  height: isMobile ? "32px" : "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>
            </div>
            <p style={{ 
              margin: 0, 
              color: "#333", 
              lineHeight: "1.6", 
              fontSize: isMobile ? "14px" : "15px" 
            }}>
              {selectedPin.info}
            </p>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translate(60px, -150%);
            }
            to {
              opacity: 1;
              transform: translate(20px, -150%);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }

          /* Prevent text selection during drag */
          .info-box {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }

          /* Smooth scrolling for mobile */
          @media (max-width: 768px) {
            body {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GlobeScene;