import React, {useState} from 'react';
import s from './App.module.css';
import SettingsBlock, {restoreState} from "./SettingBlock/SettingsBlock";
import Counter from "./Counter/Counter";

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}


const App = () => {
    const defaultStartValue = ():number => {
        const stateFromLocalStorage = restoreState('counter', {start: 0, max: 0});
        return +stateFromLocalStorage.start
    };
    const defaultMaxValue = () => {
        const stateFromLocalStorage = restoreState('counter', {start: 0, max: 0});
        return stateFromLocalStorage.max
    };

    const [maxValue, setMaxValue] = useState<number>(defaultMaxValue());

    const [startValue, setStartValue] = useState<number>(defaultStartValue());
    const [count, setCount] = useState<number>(startValue);
    const [isSetValue, setIsSetValue] = useState<boolean>(true);

    const [disabledForBtnInc, setDisabledForBtnInc] = useState<boolean | number>(maxValue);
    const [disabledForBtnReset, setDisabledForBtnReset] = useState<boolean | number>(startValue);

    const upCounter = () => (count < maxValue) ? setCount(count + 1) : setCount(maxValue);
    const resetCounter = () => setCount(startValue);
    const setMaxValueForInputHandler = (value: number) => {
        setMaxValue(value);
        setIsSetValue(false);
        setDisabledForBtnInc(true)
    };

    const setStartValueForInputHandler = (value: number) => {
        setStartValue(value);
        setIsSetValue(false);
        setDisabledForBtnInc(true)

    };
    const setNewValue = (start: number, max: number) => {
        setCount(start);
        setMaxValue(max);
        setDisabledForBtnInc(max);
        setDisabledForBtnReset(start);
        setIsSetValue(true);
        saveState('counter', {start:start, max:max})
    };



    return <div className={s.wrapper}>
        <SettingsBlock
            maxValue={maxValue}
            startValue={startValue}
            onChangeInputMaxValue={setMaxValueForInputHandler}
            onChangeInputStartValue={setStartValueForInputHandler}
            setNewValue={setNewValue}
            disabled={isSetValue}/>
        <Counter isSetValue={isSetValue}
                 maxValue={maxValue}
                 startValue={startValue}
                 count={count}
                 upCounter={upCounter}
                 resetCounter={resetCounter}
                 disNumberForInc={disabledForBtnInc}
                 disNumberForReset={disabledForBtnReset}/>
    </div>
};

export default App;
