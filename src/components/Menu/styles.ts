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

const useMenuStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const useAppBarStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.custom.drawer.width})`,
      marginLeft: theme.custom.drawer.width
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

export {
  useResponsiveDrawerStyles,
  useMenuStyles,
  useAppBarStyles
}
