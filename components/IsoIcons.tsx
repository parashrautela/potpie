/* Isometric line-art icon set — Potpie brand language.
   Shared grammar: 2:1 isometric projection, lime-dim ground tile,
   white faces + ink strokes, bright lime accents, dark teal (#022d2c)
   for Potpie-owned elements. Mirrors the hero press aesthetic. */

const STROKE = "rgba(11, 16, 21, 0.55)";
const FAINT = "rgba(11, 16, 21, 0.4)";
const TILE_STROKE = "rgba(11, 16, 21, 0.22)";
const FACE_SHADE = "rgba(11, 16, 21, 0.07)";
const TEAL_TOP = "#022d2c";
const TEAL_LEFT = "#011f1e";
const TEAL_RIGHT = "#032a29";
const LIME_EDGE = "rgba(183, 246, 0, 0.55)";

type IconProps = { className?: string };

function Tile() {
  return (
    <polygon
      points="48,38 80,54 48,70 16,54"
      fill="var(--color-accent-dim)"
      stroke={TILE_STROKE}
      strokeWidth="1"
    />
  );
}

/* Context graph — nodes linked on the plane, one elevated lime cube */
export function IconGraph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g stroke={FAINT} strokeWidth="1">
        <line x1="30" y1="52" x2="48" y2="44" />
        <line x1="48" y1="44" x2="66" y2="54" />
        <line x1="66" y1="54" x2="48" y2="62" />
        <line x1="48" y1="62" x2="30" y2="52" />
        <line x1="48" y1="44" x2="48" y2="62" />
      </g>
      <line
        x1="48"
        y1="30.5"
        x2="48"
        y2="42"
        stroke={FAINT}
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <ellipse cx="30" cy="52" rx="4" ry="2" fill="#ffffff" stroke={STROKE} />
      <ellipse
        cx="48"
        cy="44"
        rx="4"
        ry="2"
        fill="var(--color-accent)"
        stroke={STROKE}
      />
      <ellipse cx="66" cy="54" rx="4" ry="2" fill="#ffffff" stroke={STROKE} />
      <ellipse cx="48" cy="62" rx="4" ry="2" fill="#ffffff" stroke={STROKE} />
      <g strokeWidth="1" stroke={STROKE}>
        <polygon points="39,20 48,24.5 48,30.5 39,26" fill="#ffffff" />
        <polygon points="57,20 48,24.5 48,30.5 57,26" fill={FACE_SHADE} />
        <polygon
          points="48,15.5 57,20 48,24.5 39,20"
          fill="var(--color-accent)"
        />
      </g>
    </svg>
  );
}

/* Agent orchestration — teal orchestrator cube dispatching to worker cubes */
export function IconOrchestration({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g stroke={FAINT} strokeWidth="1">
        <line x1="48" y1="31.5" x2="30" y2="46.5" />
        <line x1="48" y1="31.5" x2="48" y2="54.5" />
        <line x1="48" y1="31.5" x2="66" y2="46.5" />
      </g>
      <g strokeWidth="1" stroke={STROKE}>
        <polygon points="23,50 30,53.5 30,58.5 23,55" fill="#ffffff" />
        <polygon points="37,50 30,53.5 30,58.5 37,55" fill={FACE_SHADE} />
        <polygon points="30,46.5 37,50 30,53.5 23,50" fill="#ffffff" />
        <polygon points="41,58 48,61.5 48,66.5 41,63" fill="#ffffff" />
        <polygon points="55,58 48,61.5 48,66.5 55,63" fill={FACE_SHADE} />
        <polygon points="48,54.5 55,58 48,61.5 41,58" fill="#ffffff" />
        <polygon points="59,50 66,53.5 66,58.5 59,55" fill="#ffffff" />
        <polygon points="73,50 66,53.5 66,58.5 73,55" fill={FACE_SHADE} />
        <polygon points="66,46.5 73,50 66,53.5 59,50" fill="#ffffff" />
      </g>
      <g strokeWidth="1" stroke={LIME_EDGE}>
        <polygon points="37,18 48,23.5 48,31.5 37,26" fill={TEAL_LEFT} />
        <polygon points="59,18 48,23.5 48,31.5 59,26" fill={TEAL_RIGHT} />
        <polygon points="48,12.5 59,18 48,23.5 37,18" fill={TEAL_TOP} />
      </g>
      <polygon
        points="48,15.5 51,17 48,18.5 45,17"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

/* Forward-deployed engineers — lime Potpie figure embedded beside yours */
export function IconPeople({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g strokeWidth="1" stroke={STROKE}>
        <path
          d="M33,42 L33,56 A5,2.5 0 0 0 43,56 L43,42"
          fill="var(--color-accent)"
        />
        <ellipse cx="38" cy="42" rx="5" ry="2.5" fill="var(--color-accent)" />
        <circle cx="38" cy="33" r="4" fill="var(--color-accent)" />
        <path d="M53,46 L53,60 A5,2.5 0 0 0 63,60 L63,46" fill="#ffffff" />
        <ellipse cx="58" cy="46" rx="5" ry="2.5" fill="#ffffff" />
        <circle cx="58" cy="37" r="4" fill="#ffffff" />
      </g>
    </svg>
  );
}

/* Your data stays yours — teal vault cube with lime keyhole */
export function IconVault({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g strokeWidth="1" stroke={LIME_EDGE}>
        <polygon points="31,34 48,42.5 48,59.5 31,51" fill={TEAL_LEFT} />
        <polygon points="65,34 48,42.5 48,59.5 65,51" fill={TEAL_RIGHT} />
        <polygon points="48,25.5 65,34 48,42.5 31,34" fill={TEAL_TOP} />
      </g>
      <circle cx="56.5" cy="44" r="3" fill="var(--color-accent)" />
      <polygon
        points="55.5,46 57.5,46 58,52 55,52"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

/* Compliance — certificate plate with projected check + lime seal */
export function IconCompliance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g strokeWidth="1" stroke={STROKE}>
        <polygon points="24,36 48,48 48,53 24,41" fill="rgba(11,16,21,0.05)" />
        <polygon points="72,36 48,48 48,53 72,41" fill={FACE_SHADE} />
        <polygon points="48,24 72,36 48,48 24,36" fill="#ffffff" />
      </g>
      <g transform="matrix(0.866 0.433 -0.866 0.433 48 36)">
        <path
          d="M-9 3 L-2 9 L11 -7"
          stroke="var(--accent-ink)"
          strokeWidth="3.2"
          fill="none"
        />
      </g>
      <g strokeWidth="0.8" stroke={STROKE}>
        <polygon points="61,43 66,45.5 66,49.5 61,47" fill="#ffffff" />
        <polygon points="71,43 66,45.5 66,49.5 71,47" fill={FACE_SHADE} />
        <polygon
          points="66,40.5 71,43 66,45.5 61,43"
          fill="var(--color-accent)"
        />
      </g>
    </svg>
  );
}

/* Enterprise controls — governance panel with slider knobs */
export function IconControls({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <Tile />
      <g strokeWidth="1" stroke={STROKE}>
        <polygon points="24,36 48,48 48,53 24,41" fill="rgba(11,16,21,0.05)" />
        <polygon points="72,36 48,48 48,53 72,41" fill={FACE_SHADE} />
        <polygon points="48,24 72,36 48,48 24,36" fill="#ffffff" />
      </g>
      <g transform="matrix(0.866 0.433 -0.866 0.433 48 36)">
        <g stroke="rgba(11,16,21,0.35)" strokeWidth="1.2">
          <line x1="-14" y1="-6" x2="14" y2="-6" />
          <line x1="-14" y1="0" x2="14" y2="0" />
          <line x1="-14" y1="6" x2="14" y2="6" />
        </g>
        <circle
          cx="-3"
          cy="-6"
          r="3"
          fill="var(--color-accent)"
          stroke={STROKE}
          strokeWidth="0.8"
        />
        <circle
          cx="6"
          cy="0"
          r="3"
          fill="#ffffff"
          stroke={STROKE}
          strokeWidth="0.8"
        />
        <circle cx="-8" cy="6" r="3" fill={TEAL_TOP} />
      </g>
    </svg>
  );
}
