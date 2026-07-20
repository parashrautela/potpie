"use client";

import { useEffect, useState } from "react";
import styles from "./HeroPress.module.css";

const AGENTS = [
  "CODEBASE Q&A AGENT",
  "DEBUGGING AGENT",
  "TEST GENERATION AGENT",
  "IMPACT ANALYSIS AGENT",
  "RCA AGENT",
];

const GLITCH = "#$%&@?!/\\<>_";

/* Glitch-typewriter label, same behavior as the current potpie.ai press */
function useTypewriter() {
  const [text, setText] = useState("");

  useEffect(() => {
    let agent = 0;
    let pos = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const target = AGENTS[agent];
      if (!deleting) {
        pos += 1;
        const settled = target.slice(0, Math.max(0, pos - 2));
        const scramble = target
          .slice(Math.max(0, pos - 2), pos)
          .replace(/[^ ]/g, () =>
            GLITCH.charAt(Math.floor(Math.random() * GLITCH.length)),
          );
        setText(pos >= target.length + 2 ? target : settled + scramble);
        if (pos >= target.length + 2) {
          deleting = true;
          timer = setTimeout(tick, 2000);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        pos -= 3;
        if (pos <= 0) {
          pos = 0;
          deleting = false;
          agent = (agent + 1) % AGENTS.length;
          setText("");
          timer = setTimeout(tick, 500);
          return;
        }
        setText(AGENTS[agent].slice(0, pos));
        timer = setTimeout(tick, 25);
      }
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

/* Isometric cube: top/left/right faces around center (cx, cy) */
function Cube({
  cx,
  cy,
  hw,
  hh,
  h,
  top,
  left,
  right,
  stroke,
  label,
}: {
  cx: number;
  cy: number;
  hw: number;
  hh: number;
  h: number;
  top: string;
  left: string;
  right: string;
  stroke: string;
  label?: string;
}) {
  return (
    <g className={styles.cube}>
      <polygon
        points={`${cx - hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + h} ${cx - hw},${cy + h}`}
        fill={left}
        stroke={stroke}
        strokeWidth="1"
      />
      <polygon
        points={`${cx + hw},${cy} ${cx},${cy + hh} ${cx},${cy + hh + h} ${cx + hw},${cy + h}`}
        fill={right}
        stroke={stroke}
        strokeWidth="1"
      />
      <polygon
        points={`${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`}
        fill={top}
        stroke={stroke}
        strokeWidth="1"
      />
      {label && (
        <text
          transform={`matrix(0.72 0.36 -0.72 0.36 ${cx} ${cy + 1})`}
          textAnchor="middle"
          className={styles.cubeLabel}
        >
          {label}
        </text>
      )}
    </g>
  );
}

export default function HeroPress() {
  const label = useTypewriter();

  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.scene}
        viewBox="0 0 720 330"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bottom plate */}
        <g>
          <polygon
            points="250,206 360,261 360,277 250,222"
            fill="rgba(11,16,21,0.08)"
            stroke="rgba(11,16,21,0.15)"
            strokeWidth="1"
          />
          <polygon
            points="470,206 360,261 360,277 470,222"
            fill="rgba(11,16,21,0.13)"
            stroke="rgba(11,16,21,0.15)"
            strokeWidth="1"
          />
          <polygon
            points="360,151 470,206 360,261 250,206"
            fill="#f4f6ef"
            stroke="rgba(11,16,21,0.18)"
            strokeWidth="1"
          />
        </g>

        {/* Unified output block — slides out right after the stamp */}
        <g className={styles.out}>
          <Cube
            cx={360}
            cy={166}
            hw={36}
            hh={18}
            h={26}
            top="#b7f600"
            left="#9ed400"
            right="#8abb00"
            stroke="rgba(11,16,21,0.25)"
          />
        </g>

        {/* Incoming PR cubes — stream in from upper-left as a cluster */}
        <g className={styles.incoming}>
          <g className={styles.squash}>
            <Cube
              cx={308}
              cy={140}
              hw={26}
              hh={13}
              h={20}
              top="#ffffff"
              left="rgba(11,16,21,0.05)"
              right="rgba(11,16,21,0.11)"
              stroke="rgba(11,16,21,0.4)"
              label="PR"
            />
          </g>
          <g className={styles.squash}>
            <Cube
              cx={360}
              cy={166}
              hw={26}
              hh={13}
              h={20}
              top="#ffffff"
              left="rgba(11,16,21,0.05)"
              right="rgba(11,16,21,0.11)"
              stroke="rgba(11,16,21,0.4)"
              label="PR"
            />
          </g>
          <g className={styles.squash}>
            <Cube
              cx={412}
              cy={192}
              hw={26}
              hh={13}
              h={20}
              top="#ffffff"
              left="rgba(11,16,21,0.05)"
              right="rgba(11,16,21,0.11)"
              stroke="rgba(11,16,21,0.4)"
              label="PR"
            />
          </g>
        </g>

        {/* Top plate — the Potpie press, stamps down */}
        <g className={styles.plate}>
          <polygon
            points="250,86 360,141 360,153 250,98"
            fill="#011f1e"
            stroke="rgba(183,246,0,0.35)"
            strokeWidth="1"
          />
          <polygon
            points="470,86 360,141 360,153 470,98"
            fill="#032a29"
            stroke="rgba(183,246,0,0.35)"
            strokeWidth="1"
          />
          <polygon
            points="360,31 470,86 360,141 250,86"
            fill="#022d2c"
            stroke="rgba(183,246,0,0.55)"
            strokeWidth="1"
          />
          {/* Screws */}
          <ellipse cx="360" cy="44" rx="4" ry="2" fill="rgba(183,246,0,0.7)" />
          <ellipse cx="452" cy="86" rx="4" ry="2" fill="rgba(183,246,0,0.7)" />
          <ellipse cx="360" cy="128" rx="4" ry="2" fill="rgba(183,246,0,0.7)" />
          <ellipse cx="268" cy="86" rx="4" ry="2" fill="rgba(183,246,0,0.7)" />
          {/* Potpie pie mark on the plate's top face */}
          <g transform="translate(360 86) scale(1 0.5) rotate(45)">
            <path
              d="M0 0 L18 -13 A22 22 0 1 0 18 13 Z"
              fill="#b7f600"
              transform="scale(1.15)"
            />
          </g>
        </g>
      </svg>

      <div className={styles.label}>
        <span className={styles.bracket}>[</span>
        <span className={styles.labelText}>{label}</span>
        <span className={styles.cursor} />
        <span className={styles.bracket}>]</span>
      </div>
    </div>
  );
}
