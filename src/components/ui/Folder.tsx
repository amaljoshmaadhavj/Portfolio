import React, { useState } from 'react';

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  onPaperClick?: (index: number) => void;
  onOpenChange?: (open: boolean) => void;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#5227FF', size = 1, items = [], className = '', onPaperClick, onOpenChange }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const folderGlowColor = darkenColor(color, 0.15);
  const paper1 = darkenColor('#ffffff', 0.08);
  const paper2 = darkenColor('#ffffff', 0.04);
  const paper3 = '#ffffff';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextOpen = !open;
    setOpen(nextOpen);
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
    if (nextOpen === false) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.12;
    const offsetY = (e.clientY - centerY) * 0.12;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-122%, -75%) rotate(-14deg)';
    if (index === 1) return 'translate(12%, -75%) rotate(14deg)';
    if (index === 2) return 'translate(-50%, -105%) rotate(4deg)';
    return '';
  };

  const frontFlapStyle: React.CSSProperties = {
    background: `linear-gradient(135deg, ${color} 0%, ${folderGlowColor} 100%)`,
    borderRadius: '4px 10px 10px 10px',
    boxShadow: open 
      ? 'inset 0 1px 1px rgba(255,255,255,0.2), 0 12px 28px rgba(0,0,0,0.35)' 
      : isHovered
        ? 'inset 0 1.5px 1.5px rgba(255,255,255,0.25), 0 8px 18px rgba(0,0,0,0.25)'
        : 'inset 0 1.5px 1.5px rgba(255,255,255,0.2), 0 4px 10px rgba(0,0,0,0.15)',
    border: '1px solid rgba(255,255,255,0.06)',
    transformOrigin: 'bottom center',
    transform: open 
      ? 'perspective(400px) rotateX(-45deg) scaleY(0.85)' 
      : isHovered
        ? 'perspective(400px) rotateX(-16deg) scaleY(0.96)'
        : 'perspective(400px) rotateX(0deg) scaleY(1)',
    transition: 'transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease'
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className="group relative transition-all duration-500 ease-out cursor-pointer overflow-visible select-none"
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-12px)' : isHovered ? 'translateY(-4px)' : undefined
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={handleClick}
      >
        {/* Ambient shadow underneath */}
        <div 
          className="absolute -bottom-1 left-1 right-1 h-3 bg-black/20 rounded-full blur-md -z-10 transition-all duration-500"
          style={{
            transform: open ? 'scaleX(0.8) scaleY(0.5) translateY(8px)' : isHovered ? 'scaleX(0.9) scaleY(0.8) translateY(2px)' : 'scaleX(0.95)',
            opacity: open ? 0.4 : isHovered ? 0.3 : 0.15
          }}
        />

        {/* Folder Back Flap Container */}
        <div
          className="relative w-[100px] h-[80px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] border border-black/10 transition-all duration-600"
          style={{ 
            background: `linear-gradient(135deg, ${folderBackColor} 0%, ${darkenColor(color, 0.2)} 100%)`,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Back Flap Tab */}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[35px] h-[12px] rounded-tl-[6px] rounded-tr-[6px]"
            style={{ 
              background: `linear-gradient(180deg, ${darkenColor(color, 0.04)} 0%, ${folderBackColor} 100%)`,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              borderRight: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Tiny silver metallic ring on the folder tab */}
            <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-500 border border-neutral-400 shadow-sm opacity-80" />
          </span>

          {/* Papers Render Layer */}
          {papers.map((item, i) => {
            let sizeClasses = '';
            if (i === 0) sizeClasses = open ? 'w-[72%] h-[82%]' : 'w-[72%] h-[80%]';
            if (i === 1) sizeClasses = open ? 'w-[82%] h-[82%]' : 'w-[82%] h-[72%]';
            if (i === 2) sizeClasses = open ? 'w-[92%] h-[82%]' : 'w-[92%] h-[64%]';

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                onClick={(e) => {
                  if (open && onPaperClick) {
                    e.stopPropagation();
                    onPaperClick(i);
                  }
                }}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-750 ease-out border border-black/[0.04] ${
                  !open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-105 active:scale-[1.02]'
                } ${sizeClasses}`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: '6px',
                  boxShadow: open 
                    ? '0 8px 20px -4px rgba(0,0,0,0.22), 0 4px 8px -4px rgba(0,0,0,0.15)' 
                    : '0 2px 4px rgba(0,0,0,0.05)',
                  cursor: open ? 'pointer' : 'inherit'
                }}
              >
                {item}
              </div>
            );
          })}

          {/* New 3D swinging front cover flap */}
          <div
            className="absolute z-30 w-full h-full origin-bottom"
            style={frontFlapStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;
