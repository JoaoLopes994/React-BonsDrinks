import React, { Component } from "react";
import styles from "./navbarHeader.module.css";

export default class navbarHeader extends Component {
	render() {
		return (
			<header className={styles.header}>
				<nav className={styles.navHeader}>
					<ul className={styles.ulHeader}>
						<li>
							<a className={styles.navHeader2} href="">
								Drinks
							</a>
						</li>
						<li>
							<a className={styles.navHeader2} href="">
								Sobre Nós
							</a>
						</li>
						<li>
							<a
								className={styles.navHeader2 + " " + styles.navLogo}
								href=""
							>
								Bons Drinks
							</a>
						</li>
						<li>
							<a className={styles.navHeader2} href="">
								Nosso Time
							</a>
						</li>
						<li>
							<a className={styles.navHeader2} href="">
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}