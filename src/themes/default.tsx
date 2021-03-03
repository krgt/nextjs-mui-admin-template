import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  custom: {
    appbar: {
      height: '80px'
    },
    drawer: {
      width: '240px'
    }
  },
  palette: {
    primary: {
      main: '#2196f3',
      contrastText: '#ECF0F1'
    },
    text: {
    }
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif"
  }
})

export default theme
