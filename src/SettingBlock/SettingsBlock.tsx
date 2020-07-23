import React from "react";
import s from "./SettingsBlock.module.css";
import MyBtn from "../Common/MyBtn";

type SettingsBlockType = {
    maxValue:number
    startValue: number
    onChangeInputMaxValue: (e: number) => void
    onChangeInputStartValue: (e: number) => void
    setNewValue: (num: number, max:number) => void
}
const SettingsBlock = (props: SettingsBlockType) => {
let {maxValue,startValue, onChangeInputMaxValue, onChangeInputStartValue, setNewValue } = props;
    return (
        <div className={s.settings_block}>
            <div className={s.property}>
                <div className={s.block}>
                    <div>max value:</div>
                    <div><input
                        className={`${s.input} ${(maxValue < startValue || startValue === maxValue  ) ? s.error: ''}`}
                        type="number"
                        defaultValue={maxValue}
                        onChange={(event => onChangeInputMaxValue(Number(event.target.value)))}
                    />
                    </div>
                </div>
                <div className={s.block}>
                    <div>start value:</div>
                    <div>
                        <input
                            className={`${s.input} ${(startValue < 0 || startValue === maxValue ) ? s.error : ''}`}
                            type="number"
                            defaultValue={startValue}
                            onChange={(event => onChangeInputStartValue(Number(event.target.value)))}/></div>
                </div>
            </div>
            <div className={s.footer}>
                <MyBtn
                    name={'set'}
                    value={0}
                    onClick={() => {
                        setNewValue(startValue, maxValue)
                    }}/>
            </div>
        </div>

    )
};

export default SettingsBlock;