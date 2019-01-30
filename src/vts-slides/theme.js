import createTheme from 'spectacle/lib/themes/default'

export const theme = createTheme(
  {
    primary: '#5528ff',
    black: '#191919',
    gray: '#1d1f21',
    aqua: '#00c8c8',
    white: '#FFFFFF',
    quarternary: '#00C8C8'
  },
  {
    primary: {
      name: 'Playfair Display',
      googleFont: true
    },
    secondary: 'Helvetica'
  }
)
