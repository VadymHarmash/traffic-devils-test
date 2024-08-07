import React, { useEffect, useRef, useState } from 'react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import styles from './form.module.scss'
import placeholder from '../../../assets/images/main/form/placeholder.png'

export default function Form() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formErrors, setFormErrors] = useState({})
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

            return () => {
                phoneInputElement.removeEventListener('countrychange', handleCountryChange)
                if (iti) {
                    iti.destroy()
                }
            }
        }
    }, [])

    const validateForm = (e) => {
        e.preventDefault()
        const errors = {}

        if (!name) errors.name = 'This field is required.'

        if (!surname) errors.surname = 'This field is required.'

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!email) {
            errors.email = 'This field is required.'
        } else if (!emailPattern.test(email)) {
            errors.email = 'Invalid email format.'
        }

        const phoneInputElement = phoneInputRef.current
        const iti = intlTelInput(phoneInputElement)
        const phoneNumber = iti.getNumber()
        if (!phoneNumber) {
            errors.phone = 'This field is required.'
        } else if (!iti.isValidNumber()) {
            errors.phone = 'Invalid phone number.'
        }

        setFormErrors(errors)
    }

    return (
        <div className={styles.form}>
            <div className="container">
                <div className={styles.form__wrapper}>
                    <p className={styles.form__text}>Investire 250 euro per raggiungere 5000 euro in una settimana vi sembra impossibile? Con il Gruppo Generali potete fare ancora di più!</p>
                    <div className={styles.form__polygon}><img src={placeholder} alt="News" /></div>
                    <div className={styles.form__window}>
                        <div className={styles.form__window__inputs}>
                            <div className={styles.form__window__inputWrapper}>
                                <input
                                    type="text"
                                    placeholder='il suo nome'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {formErrors.name && <span className={styles.error}>{formErrors.name}</span>}
                            </div>
                            <div className={styles.form__window__inputWrapper}>
                                <input 
                                    type="text" 
                                    placeholder='il suo cognome'
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                                {formErrors.surname && <span className={styles.error}>{formErrors.surname}</span>}
                            </div>
                            <div className={styles.form__window__inputWrapper}>
                                <input
                                    type="text"
                                    placeholder='e-mail'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {formErrors.email && <span className={styles.error}>{formErrors.email}</span>}
                            </div>
                            <div className={styles.form__window__inputWrapper}>
                                <input
                                    type="tel"
                                    ref={phoneInputRef}
                                    value={phone}
                                    placeholder='+'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {formErrors.phone && <span className={styles.error}>{formErrors.phone}</span>}
                            </div>
                        </div>
                        <button onClick={validateForm}>registrati</button>
                    </div>
                    <div className={styles.form__newsText}>
                        <h2>IL NOSTRO SCOPO</h2>
                        <p>Siamo qui per promuovere lo sviluppo e la circolazione delle persone, delle imprese e del Paese.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
