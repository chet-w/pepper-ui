export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    midPrimary: string
    lightPrimary: string
    black: string
    white: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    darkPrimary: '#514A9D',
    primary: '#24C6DC',
    white: '#FFFFFF',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
