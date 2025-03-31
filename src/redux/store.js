import { configureStore} from "@reduxjs/toolkit";
import calculatorReducer from "./Slice";


export const store = configureStore(
    {
        reducer: {
            calculator: calculatorReducer
            
        }
    }
)
