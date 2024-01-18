import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Font Modifications 
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'], 
      'ubuntu-mono': ['"Ubuntu Mono"', 'mono'],
      'roboto': ['Roboto', 'sans-serif']
    },
    // My Extensions 
    extend: {
      // Color Extensions
      colors: {
        // Custom color names 
        dark_cyan: '#083344',
        light_cyan: '#67e8f9',
        dark_green: '#166534', 
        light_green: '#86efac',
        dark_blue: '#172554',
        light_blue: '#93c5fd',
        light_slate: '#94a3b8', 
        dark_slate: '#0f172a', 

        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900]
        }
      },
      // Outline Extensions 
      outline: {
        lightblue: '2px solid #38bdf8', 
      },

      // Animation Extensions
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0)'}, 
          '100%': { transform: 'scale(1.2)'} 
        }
      },
      animation: {
        'pop-up': 'pop 2s ease-in-out',
      }
    },
  },
  plugins: [],
}

