/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 6px 6px 13px rgba(255, 255, 255, 1)',
        'inner-custom-two': 'inset 6px 6px 18px rgba(3, 3, 3, 0.2)',
        'custom-light': '-6px -6px 18px rgba(255, 255, 255, 1)',
        'custom-light-two': '6px -6px 18px rgba(255, 255, 255, 1)',
      },
      borderWidth: {
        '26': '26px',
      },
      fontFamily: {
        chivo: ['Chivo Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        wave: 'wave 2s ease-in-out infinite',
        'wave-2': 'wave 2s ease-in-out infinite 0.2s',
        'wave-3': 'wave 2s ease-in-out infinite 0.4s',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1.8s infinite',
      },
    },
  },
  plugins: [],
}