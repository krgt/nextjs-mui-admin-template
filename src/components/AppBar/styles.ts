import { makeStyles } from '@material-ui/core/styles'

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
  useAppBarStyles
}
