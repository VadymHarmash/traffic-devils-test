import React from 'react'
import styles from './sponsors.module.scss'
import images from './images'

export default function Sponsors() {
    return (
        <div className={styles.sponsors}>
            <div className="container">
                <div className={styles.sponsors__wrapper}>
                    <h2>Gli azionisti dell'azienda</h2>
                    <div className={styles.sponsors__list}>
                        {images.map((image, index) => (
                            <div key={index} className={styles.sponsors__list__item}>
                                <img 
                                    src={image} 
                                    alt={`sponsor-${index}`} 
                                    className={styles.sponsors__image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
