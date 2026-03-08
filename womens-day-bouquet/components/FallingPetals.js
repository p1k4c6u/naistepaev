'use client';

import { useMemo } from 'react';

const PETAL_COLORS = [
  '#fda4af', '#e8748a', '#f4a7b9', '#a78bfa',
  '#fde68a', '#fecdd3', '#ddd6fe', '#fbcfe8',
  '#c4b5fd', '#f9a8d4', '#fef9c3',
];

export default function FallingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => {
      const color = PETAL_COLORS[i % PETAL_COLORS.length];
      const left = Math.random() * 100;
      const size = 6 + Math.random() * 9;
      const duration = 12 + Math.random() * 14;
      const delay = Math.random() * 16;
      const opacity = 0.35 + Math.random() * 0.45;
      return { id: i, color, left, size, duration, delay, opacity };
    });
  }, []);

  const fireflies = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      top: 45 + Math.random() * 40,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 6,
    }));
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 55,
      size: 1 + Math.random() * 2.5,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <>
      {/* Stars */}
      {stars.map(s => (
        <div
          key={`star-${s.id}`}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* Fireflies */}
      {fireflies.map(f => (
        <div
          key={`ff-${f.id}`}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}

      {/* Falling petals */}
      {petals.map(p => (
        <div
          key={`petal-${p.id}`}
          className="falling-petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.75,
            background: p.color,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            borderRadius: '50% 10% 50% 10%',
          }}
        />
      ))}
    </>
  );
}
