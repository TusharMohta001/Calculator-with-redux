import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstValue: 0,
    secondValue: 0,
    result:0,
}



const CalculatorSlice = createSlice({

    name: "calculators",
    initialState,
    reducers:{
        EmptyNumber: (state) =>{
            state.firstValue = 0;
            state.secondValue = 0;
        },
        removeNumber: (state)=>{
            state.firstValue = state.firstValue.toString().slice(0, -1);
            if(state.firstValue === '') {
                state.firstValue = 0;
            }
        },
        numberShow : (state, action) =>{
            if (state.firstValue === 0) {
                state.firstValue = action.payload;
            } else {
                state.firstValue += action.payload;
            }
        },
        addNumber: (state) => {
            if (state.firstValue === 0) {
                return;
            }
            if (state.secondValue === 0) {
                state.secondValue = state.firstValue + " +";
            } else {
                // Convert string to number and remove the "+" sign
                const secondNum = parseFloat(state.secondValue);
                state.result = secondNum + parseFloat(state.firstValue);
                state.secondValue = state.result + " +";
            }
            state.firstValue = 0;
        },
        subNumber: (state) => {
            if(state.firstValue === 0){
                return;
            }
            if (state.secondValue === 0) {
                state.secondValue = state.firstValue + " -";
            } else {
                // Convert string to number and remove the "+" sign
                const secondNum = parseFloat(state.secondValue);
                state.result = secondNum - parseFloat(state.firstValue);
                state.secondValue = state.result + " -";
            }
            state.firstValue = 0;
        },
        divNumber: (state) => {
            if(state.firstValue === 0){
                return;
            }
            if (state.secondValue === 0) {
                state.secondValue = state.firstValue + " /";
            } else {
                // Convert string to number and remove the "+" sign
                const secondNum = parseFloat(state.secondValue);
                state.result = secondNum / parseFloat(state.firstValue);
                state.secondValue = state.result + " /";
            }
            state.firstValue = 0;
        },
        mulNumber: (state) => {
            if(state.firstValue === 0){
                return;
            }
            if (state.secondValue === 0) {
                state.secondValue = state.firstValue + " *";
            } else {
                const secondNum = parseFloat(state.secondValue);
                state.result = secondNum * parseFloat(state.firstValue);
                state.secondValue = state.result + " *";
            }
            state.firstValue = 0;
        },
        equal: (state) => {
            if (state.firstValue === 0 || state.secondValue === 0) {
                return;
            }
            const secondNum = parseFloat(state.secondValue);
            const firstNum = parseFloat(state.firstValue);
            const operator = state.secondValue.slice(-1); 
            
            switch(operator) {
                case '+':
                    state.result = secondNum + firstNum;
                    break;
                case '-':
                    state.result = secondNum - firstNum;
                    break;
                case '*':
                    state.result = secondNum * firstNum;
                    break;
                case '/':
                    state.result = secondNum / firstNum;
                    break;
                default:
                    return;
            }
            state.secondValue = state.secondValue + " " + state.firstValue + " = " + state.result.toString();
            state.firstValue = 0;
        }
    }
})


export const { addNumber, numberShow ,subNumber, divNumber, mulNumber, removeNumber, EmptyNumber, equal} = CalculatorSlice.actions;

export default CalculatorSlice.reducer