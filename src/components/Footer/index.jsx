import React from 'react'
import styles from './footer.module.scss'
import logo from '../../assets/icons/header/logo.svg'

export default function Footer() {
    const topRow = [
        'Mappa del sito',
        'Termini di utilizzo',
        'Avviso di accessibilità',
        'Gestione dei Cookie',
        'Politica sulla protezione dei dati e informativa sulla privacy'
    ]

    const bottomRow = [
        'Avviso di frode Web e phishing',
        'Politica sui reclami – Australia'
    ]

    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer__wrapper}>
                    <img src={logo} alt="Generali" />
                    <div className={styles.footer__routes}>
                        <div className={styles.footer__routes__top}>
                            {topRow && topRow.map((item, index) => (
                                <a key={index} href='#'>{item}</a>
                            ))}
                        </div>
                        <div className={styles.footer__routes__bottom}>
                            {bottomRow && bottomRow.map((item, index) => (
                                <a key={index} href='#'>{item}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
