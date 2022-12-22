import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className='app'>
          <Outlet />
      </main>
    </Fragment>
  )
}

