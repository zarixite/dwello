import styles from "./styles.module.css"
const Header = () => {
	return (
		<div className={styles.container}>
			<img className={styles.logo} src="src/assets/logo.svg" alt="logo" />
			<div className={styles.menu}>
				<ul className={styles.menu__list}>
					<li className={styles.list__item}>Home</li>
					<li className={styles.list__item}>Service</li>
					<li className={styles.list__item}>Agents</li>
					<li className={styles.list__item}>Contact</li>
				</ul>
			</div>
			<div className={styles["btn-container"]}>
				<img
					src="src/assets/ui/lens.svg"
					className={styles["icon"]}
					alt="lens"
				/>
				<img src="src/assets/ui/acc.svg" className={styles["icon"]} alt="acc" />
				<button className={styles["btn"]}>Sign up</button>
			</div>
		</div>
	)
}

export default Header
