import { Component, ElementRef, OnInit, ViewChild, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { UiStateService } from '../../services/ui-state.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-three-background',
    standalone: true,
    template: '<canvas #bgCanvas class="webgl"></canvas>',
    styles: [`
    .webgl {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none; /* Let clicks pass through */
    }
  `]
})
export class ThreeBackgroundComponent implements OnInit, OnDestroy {
    @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private shapes: THREE.Mesh[] = [];
    private clock = new THREE.Clock();
    private mouseSub!: Subscription;
    private mouseX = 0;
    private mouseY = 0;
    private animationId!: number;

    constructor(private ngZone: NgZone, private uiState: UiStateService) { }

    ngOnInit(): void {
        this.initThree();
        this.initLighting();
        this.initShapes();
        this.startAnimationLoop();

        // Subscribe to mouse updates
        this.mouseSub = this.uiState.mouse$.subscribe(pos => {
            // Smooth lerp happens in animation loop, we just update target
            // But for simplicity in this port, we map directly or use local lerp vars
            // The service returns -1 to 1.
            // script.js expected: (e.clientX - w/2) * 0.0005 which is small.
            // Let's adjust scale to match original feel.
            this.mouseX = pos.x * 0.5; // Scale down
            this.mouseY = pos.y * 0.5;
        });

        window.addEventListener('resize', this.onResize.bind(this));
    }

    ngOnDestroy(): void {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.mouseSub.unsubscribe();
        window.removeEventListener('resize', this.onResize.bind(this));

        // Cleanup Three.js
        this.renderer.dispose();
        this.shapes.forEach(m => {
            m.geometry.dispose();
            (m.material as THREE.Material).dispose();
        });
    }

    private initThree() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 25;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasRef.nativeElement,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    private initLighting() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xd4af37, 250, 100);
        pointLight.position.set(10, 10, 10);
        this.scene.add(pointLight);

        const secondaryLight = new THREE.PointLight(0xffffff, 100, 100);
        secondaryLight.position.set(-10, -5, 5);
        this.scene.add(secondaryLight);
    }

    private initShapes() {
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xd4af37, // Gold Accent
            metalness: 0.9,
            roughness: 0.1,
            transmission: 0.6,
            thickness: 1.0,
            transparent: true,
            opacity: 0.5,
            envMapIntensity: 2.5,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            side: THREE.DoubleSide
        });

        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xd4af37, // Gold
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });

        // Create a central composite object: A large Icosahedron + Wireframe shell
        // Main Glass Core
        const coreGeo = new THREE.IcosahedronGeometry(7, 2); // Smooth sphere-like but facetted
        const coreMesh = new THREE.Mesh(coreGeo, material);
        coreMesh.position.set(5, 0, -5); // Offset slightly right
        coreMesh.userData = {
            base: new THREE.Vector3(5, 0, -5),
            baseRot: new THREE.Euler(0, 0, 0),
            timeOffset: 0
        };
        this.scene.add(coreMesh);
        this.shapes.push(coreMesh);

        // Outer Wireframe Shell (Low Poly for contrast)
        const shellGeo = new THREE.IcosahedronGeometry(9, 1);
        const shellMesh = new THREE.Mesh(shellGeo, wireframeMaterial);
        shellMesh.position.set(5, 0, -5);
        shellMesh.userData = {
            base: new THREE.Vector3(5, 0, -5),
            baseRot: new THREE.Euler(0.5, 0.5, 0), // Initial rotation offset
            timeOffset: 2
        };
        this.scene.add(shellMesh);
        this.shapes.push(shellMesh);

        // Satellite 1 (Small Sphere)
        const satGeo = new THREE.SphereGeometry(1.5, 32, 32);
        const satMesh = new THREE.Mesh(satGeo, material);
        satMesh.position.set(-6, 4, 2); // Left, high
        satMesh.userData = {
            base: new THREE.Vector3(-6, 4, 2),
            baseRot: new THREE.Euler(0, 0, 0),
            timeOffset: 1.5
        };
        this.scene.add(satMesh);
        this.shapes.push(satMesh);

        // Satellite 2 (Small Icosahedron)
        const sat2Geo = new THREE.IcosahedronGeometry(2, 0);
        const sat2Mesh = new THREE.Mesh(sat2Geo, material);
        sat2Mesh.position.set(-4, -5, 0); // Left, low
        sat2Mesh.userData = {
            base: new THREE.Vector3(-4, -5, 0),
            baseRot: new THREE.Euler(0, Math.PI / 4, 0),
            timeOffset: 3
        };
        this.scene.add(sat2Mesh);
        this.shapes.push(sat2Mesh);
    }

    private startAnimationLoop() {
        this.ngZone.runOutsideAngular(() => {
            const animate = () => {
                const t = this.clock.getElapsedTime();

                // Premium sine-wave motion: Float gently like a luxury product
                const floatOffset = Math.sin(t * 0.5) * 0.5; // Y-axis amplitude: 0.5
                const rotOffset = Math.sin(t * 0.3) * (Math.PI / 90); // Y-axis rotation: ~2 degrees

                // Apply to all shapes uniformly but with slight offsets for depth
                this.shapes.forEach((shape, i) => {
                    const u = shape.userData;
                    const phase = u['timeOffset'] * 0.1; // Slight variation

                    // Y-Position: BaseY + Sine Wave
                    shape.position.y = u['base'].y + Math.sin(t * 0.4 + phase) * 0.8;

                    // Rotation: ONLY Y-axis, minimal, smooth
                    // Reset to base and add small sine offset
                    shape.rotation.y = u['baseRot'].y + Math.sin(t * 0.2 + phase) * (Math.PI / 60); // +/- 3 degrees
                    // Very subtle X/Z drift to avoid total stillness
                    shape.rotation.x = u['baseRot'].x + Math.sin(t * 0.1) * 0.02;

                    // Mouse Parallax (very subtle)
                    const targetX = (this.mouseX || 0) * 0.5;
                    const targetY = (this.mouseY || 0) * 0.5;
                    shape.rotation.x += 0.05 * (targetY - shape.rotation.x);
                    shape.rotation.y += 0.05 * (targetX - shape.rotation.y);
                });

                // Soft Camera Breathing (Zoom in/out 1-2%)
                const breathe = Math.sin(t * 0.25) * 0.5;
                this.camera.position.z = 25 + breathe;

                this.renderer.render(this.scene, this.camera);
                this.animationId = requestAnimationFrame(animate);
            };

            animate();
        });
    }

    private onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
