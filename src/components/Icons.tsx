const Icons = {
  Necklace: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1">
      <path d="M20 30C20 50 33.4 70 50 70C66.6 70 80 50 80 30" />
      <circle cx="50" cy="75" r="8" className="fill-gold/10" />
      <path d="M50 70V80" />
    </svg>
  ),
  Bangle: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1.2">
      <ellipse cx="50" cy="50" rx="40" ry="25" />
      <ellipse cx="50" cy="50" rx="35" ry="20" strokeDasharray="2 2" />
    </svg>
  ),
  Earrings: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1">
      <path d="M35 20V60M65 20V60" />
      <circle cx="35" cy="70" r="10" className="fill-gold/10" />
      <circle cx="65" cy="70" r="10" className="fill-gold/10" />
    </svg>
  ),
  Ring: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1">
      <circle cx="50" cy="65" r="25" />
      <rect x="40" y="25" width="20" height="20" transform="rotate(45 50 35)" className="fill-gold/10" />
    </svg>
  ),
  Bridal: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1">
      <path d="M50 10L20 40V80H80V40L50 10Z" className="fill-gold/5" />
      <path d="M35 50H65M50 35V65" />
    </svg>
  ),
  Custom: () => (
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-gold" strokeWidth="1">
      <path d="M30 50L50 30L70 50L50 70L30 50Z" />
      <path d="M50 20V80M20 50H80" strokeWidth="0.5" />
    </svg>
  )
};

export default Icons;
