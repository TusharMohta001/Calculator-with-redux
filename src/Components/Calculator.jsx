import React, { useState, useEffect } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, numberShow , removeNumber,mulNumber, divNumber, subNumber, EmptyNumber, equal } from '../redux/Slice';

const Calculator = () => {
  const number = useSelector((state) => state.calculator.firstValue)
  const RefNumber = useSelector((state) => state.calculator.secondValue)
  const dispatch = useDispatch();
    

  const handleCalculatorInput = (input) => {
    if (input === 'c' || input === 'Escape' || input === 'Delete') {
      dispatch(EmptyNumber());
    } else if (input === 'backspace' || input === 'Backspace') {
      dispatch(removeNumber());
    } else if (input === '=' || input === 'Enter') {
        dispatch(equal());      
    } else if (input === '+') {
      dispatch(addNumber());
    } else if (input === '-') {
      dispatch(subNumber());
    } else if (input === '*') {
      dispatch(mulNumber());
    } else if (input === '/') {
      dispatch(divNumber());
    } else if (/^[0-9]+$/.test(input)) {
      dispatch(numberShow(input));
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => handleCalculatorInput(event.key);
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [number]);

  // Rest of the component remains the same
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        <div className="w-3/10 h-3/4 flex justify-center items-center flex-col p-2 bg-gray-300 rounded-2xl">
          <div className="w-full flex flex-col px-8 relative">
            <div className="text-lg text-gray-600 absolute top-0 left-10 p-2">{RefNumber === 0 ? '' : RefNumber}</div>
            <input 
              type="text" 
              value={number} 
              readOnly
              className="h-44 text-4xl bg-gray-100 text-gray-700 border-3 border-gray-300 outline-none p-2 rounded-2xl transition-all duration-300 ease-in-out " 
              placeholder="Enter your text"  
            />
          </div>
          <div className="grid grid-cols-4 gap-2 w-full mt-10 p-4 rounded-lg">
            <div className="col-span-2">
              <Button Text={<i className="fa-solid fa-c"></i>} onClick={() => dispatch(EmptyNumber())} />
            </div>
            <Button Text={<i className="fa-solid fa-delete-left"></i>} onClick={() => dispatch(removeNumber())} />
            <Button Text={<i className="fa-solid fa-divide"></i>} onClick={() => dispatch(divNumber())} />
            <Button Text={<i className="fa-solid fa-1"></i>} onClick={() => dispatch(numberShow('1'))} />
            <Button Text={<i className="fa-solid fa-2"></i>} onClick={() => dispatch(numberShow('2'))} />
            <Button Text={<i className="fa-solid fa-3"></i>} onClick={() => dispatch(numberShow('3'))} />
            <Button Text={<i className="fa-solid fa-multiply"></i>} onClick={() => dispatch(mulNumber())} />
            <Button Text={<i className="fa-solid fa-4"></i>} onClick={() => dispatch(numberShow('4'))} />
            <Button Text={<i className="fa-solid fa-5"></i>} onClick={() => dispatch(numberShow('5'))} />
            <Button Text={<i className="fa-solid fa-6"></i>} onClick={() => dispatch(numberShow('6'))} />
            <Button Text={<i className="fa-solid fa-minus"></i>} onClick={() => dispatch(subNumber())} />
            <Button Text={<i className="fa-solid fa-7"></i>} onClick={() => dispatch(numberShow('7'))} />
            <Button Text={<i className="fa-solid fa-8"></i>} onClick={() => dispatch(numberShow('8'))} />
            <Button Text={<i className="fa-solid fa-9"></i>} onClick={() => dispatch(numberShow('9'))} />
            <Button Text={<i className="fa-solid fa-plus"></i>} onClick={() => dispatch(addNumber())} />
            <Button Text="00" onClick={() => dispatch(numberShow('00'))} />
            <Button Text={<i className="fa-solid fa-0"></i>} onClick={() => dispatch(numberShow('0'))} />
            <Button Text={"000"} onClick={() => dispatch(numberShow('000'))} />
            <Button Text={<i className="fa-solid fa-equals"></i>} onClick={() => dispatch(equal())} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator