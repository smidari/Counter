import React, {ChangeEvent} from "react";
import s from "./SettingsBlock.module.css";
import MyBtn from "../Common/MyBtn";

type SettingsBlockType = {
    maxValue: number
    startValue: number
    onChangeInputMaxValue: (e: number) => void
    onChangeInputStartValue: (e: number) => void
    setNewValue: (num: number, max: number) => void
    disabled: boolean
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        defaultState = JSON.parse(stateAsString) as T;
    }
    return defaultState;
}

const SettingsBlock = (props: SettingsBlockType) => {
    let {maxValue, startValue, onChangeInputMaxValue, onChangeInputStartValue, setNewValue, disabled} = props;
    const setValueBtnOnclickHandler = () => {
        setNewValue(startValue, maxValue);
    };
    const inputMaxValueOnchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeInputMaxValue(Number(event.target.value));
    };
    const inputMinValueOnchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeInputStartValue(Number(event.target.value));
    };


    return (
        <div className={s.settings_block}>
            <div className={s.property}>
                <div className={s.block}>
                    <div>max value:</div>
                    <div><input
                        className={`${s.input} ${(maxValue < startValue || startValue === maxValue) ? s.error : ''}`}
                        type="number"
                        defaultValue={maxValue}
                        onChange={inputMaxValueOnchangeHandler}
                    />
                    </div>
                </div>
                <div className={s.block}>
                    <div>start value:</div>
                    <div>
                        <input
                            className={`${s.input} ${(startValue < 0 || startValue === maxValue) ? s.error : ''}`}
                            type="number"
                            defaultValue={startValue}
                            onChange={inputMinValueOnchangeHandler}/></div>
                </div>
            </div>
            <div className={s.footer}>
                <MyBtn
                    disabled={disabled}
                    name={'set'}
                    value={0}
                    onClick={setValueBtnOnclickHandler}/>
            </div>
        </div>

    )
};

export default SettingsBlock;