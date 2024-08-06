import React, { useState } from 'react'
import styles from './header.module.scss'
import logo from '../../assets/icons/header/logo.svg'
import NavigationModal from './NavigationModal'
import NavigationLinks from './NavigationLinks'

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__wrapper}>
                    <div className={styles.header__logo}>
                        <a href="#"><img src={logo} alt="Generali" /></a>
                    </div>
                    <nav className={styles.header__navigation}>
                        <NavigationLinks />
                    </nav>
                    <div className={styles.header__burger} onClick={() => setIsModalOpen(true)}>
                        <div className={styles.header__burger__line}></div>
                        <div className={styles.header__burger__line}></div>
                        <div className={styles.header__burger__line}></div>
                    </div>
                </div>
            </div>
            {isModalOpen && <NavigationModal styles={styles} setIsModalOpen={setIsModalOpen} />}
        </header>
    )
}
