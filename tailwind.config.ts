import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "Raleway-Regular": ['"Raleway-Regular"'],
      "DMSans-Bold": ['"DMSans-Bold"'],
      "DMSans-Medium": ['"DMSans-Medium"'],
      "DMSans-Regular": ['"DMSans-Regular"'],
    },
    colors: {
      transparent: "transparent",
      black: "#1D1D1B",
      white: "#fff",
      primary: '#50A0FF',
      secondary: '#0368FF',
      'primary-dark': '#1D1D1B',
      'medium-grey': '#8B8B8B',
      'light-grey': '#D9D9D9',
      'dark-grey': '#474747',
    },
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
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          transparent: "transparent",
          black: "#1D1D1B",
          white: "#fff",
          primary: '#50A0FF',
          secondary: '#0368FF',
          'primary-dark': '#1D1D1B',
          'medium-grey': '#8B8B8B',
          'light-grey': '#D9D9D9',
          'dark-grey': '#474747',
        },
    },
  ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
export default config
