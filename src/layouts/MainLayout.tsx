import React from 'react'
import MainFooter from './MainFooter'
import { Outlet } from 'react-router-dom'
import MainHeader from './MainHeader'
import { Stack } from "@mui/material";

function MainLayout() {
  return (
      <Stack className='app-container' minHeight="100vh" >
          <MainHeader />
          <Outlet />
          <MainFooter/>
    </Stack>
  )
}

export default MainLayout 