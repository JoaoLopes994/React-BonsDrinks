import React, { Component } from "react";
import Botao from "../Botao/Botao";
import styles from "./Forms.module.css";


export default class Contato extends Component {
	render() {
		return (
			<div className={styles.principal}>
				<h1 className={styles.contato}>CONTATO</h1>
				<ImagemContato imagem={fotoContato} />
				<form className={styles.FormsContato}>
					<label className={styles.LabelForms + " " + styles.label0}>Insira seu nome</label>
					<br></br>
					<input className={styles.InputForms + " " + styles.input0} />
					<br></br>
					<label className={styles.LabelForms + " " + styles.label1}>
						Seu email
					</label>
					<br></br>
					<input className={styles.InputForms + " " + styles.input1} />
					<br></br>
					<label className={styles.LabelForms + " " + styles.label2}>
						Escreva sua mensagem
					</label>
					<br></br>
					<input className={styles.input2}></input>
					<Botao />
				</form>
			</div>
		);
	}
}