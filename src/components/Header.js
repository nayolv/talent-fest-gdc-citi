import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            Hola soy un header provisional
            <nav>
            <a href="/ruta-ficticia" alt="link de prueba">Link de prueba</a>
            <a href="/ruta-ficticia" alt="link de prueba">Link de prueba</a>
            <a href="/ruta-ficticia" alt="link de prueba">Link de prueba</a>
            </nav>
        </header>
    )
}
