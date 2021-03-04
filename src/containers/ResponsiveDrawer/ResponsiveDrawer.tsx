import React, { useState, useEffect } from 'react'
import {
  Drawer,
  Hidden
} from '@material-ui/core'
import { useResponsiveDrawerStyles } from './styles'

type ResponsiveDrawerProps = {
  mobileOpen: boolean
  onDrawerClose(): void
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({ children, mobileOpen, onDrawerClose }) => {
  const classes = useResponsiveDrawerStyles()
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    setContainer(window.document.body)
  }, [])

  return (
    <>
      <div className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={onDrawerClose}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {children}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {children}
          </Drawer>
        </Hidden>
      </div>
    </>
  )
}

export default ResponsiveDrawer
