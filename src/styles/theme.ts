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
  fontSize: number
}

const mainTheme = {
  palette: {
    darkPrimary: '#512888',
    primary: '#3A41C6',
    white: '#FFFFFF',
    lightGrey: '#EEE',
    black: 'rgba(0, 0, 0, 0.8)',
  },
  spacing: {
    unit: 8,
  },
  fontSize: 16,
}

export default mainTheme
