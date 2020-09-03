type initialStateType = {
    maxValue: number
    startValue: number
    count: number
    // resetCounter: () => void
    disNumberForInc?: number | boolean
    disNumberForReset?: number | boolean
    isSetValue: boolean
}
const initialState = {
    maxValue: 0,
    startValue: 0,
    count: 0,
    disNumberForInc: 0,
    disNumberForReset: 0,
    isSetValue: true
};

type ActionsType = upCounterACType | resetCounterACType;

const counterReduser = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case UP_COUNTER: {
            return (state.count < state.maxValue) ? {...state, count: state.count + 1} : {
                ...state,
                count: state.maxValue
            };
        }
        case RESET_COUNTER: {
            return { ...state, count: state.startValue};
        }
        default:
            return state;
    }
};
const UP_COUNTER = 'UP_COUNTER';
const RESET_COUNTER = 'RESET_COUNTER';
type upCounterACType = {
    type: string
}

type resetCounterACType = {
    type: string
}
export const upCounterAC = (): upCounterACType => ({type: 'UP_COUNTER'});
export const resetCounterAC = (): resetCounterACType => ({type: 'RESET_COUNTER'});
export default counterReduser;

