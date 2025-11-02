import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 40) + 5;
        this.color = '#ffffff';
      }

      draw() {
        if(!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
            this.color = '#e53e3e'; // red-500 from Tailwind
          } else {
             this.color = '#ffffff';
          }
        }
        
        const dxToBase = this.baseX - this.x;
        const dyToBase = this.baseY - this.y;
        this.x += dxToBase / 20;
        this.y += dyToBase / 20;
      }
    }

    const init = () => {
      if(!ctx || !canvas) return;
      particlesArray = [];
      const text = "iSpy";
      const fontSize = Math.min(canvas.width * 0.15, 180);
      ctx.font = `900 ${fontSize}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.clearRect(0,0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillText(text, canvas.width / 2, canvas.height / 4);
      
      const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0,0, canvas.width, canvas.height);

      const step = Math.max(1, Math.floor(4 * (canvas.width / 1920)));
      for (let y = 0; y < textCoordinates.height; y += step) {
        for (let x = 0; x < textCoordinates.width; x += step) {
          const alpha = textCoordinates.data[(y * textCoordinates.width * 4) + (x * 4) + 3];
          if (alpha > 128) {
            particlesArray.push(new Particle(x, y));
          }
        }
      }
    };

    const animate = () => {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    setCanvasSize();
    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col text-center text-white overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
      
      {/* Spacer for the top part of the screen where the animation will settle */}
      <div className="flex-1 w-full relative z-10"></div>
      
      {/* Container for the text content, pushed to the bottom half */}
      <div className="flex-1 w-full flex items-start justify-center relative z-10 p-6">
        <div className="bg-black/40 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-white/10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-4 [text-shadow:0_3px_6px_rgba(0,0,0,0.8)]">
            The Future of <span className="text-red-500">Networking</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 text-gray-300 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
            Discreet AR eyewear that gives you the power to identify professionals in real-time and access their public profiles instantly.
          </p>
          <a href="#features" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/50">
            Discover How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;