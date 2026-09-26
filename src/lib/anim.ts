// Tokens de movimiento BreZ — curva única, reveals sutiles fade+8px.

export const EASE: [number, number, number, number] = [0.2, 0, 0, 1];

export const D1 = 0.12;
export const D2 = 0.2;
export const D3 = 0.32;

/** Reveal sutil: fade + 8px hacia arriba. */
export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: D2, delay, ease: EASE },
  } as const;
}
