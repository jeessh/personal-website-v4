import type { Config } from 'tailwindcss'
import { colors, fontSizes, deviceBreakpoints } from './constants'

const screens = {
  'sm': `${deviceBreakpoints.mobile}px`,
  'md': `${deviceBreakpoints.tablet}px`,
  'lg': `${deviceBreakpoints.medium}px`,
  'xl': `${deviceBreakpoints.large}px`,
  'mobile': `${deviceBreakpoints.mobile}px`,
  'tablet': `${deviceBreakpoints.tablet}px`,
  'desktop': `${deviceBreakpoints.medium}px`,
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colors,
      },
      fontSize: fontSizes,
      screens,
    },
  },
  plugins: [],
}
export default config

