import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6C584C",
          "secondary": "#A98467",
          "accent": "#ADC178",
          "neutral": "#F0EAD2",
          "base-100": "#e6e5e6",
          "info": "#1f2937",
          "success": "#65a30d",
          "warning": "#1f2937",
          "error": "#dc2626",
        },
      },
    ],
  },
}

export default config
