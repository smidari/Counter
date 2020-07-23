import React, {useState} from 'react';
import s from './App.module.css';
import SettingsBlock from "./SettingBlock/SettingsBlock";
import Counter from "./Counter/Counter";

const App = () => {
        const [count, setCount] = useState<number>(0);
        const upCounter = () => (count < maxValue) ? setCount(count + 1) : setCount(maxValue);
        const resetCounter = () => setCount(startValue);

        const [maxValue, setMaxValue] = useState<number>(0);
        const [startValue, setStartValue] = useState<number>(0);
        const [isSetValue, setIsSetValue] = useState<boolean>(false);


        const setNewValue = (start: any, max: number) => {
            setCount(start);
            setMaxValue(max);
            setIsSetValue(!isSetValue)
        };

        return <div className={s.wrapper}>
            <SettingsBlock
                maxValue={maxValue}
                startValue={startValue}
                onChangeInputMaxValue={setMaxValue}
                onChangeInputStartValue={setStartValue}
                setNewValue={setNewValue}
            />
            <Counter isSetValue={isSetValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     count={count}
                     upCounter={upCounter}
                     resetCounter={resetCounter}
                     disNumberForInc={maxValue}
                     disNumberForReset={startValue}/>
        </div>
    }
;


export default App;
