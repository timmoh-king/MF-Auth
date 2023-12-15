/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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

