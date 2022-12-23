import { useState } from "react";
import './App.css'

function App() {
  const [evaluation, setEvaluation] = useState('')
  const [result, setResult] = useState('')
  const symbols = ['/', '*', '+', '-', '.']
  const handleCalculation = val => {

    if (
      symbols.includes(val) & evaluation === '' ||
      symbols.includes(val) & symbols.includes(evaluation.slice(-1))
    ) {
      return
    }
    setEvaluation(evaluation + val)

    if (!symbols.includes(val)) {
      setResult(eval(evaluation + val).toString())
    }

  }
  const handleDigits = () => {
    const digits = []

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => handleCalculation(i.toString())} key={i} className="p-2 md:p-5 bg-yellow-500 rounded-lg">{i}</button>
      )
    }
    return digits
  }
  const Eval = () => {
    setEvaluation(eval(evaluation).toString())
    setResult("")
  }
  const clear = () => {
    if (evaluation === '') {
      return
    }
    const val = evaluation.slice(0, -1)
    setEvaluation(val)
  }

  return (
    <div className="w-full">

      <div className=" m-5 md:mx-auto p-2 md:p-5 md:w-2/5 my-20 rounded-lg bg-black">
        <div className="">

          <div className=' flex flex-col text-right text-5xl bg-green-400 h-36 p-5'>
            {evaluation || '0'}
            {result ? <span className=" opacity-50">{result}</span> : ''}


          </div>

          <div>
            <div className='bg-black grid grid-cols-5 gap-1 p-2 md:p-5 '>

              <button onClick={() => { handleCalculation('/') }} className="p-2 md:p-5 rounded-lg  text-2xl md:text-5xl bg-red-700">/</button>
              <button onClick={() => { handleCalculation('*') }} className="p-2 md:p-5 rounded-lg  text-2xl md:text-5xl bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 md:w-10 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

              </button>
              <button onClick={() => { handleCalculation('+') }} className="p-2 md:p-5 rounded-lg  text-2xl md:text-5xl bg-red-700">+</button>
              <button onClick={() => { handleCalculation('-') }} className="p-2 md:p-5 rounded-lg  text-2xl md:text-5xl bg-red-700">-</button>
              <button onClick={clear} className=" p-2 md:p-5 rounded-lg text-2xl bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-4 md:w-10 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>

              </button>
            </div>
            <div className='grid grid-cols-3 gap-2 md:gap-4 bg-black text-2xl md:text-5xl p-2'>

              {handleDigits()}

              <button onClick={() => { handleCalculation('.') }} className="p-2 md:p-5 bg-yellow-500 rounded-lg">.</button>
              <button onClick={() => { handleCalculation('0') }} className="p-2 md:p-5 bg-yellow-500 rounded-lg">0</button>
              <button onClick={Eval} className="p-2 md:p-5 bg-yellow-500 rounded-lg">=</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;