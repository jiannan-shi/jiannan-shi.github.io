import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        for (let i = 0; i < 30; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.2, 0.2),
            vy: p.random(-0.2, 0.2)
          });
        }
      };

      p.draw = () => {
        p.clear();

        particles.forEach((particle, i) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > p.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > p.height) particle.vy *= -1;

          particles.forEach((other, j) => {
            if (i !== j) {
              const d = p.dist(particle.x, particle.y, other.x, other.y);
              if (d < 200) {
                p.stroke(100, 100, 100, p.map(d, 0, 200, 20, 0));
                p.line(particle.x, particle.y, other.x, other.y);
              }
            }
          });

          p.noStroke();
          p.fill(120, 120, 120, 30);
          p.ellipse(particle.x, particle.y, 3, 3);
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    new p5(sketch, containerRef.current);
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default P5Background;
