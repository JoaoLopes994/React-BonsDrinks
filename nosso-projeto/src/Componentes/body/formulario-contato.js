import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div>
                <h2>CONTATO</h2>
                <div className="forms">

                    <img className="imagem1" src="https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg"></img>
                    <form className="formsTodo">
                        <label >nome: </label>
                        <input/>
                        <label>e-mail: </label>
                        <input/>
                        <label>mensagem: </label>
                        <textarea name="mensagem"/>
                        <button className="btn">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}