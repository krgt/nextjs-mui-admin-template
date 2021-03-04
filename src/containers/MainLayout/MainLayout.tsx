import React, { useState } from 'react'
import AppBar from '../../components/AppBar/AppBar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useMainLayoutStyles } from './styles'

const MainLayout: React.FC = ({ children }) => {
  const classes = useMainLayoutStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar onDrawerToggle={handleDrawerToggle}/>
      <LeftSidebar
        mobileOpen={ mobileOpen }
        onClose={ handleDrawerToggle }
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default MainLayout
