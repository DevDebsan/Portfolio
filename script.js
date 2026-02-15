import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';

// --- SCENE SETUP ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg-canvas'),
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

camera.position.z = 25;

// --- LIGHTING (Soft Pastel & White) ---
// Base Ambient - Very Soft White
const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
scene.add(ambientLight);

// Key Light - Pastel Blue
const keyLight = new THREE.DirectionalLight(0xdbe6f6, 0.6);
keyLight.position.set(-10, 20, 10);
scene.add(keyLight);

// Fill Light - Warm White / Pale Pink
const fillLight = new THREE.PointLight(0xf5e6e8, 0.7);
fillLight.position.set(10, 0, 10);
scene.add(fillLight);

// --- MATERIALS (Frosted Glass / Zero-G Tech) ---
const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.15, // Glassy
    transparent: true,
    opacity: 0.8,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    side: THREE.DoubleSide
});

const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xa8d8ea, // Pastel Blue Wireframe
    wireframe: true,
    transparent: true,
    opacity: 0.15
});

// --- GEOMETRY ---
const shapes = [];

function createFloatingObject(type, size, x, y, z) {
    let geometry;
    // Tech-inspired geometric shapes
    if (type === 'ico') geometry = new THREE.IcosahedronGeometry(size, 0);
    else if (type === 'oct') geometry = new THREE.OctahedronGeometry(size, 0);
    else if (type === 'tetra') geometry = new THREE.TetrahedronGeometry(size, 0);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);

    // Add optional wireframe child for "Tech" look
    if (Math.random() > 0.5) {
        const wire = new THREE.Mesh(geometry, wireframeMaterial);
        wire.scale.set(1.05, 1.05, 1.05);
        mesh.add(wire);
    }

    // Zero-Gravity Physics Data
    mesh.userData = {
        // Base Position to orbit/drift around
        base: new THREE.Vector3(x, y, z),
        // Random drift vectors per axis (Multi-axis sine waves)
        driftSpeed: new THREE.Vector3(
            Math.random() * 0.2 + 0.1,
            Math.random() * 0.2 + 0.1,
            Math.random() * 0.2 + 0.1
        ),
        driftRange: new THREE.Vector3(
            Math.random() * 2 + 0.5,
            Math.random() * 2 + 0.5,
            Math.random() * 2 + 0.5
        ),
        // Rotation intertia
        rotSpeed: new THREE.Vector3(
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.005,
            (Math.random() - 0.5) * 0.005
        ),
        timeOffset: Math.random() * 100
    };

    scene.add(mesh);
    shapes.push(mesh);
}

// Populate Space with diverse shapes
for (let i = 0; i < 20; i++) {
    const type = ['ico', 'oct', 'tetra'][Math.floor(Math.random() * 3)];
    const size = Math.random() * 1.5 + 0.5;
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 25;
    const z = (Math.random() - 0.5) * 15 - 5; // Depth layering
    createFloatingObject(type, size, x, y, z);
}

// --- CURSOR INTERACTION ---
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
    // Normalized coordinates -1 to 1
    mouseX = (e.clientX - window.innerWidth / 2) * 0.0005;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.0005;
});

// --- ANIMATION ---
const clock = new THREE.Clock();

function animate() {
    const t = clock.getElapsedTime();

    // Smooth Camera Parallax (Lagged)
    targetX = mouseX * 5;
    targetY = mouseY * 5;
    camera.rotation.y += 0.02 * (targetX - camera.rotation.y);
    camera.rotation.x += 0.02 * (targetY - camera.rotation.x);

    shapes.forEach(shape => {
        const u = shape.userData;

        // Zero-Gravity Drift: Sine waves on all 3 axes with different frequencies
        // This creates non-linear, organic floating motion
        const tx = t * u.driftSpeed.x + u.timeOffset;
        const ty = t * u.driftSpeed.y + u.timeOffset;
        const tz = t * u.driftSpeed.z + u.timeOffset;

        shape.position.x = u.base.x + Math.sin(tx) * u.driftRange.x;
        shape.position.y = u.base.y + Math.sin(ty) * u.driftRange.y;
        shape.position.z = u.base.z + Math.cos(tz) * u.driftRange.z;

        // Slow, weightless rotation
        shape.rotation.x += u.rotSpeed.x;
        shape.rotation.y += u.rotSpeed.y;
        shape.rotation.z += u.rotSpeed.z;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// --- RESIZE ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
