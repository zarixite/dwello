import styles from "./styles.module.css"

const Hero = () => {
	return (
		<>
			<div className={styles["container"]}>
				<div className={styles["desc"]}>
					<h1 className={`${styles["h1"]} ${styles["base"]}`}>Find Your </h1>
					<h2 className={`${styles["h2"]} ${styles["base"]}`}>Dream Home</h2>
					<p className={styles["info"]}>
						Explore our curated selection of exquisite properties meticulously
						tailored to your unique dream home vision
					</p>
					<button className={styles["btn"]}>Sign up</button>
				</div>
			</div>
			<img src="src/assets/hero.png" className={styles["hero"]} alt="hero" />
		</>
	)
}

export default Hero
