import styles from "../styles/loader.module.css";

const PageLoader = () => (
	<div className={styles["loader-container"]}>
		<div className={styles.loader} data-content='MEANWHILE...'>
			MEANWHILE...
		</div>
	</div>
);

export default PageLoader;
