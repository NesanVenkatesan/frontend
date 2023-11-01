import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({children}) {
  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand text-white mb-0 h1">DevPOS</Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-5">
            {children}
        </div>
        <ToastContainer/>
      </main>
    </>
  )
}

export default MainLayout