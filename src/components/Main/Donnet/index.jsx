import React from 'react'
import styles from './donnet.module.scss'
import Debts from './Debts'
import donnet from '../../../assets/images/main/donnet/donnet.png'

export default function Donnet() {
    return (
        <div className={styles.donnet}>
            <div className="container">
                <div className={styles.donnet__wrapper}>
                    <div className={styles.donnet__top}>
                        <img src={donnet} alt="Donnet" />
                        <p className={styles.donnet__text}>
                            Philippe Donnet, amministratore delegato di Generali, ha appena festeggiato dieci anni in Italia e in un’intervista a “Repubblica” spiega che bilancio trae dal nostro Paese: “In questi dieci anni il mondo ha dovuto fare i conti con prove molto dure e questo ci ha resi più capaci di gestire l’imprevedibile. L’Italia ha resistito bene. Per quanto mi riguarda, tre anni fa sono diventato cittadino italiano: perché ci tenevo a rimarcare un’adesione forte ai valori e alla cultura di questo Paese”. Un’altra prova per l’economia è stato il repentino rialzo dei tassi: “A mio parere è improprio parlare oggi di tassi alti: quando ero teenager, i mutui viaggiavano a due cifre percentuali. La vera anomalia è stata vivere con tassi a zero per quindici anni. Oggi siamo in una situazione normale. Per quel che riguarda il nostro gruppo, abbiamo un business mix grazie al quale possiamo crescere in qualsiasi ciclo economico”. La crescita dell’Italia è stimata attorno allo 0,7 per cento: “Noi non avremo problemi ma per la crescita si può fare meglio, in Italia e in Europa. Ritengo che in Europa non ci sia abbastanza Europa, ma troppe tasse e troppe norme, che si sovrappongono a quelle nazionali. Questo non aiuta né le famiglie né le imprese: quindi abbassiamo le tasse, riduciamo le norme e liberiamo le energie imprenditoriali”.
                        </p>
                    </div>
                    <h2>Potencijal dobiti</h2>
                    <div className={styles.donnet__bottom}>
                        <Debts styles={styles} />
                        <div className={styles.donnet__stats}>
                            <div className={styles.donnet__stats__item}>
                                <h3>UKUPNA DOBIT KORISNIKA:</h3>
                                <span>€ 128 567 000</span>
                            </div>
                            <div className={styles.donnet__stats__item}>
                                <h3>AKTIVNI KORISNICI:</h3>
                                <span>77 335</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
