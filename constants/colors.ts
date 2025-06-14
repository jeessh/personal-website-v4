export const colors = {
  // Primary brand colors
  primary: {
    50: '#f2f5f2',
    100: '#e4ebe3',
    200: '#c9d7c7',
    300: '#aec3aa',
    400: '#92ae8e',
    500: '#779973',
    600: '#566e52', // Main color
    700: '#485a44',
    800: '#3a4736',
    900: '#2c3528',
    950: '#1e241b',
  },

  // Secondary colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Light mode semantic colors
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#64748b',
    inverse: '#ffffff',
  },

  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    quaternary: '#e2e8f0',
  },

  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
    dark: '#94a3b8',
  },
  
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const;

export type ColorScale = typeof colors.primary;
export type StatusColor = keyof typeof colors.status;

