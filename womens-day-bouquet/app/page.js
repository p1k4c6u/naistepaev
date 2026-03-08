'use client';

import { useState, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import FlowerSVG from '@/components/FlowerSVG';

const FallingPetals = dynamic(() => import('@/components/FallingPetals'), { ssr: false });

const FLOWER_TYPES = ['rose', 'tulip', 'daisy', 'peony', 'cherry'];

const FLOWER_EMOJI = {
  rose: '🌹',
  tulip: '🌷',
  daisy: '🌼',
  peony: '🌸',
  cherry: '🌸',
};

const FLOWER_NAME = {
  rose: 'Rose',
  tulip: 'Tulip',
  daisy: 'Daisy',
  peony: 'Peony',
  cherry: 'Cherry Blossom',
};

const MAX_FLOWERS = 18;

export default function Home() {
  const [flowers, setFlowers] = useState([]);
  const [bouquet, setBouquet] = useState([]);
  const [ripples, setRipples] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [copied, setCopied] = useState(false);
  const nextId = useRef(0);
  const gardenRef = useRef(null);

  const plantFlower = useCallback((e) => {
    // Ignore clicks on flowers or buttons
    if (e.target.closest('[data-flower]') || e.target.closest('button')) return;
    if (flowers.length >= MAX_FLOWERS) return;

    const rect = gardenRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    // Keep away from header area and edges
    if (yPct < 14 || yPct > 92 || xPct < 4 || xPct > 96) return;

    const id = nextId.current++;
    const type = FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)];
    const rotation = (Math.random() - 0.5) * 22;
    const scale = 0.65 + Math.random() * 0.55;

    // Add ripple
    const rippleId = Date.now();
    setRipples(prev => [...prev, { id: rippleId, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== rippleId)), 800);

    // Plant as seed
    setFlowers(prev => [...prev, { id, type, xPct, yPct, rotation, scale, state: 'seed' }]);

    // Bloom
    setTimeout(() => {
      setFlowers(prev => prev.map(f => f.id === id ? { ...f, state: 'bloomed' } : f));
    }, 80);
  }, [flowers.length]);

  const pickFlower = useCallback((id, e) => {
    e.stopPropagation();
    const flower = flowers.find(f => f.id === id);
    if (!flower || flower.state !== 'bloomed') return;

    setFlowers(prev => prev.map(f => f.id === id ? { ...f, state: 'picked' } : f));

    setTimeout(() => {
      setFlowers(prev => prev.filter(f => f.id !== id));
      setBouquet(prev => {
        const next = [...prev, flower.type];
        return next;
      });
    }, 580);
  }, [flowers]);

  const handleShare = useCallback(() => {
    const flowerList = [...new Set(bouquet)].map(t => `${FLOWER_EMOJI[t]} ${FLOWER_NAME[t]}`).join(', ');
    const text = `🌸 Happy Women's Day! 🌸\n\nI grew a virtual bouquet for you:\n${flowerList}\n\nWith love, on March 8th ✨`;
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }, [bouquet]);

  const atMax = flowers.length >= MAX_FLOWERS;

  return (
    <main className="garden-main" ref={gardenRef} onClick={plantFlower}>
      {/* Sky & Ground */}
      <div className="sky-section" />
      <div className="ground-section" />

      {/* Moon */}
      <div className="moon" />

      {/* Ambient effects */}
      <FallingPetals />

      {/* Ripples */}
      {ripples.map(r => (
        <div
          key={r.id}
          className="plant-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}

      {/* Flowers */}
      {flowers.map(f => (
        <div
          key={f.id}
          data-flower="true"
          className={`flower-wrap state-${f.state}`}
          style={{
            left: `${f.xPct}%`,
            top: `${f.yPct}%`,
            transform: `rotate(${f.rotation}deg) scale(${f.scale})`,
          }}
          onClick={(e) => pickFlower(f.id, e)}
          title={f.state === 'bloomed' ? `Pick this ${FLOWER_NAME[f.type]}` : ''}
        >
          <FlowerSVG type={f.type} />
        </div>
      ))}

      {/* Header */}
      <header className="header">
        <div className="title-block">
          <span className="womens-day-label">March 8 · International Women's Day</span>
          <h1 className="main-title">Happy Women's Day</h1>
          <p className="subtitle">Click to plant · Click a flower to pick it</p>
        </div>

        {/* Bouquet counter */}
        <div className="bouquet-counter">
          <span className="bouquet-label">Your Bouquet · {bouquet.length}</span>
          <div className="bouquet-flowers">
            {bouquet.slice(-16).map((type, i) => (
              <span key={i} className="bouquet-flower-icon">{FLOWER_EMOJI[type]}</span>
            ))}
          </div>
          {bouquet.length >= 3 && (
            <button className="show-bouquet-btn" onClick={(e) => { e.stopPropagation(); setShowMessage(true); }}>
              Present Bouquet
            </button>
          )}
        </div>
      </header>

      {/* Max flowers label */}
      {atMax && (
        <p className="max-label">Pick some flowers to make room for more ✦</p>
      )}

      {/* Hint */}
      {flowers.length === 0 && bouquet.length === 0 && (
        <div className="hint-bar">
          <p className="hint-text">✦ tap anywhere in the garden to grow a flower ✦</p>
        </div>
      )}

      {/* Message overlay */}
      {showMessage && (
        <div className="message-overlay" onClick={() => setShowMessage(false)}>
          <div className="message-card" onClick={e => e.stopPropagation()}>
            <p className="message-date">March 8 · 2025</p>
            <h2 className="message-heading">
              To every woman who lights up the world
            </h2>
            <span className="message-flowers">
              {bouquet.slice(0, 8).map((t, i) => (
                <span key={i}>{FLOWER_EMOJI[t]}</span>
              ))}
            </span>
            <p className="message-body">
              You grew a bouquet of {bouquet.length} flower{bouquet.length !== 1 ? 's' : ''} —<br />
              just as you have grown, quietly and brilliantly,<br />
              into everything you were always meant to be.
            </p>
            <div className="btn-row">
              <button className="btn-share" onClick={handleShare}>
                {copied ? '✓ Copied!' : 'Copy Message'}
              </button>
              <button className="btn-close" onClick={() => setShowMessage(false)}>
                Keep Growing
              </button>
            </div>
          </div>
        </div>
      )}

      {copied && (
        <div className="copied-toast">Message copied to clipboard ✦</div>
      )}
    </main>
  );
}
