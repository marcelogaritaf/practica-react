import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    const menuFunction = ()=>{
        document.body.classList.toggle('open')
    }
  return (
    <div>
        <div className="background"></div>
        <button className='burger' onClick={menuFunction}></button>
        <div className="menu">
            <nav>
                <Link className='link' to="/">Carusel-1</Link>
                <Link className='link'to="/carusel-2">Carusel-2</Link>
                <Link className='link'to="/carusel-3">Carusel-3</Link>
                <Link className='link'to="/carusel-4">Carusel-4</Link>
                <Link className='link'to="/carusel-5">Carusel-5</Link>
            </nav>
        </div>
    </div>
  )
}

export default Menu