import React from 'react'
import { Header } from './partials/header.comp'
import { Footer } from './partials/Footer.com'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
        <header className='header'>
            <Header></Header>
        </header>
        <main className='main'>
            {children}
        </main>
        <footer className='footer'>
            <Footer></Footer>
        </footer>
        
    
    </div>
  )
}
