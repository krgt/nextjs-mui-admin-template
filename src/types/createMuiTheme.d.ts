import '@material-ui/core/styles/createMuiTheme'

interface DrawerProps {
  width: string
}

interface AppBarProps {
  height: string
}

interface Custom {
  drawer: DrawerProps
  appbar: AppBarProps
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: Custom,
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {
    custom: Custom,
  }
}
