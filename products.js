// ===== Product Data =====
// Simple sample data for a crackers (fireworks) online shop.
// image: uses inline SVG data-URIs so the project works with no external assets.

function makeCrackerSVG(color1, color2, label) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <defs>
      <radialGradient id="g" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </radialGradient>
    </defs>
    <rect width="200" height="200" fill="#111827"/>
    <circle cx="100" cy="90" r="55" fill="url(#g)"/>
    <g stroke="#FFD166" stroke-width="3" stroke-linecap="round">
      <line x1="100" y1="20" x2="100" y2="2"/>
      <line x1="150" y1="45" x2="164" y2="32"/>
      <line x1="50" y1="45" x2="36" y2="32"/>
      <line x1="160" y1="90" x2="180" y2="90"/>
      <line x1="40" y1="90" x2="20" y2="90"/>
      <line x1="150" y1="135" x2="164" y2="148"/>
      <line x1="50" y1="135" x2="36" y2="148"/>
    </g>
    <text x="100" y="175" font-family="Verdana, sans-serif" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">${label}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const PRODUCTS = [
  { id: 1, name: "Sky Shot Rocket", price: 45, category: "Rockets", img: makeCrackerSVG("#FF6B6B", "#8B0000", "🚀") },
  { id: 2, name: "Golden Fountain", price: 120, category: "Fountains", img: makeCrackerSVG("#FFD166", "#B8860B", "⛲") },
  { id: 3, name: "Silver Sparkler (10pc)", price: 60, category: "Sparklers", img: makeCrackerSVG("#E0E0E0", "#888888", "✨") },
  { id: 4, name: "Thunder King Bomb", price: 90, category: "Bombs", img: makeCrackerSVG("#6C5CE7", "#341F97", "💥") },
  { id: 5, name: "Flower Pot Deluxe", price: 75, category: "Fountains", img: makeCrackerSVG("#00B894", "#006644", "🌸") },
  { id: 6, name: "Colour Rain Rocket", price: 150, category: "Rockets", img: makeCrackerSVG("#0984E3", "#003366", "🎆") },
  { id: 7, name: "Chakra Wheel", price: 35, category: "Ground Spinners", img: makeCrackerSVG("#FDCB6E", "#996B00", "🌀") },
  { id: 8, name: "Peacock Fountain", price: 130, category: "Fountains", img: makeCrackerSVG("#00CEC9", "#00807C", "🦚") },
  { id: 9, name: "Atom Bomb Mini", price: 55, category: "Bombs", img: makeCrackerSVG("#D63031", "#7A0E0E", "☄️") },
  { id: 10, name: "1000 Wala Garland", price: 320, category: "Garlands", img: makeCrackerSVG("#E17055", "#8A3B22", "🎇") },
  { id: 11, name: "5000 Wala Garland", price: 1450, category: "Garlands", img: makeCrackerSVG("#E84393", "#8C1F55", "🎇") },
  { id: 12, name: "Green Sparkler (10pc)", price: 65, category: "Sparklers", img: makeCrackerSVG("#55EFC4", "#00785A", "✨") },
  { id: 13, name: "Twinkling Star", price: 40, category: "Ground Spinners", img: makeCrackerSVG("#74B9FF", "#1B4F91", "⭐") },
  { id: 14, name: "Rocket Bomb Combo", price: 180, category: "Combo", img: makeCrackerSVG("#A29BFE", "#4834A3", "🎁") },
  { id: 15, name: "Whistling Rocket", price: 50, category: "Rockets", img: makeCrackerSVG("#FAB1A0", "#A8442F", "🚀") },
  { id: 16, name: "Colour Smoke Pack", price: 85, category: "Novelty", img: makeCrackerSVG("#81ECEC", "#0B7A7A", "🌫️") },
  { id: 17, name: "Ground Chakkar Big", price: 48, category: "Ground Spinners", img: makeCrackerSVG("#FFEAA7", "#B8860B", "🌀") },
  { id: 18, name: "Mega Flower Pot", price: 160, category: "Fountains", img: makeCrackerSVG("#00B894", "#004D33", "🌼") },
  { id: 19, name: "Kids Fun Pack", price: 250, category: "Combo", img: makeCrackerSVG("#FD79A8", "#99205F", "🎈") },
  { id: 20, name: "Deluxe Sky Shots (5pc)", price: 400, category: "Rockets", img: makeCrackerSVG("#636E72", "#1E2224", "🚀") },
  { id: 21, name: "Electric Sparkler (10pc)", price: 70, category: "Sparklers", img: makeCrackerSVG("#FFEAA7", "#B8860B", "✨") },
  { id: 22, name: "Bijili Cracker Pack", price: 30, category: "Novelty", img: makeCrackerSVG("#B2BEC3", "#4B5052", "🧨") },
  { id: 23, name: "2000 Wala Garland", price: 620, category: "Garlands", img: makeCrackerSVG("#E17055", "#8A3B22", "🎇") },
  { id: 24, name: "Aerial Shot Tube (25 shots)", price: 550, category: "Rockets", img: makeCrackerSVG("#0984E3", "#023059", "🎆") },
  { id: 25, name: "Fancy Fountain Set (5pc)", price: 300, category: "Fountains", img: makeCrackerSVG("#00CEC9", "#036661", "⛲") },
  { id: 26, name: "Assorted Family Pack", price: 999, category: "Combo", img: makeCrackerSVG("#6C5CE7", "#2A2170", "🎁") },
  { id: 27, name: "Snake Tablets", price: 25, category: "Novelty", img: makeCrackerSVG("#00B894", "#004D33", "🐍") },
  { id: 28, name: "Crackling Bomb (10pc)", price: 95, category: "Bombs", img: makeCrackerSVG("#D63031", "#5C0F0F", "💣") },
  { id: 29, name: "Colour Fountain Rainbow", price: 140, category: "Fountains", img: makeCrackerSVG("#FF7675", "#8B1E1E", "🌈") },
  { id: 30, name: "Premium Diwali Hamper", price: 1999, category: "Combo", img: makeCrackerSVG("#FDCB6E", "#8A5A00", "🎊") }
];
