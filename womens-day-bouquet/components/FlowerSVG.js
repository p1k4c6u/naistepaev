// components/FlowerSVG.js
// Beautiful SVG flower components — no 'use client' needed (pure SVG)

function RoseSVG() {
  const outerAngles = [0, 72, 144, 216, 288];
  const midAngles   = [36, 108, 180, 252, 324];
  return (
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* Stem */}
      <path d="M50 80 Q47 100 50 128" stroke="#3a6b47" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M49 108 Q37 101 31 87 Q41 88 49 106Z" fill="#4a7c55"/>
      <path d="M51 97 Q65 90 71 76 Q61 79 51 95Z" fill="#3a6b47"/>
      {/* Outer petals */}
      {outerAngles.map((a, i) => (
        <g key={`outer-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="22" rx="11" ry="19" fill={i % 2 === 0 ? '#e8748a' : '#d85f77'} opacity="0.88"/>
        </g>
      ))}
      {/* Middle petals */}
      {midAngles.map((a, i) => (
        <g key={`mid-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="29" rx="8.5" ry="14" fill="#c9546a" opacity="0.93"/>
        </g>
      ))}
      {/* Center */}
      <circle cx="50" cy="42" r="11" fill="#9a2040"/>
      <circle cx="50" cy="41" r="7" fill="#c9546a"/>
      <circle cx="50" cy="40" r="3.5" fill="#e8748a" opacity="0.75"/>
      <circle cx="50" cy="39" r="1.5" fill="#fda4af" opacity="0.8"/>
    </svg>
  );
}

function TulipSVG() {
  return (
    <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* Stem */}
      <path d="M50 88 Q49 108 50 136" stroke="#3a6b47" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M50 112 Q38 104 32 90 Q44 94 50 110Z" fill="#4a7c55"/>
      <path d="M50 100 Q63 93 68 79 Q57 84 50 98Z" fill="#3a6b47"/>
      {/* Outer petals */}
      <path d="M50 20 C32 22 22 38 22 58 C22 72 34 82 50 86 C66 82 78 72 78 58 C78 38 68 22 50 20Z" fill="#a78bfa" opacity="0.85"/>
      {/* Left petal */}
      <path d="M50 20 C38 20 22 30 18 48 C14 64 28 80 50 86 C30 74 24 60 28 46 C32 32 42 22 50 20Z" fill="#c4b5fd" opacity="0.7"/>
      {/* Right petal */}
      <path d="M50 20 C62 20 78 30 82 48 C86 64 72 80 50 86 C70 74 76 60 72 46 C68 32 58 22 50 20Z" fill="#8b5cf6" opacity="0.7"/>
      {/* Center crease */}
      <path d="M50 20 Q49 52 50 86" stroke="#7c3aed" strokeWidth="1.2" fill="none" opacity="0.5"/>
      {/* Petal tips highlight */}
      <path d="M50 20 C46 30 42 26 44 22 C46 18 50 20 50 20Z" fill="#ddd6fe" opacity="0.6"/>
      <path d="M50 20 C54 30 58 26 56 22 C54 18 50 20 50 20Z" fill="#ddd6fe" opacity="0.6"/>
    </svg>
  );
}

function DaisySVG() {
  const petalAngles = Array.from({length: 12}, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* Stem */}
      <path d="M50 72 Q48 92 50 128" stroke="#3a6b47" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M49 105 Q38 98 34 85 Q44 88 49 103Z" fill="#4a7c55"/>
      <path d="M51 93 Q64 86 68 73 Q58 77 51 91Z" fill="#3a6b47"/>
      {/* Petals */}
      {petalAngles.map((a, i) => (
        <g key={`petal-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="18" rx="5.5" ry="16" fill={i % 3 === 0 ? '#fef3c7' : i % 3 === 1 ? '#fde68a' : '#fff8e7'} opacity="0.92"/>
        </g>
      ))}
      {/* Yellow center */}
      <circle cx="50" cy="42" r="14" fill="#f59e0b"/>
      <circle cx="50" cy="42" r="10" fill="#fbbf24"/>
      {/* Texture dots */}
      {[0,60,120,180,240,300].map((a, i) => (
        <circle key={i}
          cx={50 + Math.sin(a * Math.PI / 180) * 5.5}
          cy={42 - Math.cos(a * Math.PI / 180) * 5.5}
          r="1.8" fill="#d97706" opacity="0.7"
        />
      ))}
      <circle cx="50" cy="42" r="1.5" fill="#92400e" opacity="0.8"/>
    </svg>
  );
}

function PeonySVG() {
  const outerAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const midAngles   = [22, 67, 112, 157, 202, 247, 292, 337];
  return (
    <svg viewBox="0 0 100 125" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* Stem */}
      <path d="M50 75 Q48 93 50 122" stroke="#3a6b47" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Big leaves */}
      <path d="M48 100 Q34 93 28 78 Q40 80 48 98Z" fill="#4a7c55"/>
      <path d="M52 90 Q68 83 74 68 Q62 72 52 88Z" fill="#3a6b47"/>
      {/* Outer petals */}
      {outerAngles.map((a, i) => (
        <g key={`outer-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="18" rx="13" ry="22" fill={i % 2 === 0 ? '#f4a7b9' : '#f9c0cc'} opacity="0.82"/>
        </g>
      ))}
      {/* Middle petals */}
      {midAngles.map((a, i) => (
        <g key={`mid-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="26" rx="10" ry="16" fill={i % 2 === 0 ? '#e879a0' : '#ec4899'} opacity="0.88"/>
        </g>
      ))}
      {/* Inner petals */}
      {[0, 60, 120, 180, 240, 300].map((a, i) => (
        <g key={`inner-${i}`} transform={`rotate(${a}, 50, 42)`}>
          <ellipse cx="50" cy="33" rx="7" ry="10" fill="#db2777" opacity="0.92"/>
        </g>
      ))}
      {/* Center */}
      <circle cx="50" cy="42" r="9" fill="#9d174d"/>
      <circle cx="50" cy="42" r="5" fill="#be185d"/>
      <circle cx="50" cy="41" r="2" fill="#f9a8d4" opacity="0.8"/>
    </svg>
  );
}

function CherrySVG() {
  // 5 petals with notched tips
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',overflow:'visible'}}>
      {/* Branch-style stem */}
      <path d="M50 72 Q53 88 50 128" stroke="#8b5e3c" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M50 95 Q44 90 40 82" stroke="#8b5e3c" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* Petals — heart/notched shape */}
      {angles.map((a, i) => (
        <g key={i} transform={`rotate(${a}, 50, 42)`}>
          {/* Each petal: two overlapping circles create a heart-like notched petal */}
          <ellipse cx="46" cy="20" rx="9" ry="14" fill={i % 2 === 0 ? '#fda4af' : '#fecdd3'} opacity="0.88"/>
          <ellipse cx="54" cy="20" rx="9" ry="14" fill={i % 2 === 0 ? '#fda4af' : '#fecdd3'} opacity="0.88"/>
        </g>
      ))}
      {/* Center */}
      <circle cx="50" cy="42" r="9" fill="#e11d48"/>
      <circle cx="50" cy="42" r="5.5" fill="#fb7185"/>
      {/* Stamens */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <line key={i}
          x1="50" y1="42"
          x2={50 + Math.sin(a * Math.PI / 180) * 8}
          y2={42 - Math.cos(a * Math.PI / 180) * 8}
          stroke="#ffd0d8" strokeWidth="0.8" opacity="0.7"
        />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <circle key={i}
          cx={50 + Math.sin(a * Math.PI / 180) * 8}
          cy={42 - Math.cos(a * Math.PI / 180) * 8}
          r="1" fill="#ffe4e8" opacity="0.9"
        />
      ))}
    </svg>
  );
}

const FLOWER_COMPONENTS = {
  rose: RoseSVG,
  tulip: TulipSVG,
  daisy: DaisySVG,
  peony: PeonySVG,
  cherry: CherrySVG,
};

export default function FlowerSVG({ type }) {
  const Component = FLOWER_COMPONENTS[type] || RoseSVG;
  return <Component />;
}
