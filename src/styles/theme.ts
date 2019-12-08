export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    midPrimary: string
    lightPrimary: string
    black: string
    white: string
    grey: string
    lightGrey: string
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
    lightGrey: '#f5f5f5',
    grey: '#d9d9d9',
    black: 'rgba(0, 0, 0, 0.8)',
  },
  spacing: {
    unit: 8,
  },
  fontSize: 16,
}

export default mainTheme
