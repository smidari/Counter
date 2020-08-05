import React from "react";
import s from "./MyBtn.module.css";

type MyBtnType = {
    name: string
    disabled?: number | boolean
    value?: number
    onClick: () => void
}


const MyBtn = (props: MyBtnType) => (
    <button
        disabled={typeof props.disabled === "boolean" ? props.disabled : props.value === props.disabled}
        className={s.myButton}
        onClick={() => props.onClick()}
    >{props.name}
    </button>
);

export default MyBtn;