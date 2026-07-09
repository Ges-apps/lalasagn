export function LemonSlice({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
      <circle cx="40" cy="40" r="36" fill="#F5D547" stroke="#2A1A0E" strokeWidth="2.5"/>
      <circle cx="40" cy="40" r="28" fill="#F8E880" stroke="#2A1A0E" strokeWidth="1.5"/>
      <line x1="40" y1="12" x2="40" y2="68" stroke="#2A1A0E" strokeWidth="1.5"/>
      <line x1="12" y1="40" x2="68" y2="40" stroke="#2A1A0E" strokeWidth="1.5"/>
      <line x1="20" y1="20" x2="60" y2="60" stroke="#2A1A0E" strokeWidth="1"/>
      <line x1="60" y1="20" x2="20" y2="60" stroke="#2A1A0E" strokeWidth="1"/>
    </svg>
  );
}

export function TomatoSlice({ className = '', size = 70 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" className={className} fill="none">
      <circle cx="35" cy="35" r="30" fill="#C93B2A" stroke="#2A1A0E" strokeWidth="2.5"/>
      <circle cx="35" cy="35" r="22" fill="#E06050" stroke="#2A1A0E" strokeWidth="1.5"/>
      <path d="M35,8 C35,8 38,2 35,0 C32,2 35,8 35,8Z" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="1"/>
      <path d="M35,8 C35,8 42,4 40,1 C37,0 35,8 35,8Z" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="1"/>
      <path d="M35,8 C35,8 28,4 30,1 C33,0 35,8 35,8Z" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="1"/>
      <line x1="35" y1="13" x2="35" y2="57" stroke="#2A1A0E" strokeWidth="1.2"/>
      <line x1="13" y1="35" x2="57" y2="35" stroke="#2A1A0E" strokeWidth="1.2"/>
      <line x1="19" y1="19" x2="51" y2="51" stroke="#2A1A0E" strokeWidth="0.8"/>
      <line x1="51" y1="19" x2="19" y2="51" stroke="#2A1A0E" strokeWidth="0.8"/>
    </svg>
  );
}

export function BasilLeaf({ className = '', size = 60 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} fill="none">
      <path d="M30,55 C30,55 8,40 10,22 C12,10 22,8 30,15 C38,8 48,10 50,22 C52,40 30,55 30,55Z" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="2"/>
      <path d="M30,55 C30,55 30,30 30,15" stroke="#8CAB52" strokeWidth="1.5"/>
      <path d="M30,35 C30,35 20,28 18,25" stroke="#8CAB52" strokeWidth="1"/>
      <path d="M30,35 C30,35 40,28 42,25" stroke="#8CAB52" strokeWidth="1"/>
      <path d="M30,45 C30,45 22,38 20,35" stroke="#8CAB52" strokeWidth="1"/>
      <path d="M30,45 C30,45 38,38 40,35" stroke="#8CAB52" strokeWidth="1"/>
    </svg>
  );
}

export function OliveBranch({ className = '', width = 160, height = 80 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 80" className={className} fill="none">
      <path d="M10,70 C30,50 50,30 80,20 C110,10 130,15 150,10" stroke="#5C7A2E" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="35" cy="50" rx="12" ry="7" fill="#8CAB52" stroke="#2A1A0E" strokeWidth="1.5" transform="rotate(-30 35 50)"/>
      <ellipse cx="55" cy="35" rx="12" ry="7" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="1.5" transform="rotate(-45 55 35)"/>
      <ellipse cx="80" cy="22" rx="12" ry="7" fill="#8CAB52" stroke="#2A1A0E" strokeWidth="1.5" transform="rotate(-60 80 22)"/>
      <ellipse cx="108" cy="16" rx="11" ry="6" fill="#5C7A2E" stroke="#2A1A0E" strokeWidth="1.5" transform="rotate(-70 108 16)"/>
      <ellipse cx="135" cy="13" rx="11" ry="6" fill="#8CAB52" stroke="#2A1A0E" strokeWidth="1.5" transform="rotate(-75 135 13)"/>
      <circle cx="30" cy="58" r="4" fill="#2A1A0E"/>
      <circle cx="52" cy="42" r="4" fill="#2A1A0E"/>
      <circle cx="75" cy="28" r="3.5" fill="#2A1A0E"/>
    </svg>
  );
}

export function PastaSwirl({ className = '', size = 80 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
      <path d="M40,10 C50,10 60,20 60,30 C60,45 45,50 40,50 C35,50 20,45 20,30 C20,20 30,10 40,10Z" fill="#F0C93A" stroke="#2A1A0E" strokeWidth="2"/>
      <path d="M40,15 C47,15 55,22 55,30 C55,42 44,46 40,46 C36,46 25,42 25,30 C25,22 33,15 40,15Z" fill="#F8E080" stroke="#2A1A0E" strokeWidth="1.2"/>
      <path d="M40,20 C45,20 50,25 50,30 C50,38 44,42 40,42" stroke="#2A1A0E" strokeWidth="1" fill="none"/>
      <path d="M40,50 C40,50 35,60 30,65 C35,65 40,68 45,65 C50,62 50,55 40,50Z" fill="#F0C93A" stroke="#2A1A0E" strokeWidth="1.5"/>
    </svg>
  );
}

export function CeramicPlate({ className = '', size = 100 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} fill="none">
      <ellipse cx="50" cy="50" rx="46" ry="46" fill="white" stroke="#2A1A0E" strokeWidth="2.5"/>
      <ellipse cx="50" cy="50" rx="38" ry="38" fill="none" stroke="#1B6FBF" strokeWidth="1.5"/>
      <ellipse cx="50" cy="50" rx="28" ry="28" fill="none" stroke="#1B6FBF" strokeWidth="1"/>
      <path d="M14,50 C14,30 30,14 50,14" stroke="#F0C93A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M86,50 C86,70 70,86 50,86" stroke="#F0C93A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function StarDoodle({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className} fill="none">
      <path d="M20,2 L23,14 L35,8 L26,18 L38,20 L26,22 L35,32 L23,26 L20,38 L17,26 L5,32 L14,22 L2,20 L14,18 L5,8 L17,14 Z" fill="#F0C93A" stroke="#2A1A0E" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export function WavyLine({ className = '', width = 200, color = '#1B6FBF' }: { className?: string; width?: number; color?: string }) {
  return (
    <svg width={width} height={20} viewBox={`0 0 ${width} 20`} className={className} fill="none">
      <path
        d={`M0,10 ${Array.from({ length: Math.floor(width / 30) }, (_, i) => `C${i * 30 + 10},2 ${i * 30 + 20},18 ${i * 30 + 30},10`).join(' ')}`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChefHat({ className = '', size = 60 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" className={className} fill="none">
      <rect x="14" y="40" width="32" height="12" rx="3" fill="white" stroke="#2A1A0E" strokeWidth="2"/>
      <path d="M18,40 C18,40 14,34 18,28 C20,24 24,22 30,22 C36,22 40,24 42,28 C46,34 42,40 42,40 Z" fill="white" stroke="#2A1A0E" strokeWidth="2"/>
      <ellipse cx="30" cy="22" rx="10" ry="8" fill="white" stroke="#2A1A0E" strokeWidth="2"/>
      <ellipse cx="30" cy="16" rx="8" ry="10" fill="white" stroke="#2A1A0E" strokeWidth="2"/>
      <line x1="22" y1="45" x2="22" y2="52" stroke="#2A1A0E" strokeWidth="1.5"/>
      <line x1="30" y1="45" x2="30" y2="52" stroke="#2A1A0E" strokeWidth="1.5"/>
      <line x1="38" y1="45" x2="38" y2="52" stroke="#2A1A0E" strokeWidth="1.5"/>
    </svg>
  );
}

export function ForkAndKnife({ className = '', size = 50 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" className={className} fill="none">
      <line x1="14" y1="6" x2="14" y2="44" stroke="#2A1A0E" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10,6 C10,6 10,18 14,20 C18,18 18,6 18,6" stroke="#2A1A0E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M36,6 C36,6 40,10 40,16 C40,20 38,22 36,22 L36,44" stroke="#2A1A0E" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
