import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F6FFF4',
        'off-white-highlighted' : 'white',
        'off-white-reduced': 'rgba(246,255,244,0.66)',
        'dark-mode-bg' :'#121212',
        'dark-mode-hover' : '#1c1c1c',
        'dark-mode-border' : '#3d3d3d',
        'bg-faded' : 'rgba(22,58,68,0.3)',
        'primary' : '#52B69A',  //Turquoise Green
        'progress-blue' : '#168AAD', //Light Blue
        'light-black' : '#061825', 
        'off-black': '#030B11' 
      }
    },
  },
  plugins: [],
}
export default config
