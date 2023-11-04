import { configureStore } from "@reduxjs/toolkit";
import { CLEAR, DECIMAL, DIGIT, EQUEALS, OPERATOR } from "./actions";
function defaultState() {
    return [{ value: '0', decimals: '', point: false, negative: false, type: 'operand' }];
}

function calc(state){
    
    const expression = state.map(i=>{
        if(i.type === "operand")   {
            let value = i.value;
            if(i.point && i.decimals){
                value += '.' + i.decimals;
            }
            if(i.negative){
                value = '-' + value;
            }

            return value;
        }
        if(i.value === '×'){
            return '*';
        }
        if(i.value === '÷'){
            return '/';
        }

        return i.value;
    }).join('');
    
    const result = eval(expression).toPrecision(6);
    const formulaItem = {type:'solution',  };
    const str = Math.abs(result).toString();
    

    formulaItem.negative = result < 0;
    formulaItem.point = str.indexOf('.') >= 0;
    formulaItem.value = formulaItem.point ? str.substring(0, str.indexOf('.')) : str;
    formulaItem.decimals = formulaItem.point ? str.substring(str.indexOf('.') + 1) : '';
    return formulaItem;

}

const appReducer = (state = defaultState(), action) => {
    const last = { ...state[state.length - 1] };

    switch (action.type) {
        case DIGIT:
            if (last.type === 'solution') {
                return [{ value: action.value, decimals: '', point: false, negative: false, type: 'operand' }]
            }
            if (last.type === 'operator') {
                return [...state, { value: action.value, decimals: '', point: false, negative: false, type: 'operand' }]
            }

            if (last.type === 'operand' && last.point) {
                last.decimals += action.value;
                return [...state.slice(0, state.length - 1), last];
            }
            if (last.type === 'operand' && last.value === '0') {
                last.value = action.value;
                return [...state.slice(0, state.length - 1), last];
            }

            last.value += action.value;
            return [...state.slice(0, state.length - 1), last];



        case OPERATOR:
            if (last.type === 'solution') {
                last.type = "operand";
                return [ last, { value: action.value, decimals: '', point: false, negative: false, type: 'operator' }];
            }
            if (last.type === 'operand') {
                return [...state, { value: action.value, type: 'operator' }];
            }
            if (action.value === '-' && !last.negative) {
                last.negative = true;
                return [...state, { value: 0, decimals: '', point: false, negative: true, type: 'operand' }];
            }
            return state;

        case CLEAR:
            return [{ value: '0', decimals: '', point: false, negative: false, type: 'operand' }];

        case DECIMAL:
            if (last.type === 'solution') {
                return [{ value: '0', decimals: '', point: true, negative: false, type: 'operand' }]
            }
            if (last.type === 'operator') {
                return [...state, { value: '0', decimals: '', point: true, negative: false, type: 'operand' }]
            }
            if (!last.point) {
                last.point = true;
                return [...state.slice(0, state.length - 1), last];
            }
            return state;

        case EQUEALS:
            if (last.type === 'operand') {
                return [...state, { value: '=', type: 'operator' }, calc(state) ]
            }
            
            return state;

        default:
            return state;
    }
};

export const store = configureStore({
    reducer: appReducer
});
