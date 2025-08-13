import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: `'Rubik', sans-serif`,
  },

  palette: {
    primary: {
      main: '#212529',      
      contrastText: '#f8f9fa', 
    },
    secondary: {
      main: '#f8f9fa',
      contrastText: '#212529',
    },
  },
})
