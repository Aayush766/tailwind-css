/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],  // This includes all files. You may want to specify specific file types like ["./src/**/*.{html,js}"]
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],  // Correct way to add custom font family
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}
