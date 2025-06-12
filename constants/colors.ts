export const colors = {
  // Primary brand colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
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

  // Dark mode semantic colors
  dark: {
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
      muted: '#94a3b8',
      inverse: '#0f172a',
    },
    background: {
      primary: '#020617',
      secondary: '#0f172a',
      tertiary: '#1e293b',
      quaternary: '#334155',
    },
    border: {
      light: '#334155',
      medium: '#475569',
      dark: '#64748b',
    },
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

