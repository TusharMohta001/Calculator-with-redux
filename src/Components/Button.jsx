import React from 'react'

const Button = ({Text, onClick}) => {
  return (
    <button onClick={() => onClick()} className="w-full h-30 bg-gray-200 text-gray-700 border-3 border-gray-300 outline-none p-2 text-4xl rounded-2xl transition-all duration-300 ease-in-out shadow-lg hover:bg-gray-300 active:bg-gray-400 flex items-center justify-center">{Text}</button>
  )
}

export default Button