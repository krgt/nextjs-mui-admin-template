import { makeStyles } from '@material-ui/core/styles'

const useResponsiveDrawerStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.custom.drawer.width,
      flexShrink: 0
    }
  },
  drawerPaper: {
    padding: '15px',
    border: 'none',
    width: theme.custom.drawer.width,
    height: '100%',
    zIndex: 0,
    boxShadow: theme.shadows[3]
  }
}))

export {
  useResponsiveDrawerStyles
}
