import React from 'react'
import NavigationLinks from '../NavigationLinks'

export default function NavigationModal({ styles, setIsModalOpen }) {
    return (
        <div className={styles.header__popup}>
            <div className={styles.header__popup__wrapper}>
                <div className={styles.header__popup__content}>
                    <div className={styles.header__popup__header}>
                        <div className={styles.header__popup__header__close} onClick={() => setIsModalOpen(false)}>X</div>
                    </div>
                    <div className={styles.header__popup__body}>
                        <NavigationLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}
