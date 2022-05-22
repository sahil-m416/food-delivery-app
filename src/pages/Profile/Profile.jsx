import React from 'react'
import styles from './style.module.css'

export default function Profile() {
    // return (
    //     <>
    //         <div className={styles.container}>
    //             <h1>Profile</h1>
    //             <img className={styles.image} src="https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
    //         </div>
    //         <div className="details">
    //             <label>Name</label> : <input type="text" value="Ramcharan" />
    //             <label>Mobile Number</label> : <input type="text" value="1234567" />
    //             <label>Employee ID</label> : <input type="text" value="1234567" />
    //             <button>Logout</button>
    //         </div>
    //     </>
    // )
    return (
        <div className={styles.settings}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsTitle}>
                    <span className={styles.settingsUpdateTitle}>Update Your Account</span>
                    <span className={styles.settingsDeleteTitle}>Delete Your Account</span>
                </div>
                <form className={styles.settingsForm} >
                    <label>Profile Picture</label>
                    <div className={styles.settingsPP}>
                        <img alt="" src='https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        <label htmlFor="fileInput">
                            <i className={styles.settingsPPIcon}></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" value="Bahubali" />
                    <label>Email</label>
                    <input type="email" value="Babubali@codequotient.com" />
                    <label>Password</label>
                    <input type="password" value="********" />
                    <button className={styles.settingsSubmit} type='submit'>Update</button>

                </form>
            </div >
        </div >
    )
}
