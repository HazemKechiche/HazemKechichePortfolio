const sharp = require("sharp");

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#020617"/>
      <stop offset="100%" style="stop-color:#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#06b6d4"/>
    </linearGradient>
    <radialGradient id="glow" cx="30%" cy="40%" r="60%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#020617;stop-opacity:0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Border accent line at top -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Content -->
  <text x="80" y="200" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#3b82f6" letter-spacing="8" text-transform="uppercase">PORTFOLIO</text>

  <text x="80" y="280" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="white" style="font-style:italic">HAZEM</text>
  <text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="url(#accent)" style="font-style:italic">KECHICHE</text>

  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#94a3b8" letter-spacing="2">Backend &amp; AI Engineer</text>

  <!-- Tech tags -->
  <rect x="80" y="470" width="100" height="36" rx="18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1"/>
  <text x="105" y="494" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#60a5fa" letter-spacing="1">FastAPI</text>

  <rect x="200" y="470" width="70" height="36" rx="18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1"/>
  <text x="216" y="494" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#60a5fa" letter-spacing="1">.NET</text>

  <rect x="290" y="470" width="90" height="36" rx="18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1"/>
  <text x="308" y="494" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#60a5fa" letter-spacing="1">React</text>

  <rect x="400" y="470" width="90" height="36" rx="18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1"/>
  <text x="420" y="494" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#60a5fa" letter-spacing="1">Python</text>

  <rect x="510" y="470" width="70" height="36" rx="18" fill="#3b82f6" fill-opacity="0.15" stroke="#3b82f6" stroke-opacity="0.3" stroke-width="1"/>
  <text x="530" y="494" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#60a5fa" letter-spacing="1">AI</text>

  <!-- URL -->
  <text x="80" y="580" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#475569" letter-spacing="3">hazem-kechiche-portfolio.vercel.app</text>

  <!-- Decorative elements -->
  <circle cx="1050" cy="300" r="200" fill="none" stroke="#3b82f6" stroke-opacity="0.08" stroke-width="1"/>
  <circle cx="1050" cy="300" r="150" fill="none" stroke="#06b6d4" stroke-opacity="0.06" stroke-width="1"/>
  <circle cx="1050" cy="300" r="100" fill="none" stroke="#3b82f6" stroke-opacity="0.04" stroke-width="1"/>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile("public/og-image.png")
  .then(() => console.log("OG image generated: public/og-image.png (1200x630)"))
  .catch((err) => console.error("Error:", err));
