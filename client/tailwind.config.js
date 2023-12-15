/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        mfauth_purple: "#6941C6",
        mfauth_gray: "#626262",
        mfauth_white: "#FFFFFF",
        mfauth_black: "#000000",
        mfauth_green: "#4CAF50",
        mfauth_red: "#C5221F",
        mfauth_background: "#F9F5FF",
      },
      fontFamily: {
        primary: 'Nunito'
      },
    },
  },
  plugins: [],
}

