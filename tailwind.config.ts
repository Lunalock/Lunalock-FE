import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        // This is an example of how to set a custom color name
        // darkFooterBg: '#ff0000',
      },
    },
  },
  plugins: [],
}

export default config
