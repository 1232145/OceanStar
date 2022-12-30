import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import NavBar from '../../components/navigator'

function NotFound() {
  return (
    <div>
        <Header />
        <NavBar />
        Error: no such page!
        <Footer />
    </div>
  )
}

export default NotFound