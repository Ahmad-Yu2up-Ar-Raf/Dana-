// Minimal theme tokens used by app/(tabs)/_layout.tsx
export const theme = {
  color: {
    // primary tint used across the app (adjust to your design)
    reactBlue: '#2563EB',
  },
  // convenience aliases used in the codebase
  colorBlack: '#000000',
  colorWhite: '#FFFFFF',
};

export type ThemeTokens = typeof theme;

export default theme;
