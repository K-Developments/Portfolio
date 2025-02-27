export default {
  content:[
    "./index.html",
    "./**/*{js,jsx}"
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {
      borderImageSource: {
        'gradient-top': 'linear-gradient(to right, blue, purple)',
      },
      animation: {
        'typewriter': 'typewriter 2s steps(20) forwards',
        'blink': 'blink 0.7s infinite',
        'movingY': 'move 5s linear infinite',
        'reverseMove': 'reverseMove 5s linear infinite',
        'rotating': 'rotate 15s linear infinite',
        'scalingUp': 'scaleUp 3s linear infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'radial-move': 'radial-gradient-move 5s ease-in-out infinite',
        'slider-animate': 'animate_2 2.5s ease-in-out infinite', 
      },
      keyframes: {
        typewriter: {
          "0%": { maxWidth: "0ch" },
          "100%": { maxWidth: "50ch" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "black" },
        },
        move: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-1rem)" },
          "100%": { transform: "translateY(0)" },
        },
        reverseMove: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(1rem)" },
          "100%": { transform: "translateY(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "30%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          "70%": { transform: "scale(0.8)" },
        },
        "radial-gradient-move": {
          "0%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "50% 0%" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "50% 0%" },
        },
        animate_2: {
          '0%': {
            transform: 'translateY(250px)',
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(250px)',
            filter: 'hue-rotate(180deg)',
          },
        },
        moving: { 
          "50%": { width: "100%" },
          "100%": { width: "0%", right: "0", left: "unset" },
        },
       
      },
      boxShadow: {
        'custom': '15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 30px white, inset -5px -5px 10px rgba(0, 0, 255, 0.1), inset 5px 5px 10px rgba(0, 0, 0, 0.1)',
        'custom-inner': 'inset 0px 0px 0px rgba(0, 0, 0, 0.3), 0px 420px 0 400px #2697f3, inset 0px 0px 0px rgba(0, 0, 0, 0.1)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-light": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 5px rgba(0, 0, 0, 0.3)",
          },
          ".text-shadow-glow": {
            textShadow: "0 0 25px rgba(0, 255, 255, 0.7)",
          },
          ".text-shadow-gray": {
            textShadow: "0 0 25px rgba(169, 169, 169, 0.7)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],

};