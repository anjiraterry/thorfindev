const labels = ["checkout", "payments", "ledger", "kyc", "catalog", "fraud", "api", "search", "auth"];
const lit = new Set([1, 4, 5, 7]);
const ISO = "matrix(0.866 0.5 -0.866 0.5 0 0)";

export default function IsoStack() {
  return (
    <svg viewBox="0 0 560 480" className="h-auto w-full" role="img" aria-label="Diagram of a Thorfin service cluster: checkout, payments, ledger, KYC and more, running on isolated pods">
      {/* pod layer */}
      <g transform={`translate(280 330) ${ISO}`}>
        <rect width="250" height="250" x="-125" y="-125" fill="#151515" stroke="#2c2c2c" />
        <rect width="104" height="104" x="-112" y="-112" fill="#101010" stroke="#2c2c2c" />
        <rect width="104" height="104" x="8" y="-112" fill="#101010" stroke="#2c2c2c" />
        <rect width="104" height="104" x="-112" y="8" fill="#101010" stroke="#2c2c2c" />
        <rect width="104" height="104" x="8" y="8" fill="none" stroke="#2c2c2c" strokeDasharray="3 4" />
      </g>
      <g stroke="#8b8b8b" strokeDasharray="3 4" fill="none">
        <path d="M150 215 V300" /><path d="M410 215 V300" /><path d="M280 270 V330" />
      </g>
      {/* cluster slab */}
      <g transform="translate(280 170)">
        <g transform={`translate(0 16) ${ISO}`}><rect width="290" height="290" x="-145" y="-145" fill="#7b9cf0" /></g>
        <g transform={ISO}>
          <rect width="290" height="290" x="-145" y="-145" fill="#1a1a1a" stroke="#7b9cf0" />
          {labels.map((l, i) => {
            const x = -132 + (i % 3) * 90, y = -132 + Math.floor(i / 3) * 90;
            return (
              <g key={l} className="tile" style={{ ["--i" as string]: i }}>
                <rect x={x} y={y} width="80" height="80" rx="4" fill={lit.has(i) ? "#3a3a3a" : "#222"} stroke="#2c2c2c" />
                <text x={x + 40} y={y + 43} textAnchor="middle" fontSize="10" fill="#cfcfcf" fontFamily="var(--font-geist-mono), monospace">{l}</text>
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
}
