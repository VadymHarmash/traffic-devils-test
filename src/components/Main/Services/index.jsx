import React from 'react'
import styles from './services.module.scss'
import icons from './icons'

export default function Services() {
    const services = [
        {
            id: 1,
            icon: icons.registrazione,
            title: 'Registrazione',
            text: 'Compilare tutti i campi del modulo di registrazione sul sito web.'
        },
        {
            id: 2,
            icon: icons.consultazione,
            title: 'Consultazione di esperti',
            text: "Dopo la registrazione, rispondere all'invito del Consulente di supporto di Petrol Energia e seguire tutte le sue istruzioni."
        },
        {
            id: 3,
            icon: icons.deposito,
            title: 'Deposito',
            text: "Dopo la verifica, è necessario depositare un minimo di 250 euro sul conto dell'azionista."
        }
    ]

    return (
        <div className={styles.services}>
            <div className="container">
                <div className={styles.services__wrapper}>
                    <h2>Inizia a servire con noi</h2>
                    <div className={styles.services__list}>
                        {services && services.map((service) => (
                            <div key={service.id} className={styles.services__list__item}>
                                <div className={styles.services__list__item__image}>
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.text}</p>
                                <button>INIZIARE</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
