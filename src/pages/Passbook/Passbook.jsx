import React from 'react'
import styles from './style.module.css'
export default function Passbook() {
    return (
        <>

            <h1>Passbook</h1>
            <div>
                <div className={styles.passbookDetails}>
                    <div className={styles.date}>
                        Date<br />
                        22-10-22
                    </div>
                    <h3 className={styles.credit}>+2,300</h3>
                    <div className={styles.name}>Steve</div>
                </div>
                <div className={styles.passbookDetails}>
                    <div className={styles.date}>
                        Date<br />
                        22-10-22
                    </div>
                    <h3 className={styles.debit}>-400</h3>
                    <div className={styles.name}>William</div>
                </div>

                <div className={styles.passbookDetails}>
                    <div className={styles.date}>
                        Date<br />
                        22-10-22
                    </div>
                    <h3 className={styles.tip}>+200</h3>
                    <div className={styles.name}>Jose</div>
                </div>
            </div>
        </>
    )
}
