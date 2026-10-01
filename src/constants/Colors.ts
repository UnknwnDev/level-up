const tintColorLight = '#3434'
const tintColorDark = '#fff';

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

export const lightTheme: ThemeColors = {
  primary: '#0066CC',    // System Hologram Blue
  secondary: '#5B4E96',  // Mana Purple
  accent: '#00F0FF',     // Status Cyan
  background: '#E8ECF2', // Pale Diagnostic Grey
  text: '#0F172A',       // Deep Terminal Slate
};

export const darkTheme: ThemeColors = {
  primary: '#00E5FF',    // Glowing Status Cyan
  secondary: '#8A6FE8',  // Arcane Purple
  accent: '#38BDF8',     // Ice Blue Glow
  background: '#07090E', // Void Black
  text: '#E2E8F0',       // Holographic White/Silver
};

export const customThemes = {
  light: lightTheme,
  dark: darkTheme,
};
