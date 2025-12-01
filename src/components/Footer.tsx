import styles from "./Footer.module.scss";


export default function Footer() {
    return (
        <footer className={`${styles.footer} usection usection-spacing-sm usection-spacing-xl`}>
            <div className={`${styles.container} ucontainer umx`}>
                <div className={styles.groupA}>

                <p>
                    <span>© {new Date().getFullYear()}</span>
                    <span>A.R.C. Means Arrival Research Center</span>
                </p>
                </div>

                {/* <div className={styles.groupB}>
                    <p></p>
                </div> */}
            </div>
        </footer>
    )
}