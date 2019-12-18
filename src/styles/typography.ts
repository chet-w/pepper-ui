import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Mukta',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Mukta', 'sans-serif'],
})

export default typography
