import React, { Component } from 'react'

export default class Navbar extends Component {

    render() {

        return (
            <div>
                <header className="menuNav">

                    <nav className="headerPrincipal">

                        <a className="header">Drinks</a>
                        <a className="header">Sobre Nós</a>
                        <a className="header">Bons Drinks</a>
                        <a className="header">Nosso Time</a>
                        <a className="header">Contato</a>
                        
                    </nav>
                </header>
            </div>
        )
    }
}