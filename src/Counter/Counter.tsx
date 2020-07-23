import React from "react";
import s from "./Counter.module.css"
import MyBtn from "../Common/MyBtn";

type CounterType = {
    isSetValue: boolean
    maxValue: number
    startValue: number
    count: number
    upCounter: () => void
    resetCounter: () => void
    disNumberForInc?: number
    disNumberForReset?: number
}

const Counter = (props: CounterType) => {
    let {isSetValue, maxValue, startValue, count, upCounter, resetCounter, disNumberForInc, disNumberForReset} = props;
    function resultNameForSpan() {
        if ((startValue < 0 && !isSetValue) || startValue === maxValue) {
            return 'Incorrect value'
        } else if (startValue >= 0 && !isSetValue) {
            return `enter values and press 'set'`
        } else if (isSetValue) {
            return count
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.result}>
                <span
                    className={`${s.text} ${((startValue < 0 && !isSetValue) || startValue === maxValue) ? s.error : ''}
                    ${isSetValue && count === disNumberForInc ? s.error : ''}
                    ${typeof resultNameForSpan() === "string" ? s.small : s.large}`}
                >{resultNameForSpan()}
                </span>
            </div>
            <div className={s.footer}>
                <MyBtn
                    name={'inc'}
                    value={count}
                    onClick={upCounter}
                    disNumberForInc={disNumberForInc}/>
                <MyBtn
                    name={'reset'}
                    value={count}
                    onClick={resetCounter}
                    disNumberForReset={disNumberForReset}/>
            </div>
        </div>
    )
};

export default Counter;