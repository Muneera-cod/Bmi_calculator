import React from 'react'

function BmiFormula() {
  return (
    <div className='w-fit h-fit flex gap-4 items-center'>
        BMI = <div className='flex flex-col'><h1>Weight(kg)</h1>
                                             <hr></hr>
                                             <h1>Height(m) * Height(m)</h1>
              </div>

    </div>
  )
}

export default BmiFormula