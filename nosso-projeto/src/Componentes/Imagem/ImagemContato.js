import React, { Component } from "react";
import styles from "./Imagem.module.css";

export default class ImagemContato extends Component {
	render() {

		return <img className={styles.imagemForms} src={this.props.imagem} />;
	}
}