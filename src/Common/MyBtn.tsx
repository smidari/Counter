import React from "react";
import s from "./MyBtn.module.css";

type MyBtnType = {
    name: string
    disNumberForInc?: number
    disNumberForReset?: number
    value?: number
    onClick: () => void
}

const MyBtn = (props: MyBtnType) => (
    <button
        disabled={props.value === props.disNumberForReset || props.value === props.disNumberForInc}
        className={s.myButton}
        onClick={() => props.onClick()}
    >{props.name}
    </button>
);

export default MyBtn;