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
    darkPrimary: '#512888',
    primary: '#3A41C6',
    white: '#FFFFFF',
    lightGrey: '#EEE',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
