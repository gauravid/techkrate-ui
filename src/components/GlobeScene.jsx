import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// --- Configuration ---
const GLOBE_RADIUS = 2;
const INDIA_LAT = 20.5937;
const INDIA_LON = 78.9629;
const ZOOM_DISTANCE = 3.5; // Closer zoom for better focus

// Sample Pin Data (Lat/Lon)
const PINS_DATA = [
    { id: 1, name: 'Maharashtra', lat: 19.75, lon: 75.71, info: "Maharashtra: Financial capital and cultural hub." },
    { id: 2, name: 'Delhi', lat: 28.70, lon: 77.10, info: "Delhi: National Capital Territory of India." },
    { id: 3, name: 'Kerala', lat: 10.85, lon: 76.27, info: "Kerala: 'God's Own Country' known for its backwaters." }
];

// --- Utility Functions ---

// Convert spherical coordinates (Lat/Lon) to Cartesian (x, y, z)
const latLonToVector3 = (lat, lon, radius) => {
    const latRad = (lat * Math.PI) / 180;
    const lonRad = (lon * Math.PI) / 180;

    return new THREE.Vector3(
        radius * Math.cos(latRad) * Math.sin(lonRad),
        radius * Math.sin(latRad),
        radius * Math.cos(latRad) * Math.cos(lonRad)
    );
};

// Convert Longitude to the required Y-axis rotation (Euler)
const latLonToRotation = (lon) => {
    // Offset by -90 degrees to align the map correctly
    return -((lon + 90) * Math.PI / 180); 
};

// --- Pin Component (The visual marker on the 3D globe) ---
const Pin = ({ position, onClick, id }) => {
    return (
        <mesh position={position} onClick={onClick} castShadow>
            <sphereGeometry args={[0.05, 16, 16]} />
            {/* III. Pin Styling (White pin with Bright Blue emissive light) */}
            <meshBasicMaterial color="white" emissive="#00BFFF" /> 
        </mesh>
    );
};

// --- Main 3D Scene Component ---
const Scene = React.forwardRef(({ onPinClick, pinPositions }, ref) => {
    const { globeRef, cameraRef, controlsRef } = ref;
    const [zoomCompleted, setZoomCompleted] = useState(false);

    // III. Globe Styling (Dark Blue wireframe for thematic look)
    const material = new THREE.MeshPhongMaterial({
        color: 0x001155, // Dark Blue
        specular: 0xaaaaaa,
        shininess: 30,
        wireframe: true,
    });

    useFrame(() => {
        TWEEN.update(); // Update all active tweens

        // I. Initial State: Continuous rotation (before stop sequence starts)
        if (globeRef.current && globeRef.current.userData.isRotating) {
            globeRef.current.rotation.y += 0.002;
        }

        // Lock controls target to center
        if (controlsRef.current) {
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
        }
    });

    useEffect(() => {
        if (!globeRef.current || !cameraRef.current) return;

        // 1. Initial State: Start Continuous Rotation
        globeRef.current.userData.isRotating = true;

        // 2. Rotation Stop & Focus
        const stopAndZoom = () => {
            globeRef.current.userData.isRotating = false;

            // Target Y-rotation to center India
            const targetRotationY = latLonToRotation(INDIA_LON);

            // Smoothly stop rotation
            new TWEEN.Tween(globeRef.current.rotation)
                .to({ y: targetRotationY }, 2000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
            
            // Smoothly zoom the camera
            new TWEEN.Tween(cameraRef.current.position)
                .to({ z: ZOOM_DISTANCE }, 1500)
                .delay(500)
                .easing(TWEEN.Easing.Cubic.InOut)
                .onComplete(() => setZoomCompleted(true))
                .start();
        };

        // Trigger the stop and zoom sequence after 4 seconds
        const timer = setTimeout(stopAndZoom, 4000);

        return () => clearTimeout(timer);
    }, [cameraRef, globeRef]);

    return (
        <>
            <perspectiveCamera ref={cameraRef} position={[0, 0, 5]} fov={75} />
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            
            {/* The Globe Mesh */}
            <mesh ref={globeRef} geometry={new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64)} material={material} castShadow receiveShadow>
                {/* II. Pin Placement */}
                {pinPositions.map((pin) => (
                    <Pin key={pin.id} position={pin.position} onClick={() => onPinClick(pin.id)} id={pin.id} />
                ))}
            </mesh>

            {/* OrbitControls allows viewing the focused area, but prevents moving too far out */}
            <OrbitControls 
                ref={controlsRef}
                enableZoom={zoomCompleted} // Enable zoom only after the automatic zoom is done
                enablePan={false}
                minDistance={ZOOM_DISTANCE - 0.5}
                maxDistance={ZOOM_DISTANCE + 1.5}
            />
        </>
    );
});

// --- Main Exported Component ---
export const Globe = () => {
    const globeRef = useRef();
    const cameraRef = useRef();
    const controlsRef = useRef();
    const [activePinData, setActivePinData] = useState(null);
    const pinRefs = useRef(new Map());

    // Convert pin data to 3D positions only once
    const pinPositions = PINS_DATA.map(p => ({
        ...p,
        position: latLonToVector3(p.lat, p.lon, GLOBE_RADIUS)
    }));

    // II. Pin Action Logic
    const handlePinClick = useCallback((id) => {
        const pin = PINS_DATA.find(p => p.id === id);
        if (!pin) return;

        // II. State Tracking: Close if it's the same pin already open
        if (activePinData && activePinData.id === id) {
            setActivePinData(null);
        } else {
            // II. Pin Action: Open new popup
            setActivePinData(pin);
        }
    }, [activePinData]);

    // Use a custom hook or useEffect to update the popup position based on the 3D pin's screen coordinates
    useEffect(() => {
        if (!activePinData || !globeRef.current || !cameraRef.current) return;
        
        const pinIndex = PINS_DATA.findIndex(p => p.id === activePinData.id);
        const pin3DPosition = pinPositions[pinIndex].position.clone();

        // Project 3D world position to 2D screen coordinates
        pin3DPosition.applyMatrix4(globeRef.current.matrixWorld);
        const vector = pin3DPosition.project(cameraRef.current);

        // Convert normalized device coordinates (-1 to +1) to pixel coordinates
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;

        // Store screen position for popup rendering
        setActivePinData(prev => ({
            ...prev,
            screenX: x,
            screenY: y,
        }));
    }, [activePinData, cameraRef, pinPositions]);

    // --- Inline Styles for 2D HTML Elements (III. Theme) ---
    const rootContainerStyle = {
        width: '100vw',
        height: '100vh',
        // III. Background: Black/Dark Blue
        backgroundColor: '#00001a', 
    };

    const popupStyle = {
        position: 'absolute',
        // Dynamic positioning based on screen coordinates
        left: activePinData ? `${activePinData.screenX + 10}px` : '0px', 
        top: activePinData ? `${activePinData.screenY - 10}px` : '0px',
        // III. Pop-up Styling (Black/Blue background, White text)
        backgroundColor: 'rgba(0, 20, 40, 0.9)', 
        color: 'white',
        padding: '10px 15px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        maxWidth: '200px',
        zIndex: 20,
        display: activePinData ? 'block' : 'none',
        pointerEvents: 'auto', // Ensure it's clickable
        // Transition for a smoother appearance
        transition: 'opacity 0.2s', 
    };

    const closeButtonStyle = {
        background: 'none',
        border: '1px solid white', 
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginLeft: '10px',
        padding: '2px 7px',
        borderRadius: '3px',
    };

    return (
        <div style={rootContainerStyle}>
            {/* The 3D Canvas */}
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Scene 
                    ref={{ globeRef, cameraRef, controlsRef }}
                    onPinClick={handlePinClick} 
                    pinPositions={pinPositions}
                />
            </Canvas>

            {/* The 2D HTML Popup Overlay */}
            <div style={popupStyle}>
                {/* II. Pop-up Content */}
                <span style={{ fontFamily: 'sans-serif' }}>{activePinData?.info}</span>
                <button 
                    onClick={() => setActivePinData(null)} 
                    style={closeButtonStyle}
                >
                    X
                </button>
            </div>
        </div>
    );
};