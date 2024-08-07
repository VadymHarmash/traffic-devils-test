import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import 'ion-rangeslider/js/ion.rangeSlider.min.js'

export default function Debts({ styles }) {
    const [debt, setDebt] = useState(300)
    const debtRangeRef = useRef(null)
    const monthRangeRef = useRef(null)

    useEffect(() => {
        const debtRangeElement = debtRangeRef.current

        if (debtRangeElement) {
            $(debtRangeElement).ionRangeSlider({
                type: "single",
                min: 300,
                max: 15000,
                from: 300,
                grid: true,
                onFinish: (data) => {
                    setDebt(data.from)
                }
            })

            return () => {
                const sliderInstance = $(debtRangeElement).data("ionRangeSlider")
                if (sliderInstance) sliderInstance.destroy()
            }
        }
    }, [])

    useEffect(() => {
        const monthRangeElement = monthRangeRef.current

        if (monthRangeElement) {
            $(monthRangeElement).ionRangeSlider({
                type: "single",
                min: 1,
                max: 12,
                from: 1,
                grid: true,
                grid_num: 11,
                postfix: " month"
            })

            return () => {
                const sliderInstance = $(monthRangeElement).data("ionRangeSlider")
                if (sliderInstance) sliderInstance.destroy()
            }
        }
    }, [])

    return (
        <div className={styles.donnet__debts}>
            <div className={styles.donnet__debts__sliders}>
                <input type="text" ref={monthRangeRef} />
                <input type="text" ref={debtRangeRef} />
            </div>
            <button>MOGUĆA DOBIT: <span>€ {debt}</span></button>
        </div>
    )
}
