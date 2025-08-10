export function alpha(hex: string, opacity: number): string {
  if (!/^#([0-9a-f]{6})$/i.test(hex)) {
    throw new Error("Hex color must be in the format #RRGGBB.");
  }

  const alpha = Math.round((opacity / 100) * 255)
    .toString(16)
    .padStart(2, "0");

  return `${hex}${alpha}`;
}
