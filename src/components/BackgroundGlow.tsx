"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Canvas dimensions
    let width = typeof window !== "undefined" ? window.innerWidth : 1920;
    let height = typeof window !== "undefined" ? window.innerHeight : 1080;
    canvas.width = width;
    canvas.height = height;

    // Mouse interaction positioning
    let mouse = {
      x: -1000,
      y: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      let newWidth = window.innerWidth;
      let newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      
      // If the screen gets larger, add more particles to fill the new space
      let newParticleCount = Math.min(Math.floor((newWidth * newHeight) / 15000), 120);
      if (particles.length < newParticleCount) {
        for (let i = particles.length; i < newParticleCount; i++) {
          let p = new Particle();
          // Place new particles throughout the canvas
          p.x = Math.random() * newWidth;
          p.y = Math.random() * newHeight;
          particles.push(p);
        }
      }
      
      width = newWidth;
      height = newHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Particle settings
    const particleCount = Math.min(Math.floor((width * height) / 15000), 120);
    const particles: Particle[] = [];
    const connectionDistance = 120;
    const mouseConnectionDistance = 200;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        // Direction vectors
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        // Particle styling
        this.size = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? "rgba(98, 162, 225, 1)" : "rgba(168, 85, 247, 0.9)";
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Continuous movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interaction with mouse (parallax / repel effect)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Allow slow return to natural drift logic instead of snapping to base
          // The vx and vy properties manage the natural drift
        }

        this.draw();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      // Clear canvas with slight opacity for trails (optional, currently hard clear)
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }

      // Draw Connections
      for (let i = 0; i < particles.length; i++) {
        // Connect to mouse
        const mouseDx = particles[i].x - mouse.x;
        const mouseDy = particles[i].y - mouse.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDistance < mouseConnectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(96, 165, 250, ${1 - mouseDistance / mouseConnectionDistance})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // Connect to other particles
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
