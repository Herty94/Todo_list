module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
      3: '3 3 0%',
      4: '4 4 0%',
      5: '5 5 0%',
      6: '6 6 0%',
      7: '7 7 0%',
      8: '8 8 0%',
      9: '9 9 0%',
      10: '10 10 0%',
      11: '11 11 0%',
    },
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/5': '60%',
      '2/3': '66%',
      '3/4': '75%',
      '4/5': '80%',
      full: '100%',
    },
    extend: {
      fontFamily: {
        sans:
          '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        'accent-1': '#c1c6c8',
        'accent-2': '#eeeeee',
        'accent-7': '#333',
        'accent-menu': '#c8102e',
        'accent-top-menu': '#003057',
        // yellow
        focused: '#EFC862',
        // background chat
        background: '#2F2F2F',
        chatbox: '#494949',
        /*success: '#0070f3',
                cyan: '#79FFE1',*/
      },
      spacing: {
        //28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        // '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      textOverflow: ['scroll'],
      /*screens: {
              'dark': {
                raw: '(prefers-color-scheme: dark)',
              },
              'tablet': {
                raw: '(min-width: 768px)',
              }
            },*/
    },
  },
}
