import React, { useEffect, useRef } from 'react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import styles from './form.module.scss'
import placeholder from '../../../assets/images/main/form/placeholder.png'

export default function Form() {
    const phoneInputRef = useRef(null)

    useEffect(() => {
        const phoneInputElement = phoneInputRef.current

        if (phoneInputElement) {
            const iti = intlTelInput(phoneInputElement, {
                initialCountry: 'ie',
                placeholderNumberType: 'MOBILE',
                autoPlaceholder: 'polite',
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
            })

            phoneInputElement.setAttribute('placeholder', `+${iti.getSelectedCountryData().dialCode}`)

            const handleCountryChange = () => phoneInputElement.setAttribute('placeholder', `+${iti.getSelectedCountryData().dialCode}`)

            phoneInputElement.addEventListener('countrychange', handleCountryChange)

            return () => phoneInputElement.removeEventListener('countrychange', handleCountryChange)
        }
    }, [])

    return (
        <div className={styles.form}>
            <div className="container">
                <div className={styles.form__wrapper}>
                    <p className={styles.form__text}>Investire 250 euro per raggiungere 5000 euro in una settimana vi sembra impossibile? Con il Gruppo Generali potete fare ancora di più!</p>
                    <div className={styles.form__polygon}><img src={placeholder} alt="News" /></div>
                    <form className={styles.form__window}>
                        <div className={styles.form__window__inputs}>
                            <input type="text" placeholder='il suo nome' />
                            <input type="text" placeholder='il suo cognome' />
                            <input type="email" placeholder='e-mail' />
                            <input
                                type="tel"
                                ref={phoneInputRef}
                                placeholder='+'
                            />
                        </div>
                        <button>registrati</button>
                    </form>
                    <div className={styles.form__newsText}>
                        <h2>IL NOSTRO SCOPO</h2>
                        <p>Siamo qui per promuovere lo sviluppo e la circolazione delle persone, delle imprese e del Paese.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
