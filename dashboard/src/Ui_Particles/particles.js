"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Particles({
  color = "#000000",
  particleCount =4000,
  particleSize =7,
  animate = true,
  className = "",
}) {
  const mountRef = useRef(null);
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    let camera;
    let scene;
    let material;
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    const init = () => {
      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        2,
        2000
      );
      camera.position.z = 1000;
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      for (let i = 0; i < particleCount; i++) {
        vertices.push(
          2000 * Math.random() - 1000,
          2000 * Math.random() - 1000,
          2000 * Math.random() - 1000
        );
      }
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );
      // Creating a simple circular texture programmatically
   // Create a simple black circular texture programmatically
const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext('2d'); // Changed from '3d' to '2d'

const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');     // Solid black center
gradient.addColorStop(0.2, 'rgba(0, 0, 0, 1)');   // Still solid black
gradient.addColorStop(0.4, 'rgba(0, 0, 0, 0.8)'); // Slightly transparent black
gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');     // Changed to transparent black (not white)

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 64, 64);
      
      const sprite = new THREE.CanvasTexture(canvas);
      material = new THREE.PointsMaterial({
        size: particleSize,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
      });
      material.color.setStyle(color);
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      return renderer;
    };
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    const handlePointerMove = (event) => {
      if (event.isPrimary) {
        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
      }
    };
    const animateScene = () => {
      if (!camera || !scene || !renderer || !material) return;
      if (animate) {
        const time = Date.now() * 0.00005;
        const h = ((360 * (1.0 + time)) % 360) / 360;
        material.color.setHSL(h, 0.5, 0.5);
      }
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animateScene);
    };
    const renderer = init();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    animateScene();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
        container.removeChild(renderer.domElement);
      }
      if (material) material.dispose();
    };
  }, [color, particleCount, particleSize, animate]);
  return (
    <div
      ref={mountRef}
      className={`fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 ${className}`}
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
    />
  );
}