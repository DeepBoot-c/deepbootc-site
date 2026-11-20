// De zeilboot uit het logo als chromen SVG. Waterlijn ligt op y = 250 (zie WATERLINE).
export const BOAT_W = 300;
export const WATERLINE = 250;

export default function Boat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 420" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="chromeA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBFCFD" />
          <stop offset="0.38" stopColor="#C9D2DB" />
          <stop offset="0.55" stopColor="#8E9CAB" />
          <stop offset="0.8" stopColor="#E3E8ED" />
          <stop offset="1" stopColor="#A7B3BF" />
        </linearGradient>
        <linearGradient id="chromeB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9EDF1" />
          <stop offset="0.45" stopColor="#97A5B4" />
          <stop offset="0.7" stopColor="#6C7B8B" />
          <stop offset="1" stopColor="#B5C0CB" />
        </linearGradient>
        <linearGradient id="chromeHull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4F6F8" />
          <stop offset="0.35" stopColor="#B4BFCA" />
          <stop offset="0.7" stopColor="#64727F" />
          <stop offset="1" stopColor="#3B4855" />
        </linearGradient>
        <linearGradient id="chromeKeel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#56657A" />
          <stop offset="0.5" stopColor="#A8B4C1" />
          <stop offset="1" stopColor="#4A586B" />
        </linearGradient>
      </defs>
      <g stroke="#0B1A2E" strokeWidth="2.2" strokeLinejoin="round">
        {/* kiel en roer (onder water) */}
        <path d="M128 262 L180 262 L167 384 L140 384 Z" fill="url(#chromeKeel)" />
        <ellipse cx="153.5" cy="390" rx="31" ry="10" fill="url(#chromeKeel)" />
        <path d="M234 258 L249 258 L245 304 L238 304 Z" fill="url(#chromeKeel)" />
        {/* romp */}
        <path d="M18 222 L286 215 L262 262 L48 267 Z" fill="url(#chromeHull)" />
        <path d="M26 229 L278 222" fill="none" stroke="#F8FAFB" strokeWidth="1.4" opacity="0.8" />
        {/* mast en zeilen */}
        <rect x="149" y="8" width="5" height="212" fill="#7C8A99" />
        <path d="M145 30 L145 210 L50 210 Z" fill="url(#chromeA)" />
        <path d="M158 12 L158 210 L250 210 Z" fill="url(#chromeB)" />
        <path d="M145 30 L60 206" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
      </g>
    </svg>
  );
}
